/**
 * Hero scene: "From commit to cluster."
 * Commits stream in from the left, funnel through three security gates (rings),
 * and land on a slowly rotating cluster of pod nodes that surrounds the portrait.
 * Some commits are stopped at a gate: they turn red, the gate flashes, and they fade.
 *
 * Performance budget: one draw call per layer (6 total), no shadows, no post-processing,
 * pixel ratio capped, and the render loop stops when the hero is off screen or the tab is hidden.
 */
import {
  AddEquation,
  BufferAttribute,
  CustomBlending,
  OneFactor,
  SrcAlphaFactor,
  ZeroFactor,
  BufferGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  Vector3,
  WebGLRenderer,
  WireframeGeometry,
} from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Additive colour that never touches destination alpha: the glow adds light over the page
// without writing dark, semi-opaque pixels into the transparent canvas.
const ADD = {
  blending: CustomBlending,
  blendEquation: AddEquation,
  blendSrc: SrcAlphaFactor,
  blendDst: OneFactor,
  blendSrcAlpha: ZeroFactor,
  blendDstAlpha: OneFactor,
} as const;
const BLUE = new Color('#3b7bff'),
  BLUE_HI = new Color('#7aa6ff'),
  GREEN = new Color('#3fcf8e'),
  RED = new Color('#ff5d6c'),
  WHITE = new Color('#e9f0ff');
const FOV = 40,
  CAM_Z = 12;

function dotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!,
    grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,.8)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

function fibonacciSphere(n: number, r: number) {
  const pts: Vector3[] = [],
    phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2,
      rad = Math.sqrt(1 - y * y),
      th = phi * i;
    pts.push(new Vector3(Math.cos(th) * rad * r, y * r, Math.sin(th) * rad * r));
  }
  return pts;
}

export function startHeroScene(canvas: HTMLCanvasElement, anchor: HTMLElement | null) {
  const hero = canvas.parentElement!;
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || innerWidth < 760;
  const dpr = Math.min(devicePixelRatio || 1, lowPower ? 1.25 : 1.75);

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: dpr < 1.5, alpha: true, powerPreference: 'default' });
  } catch {
    return;
  }
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);
  camera.position.set(0, 0, CAM_Z);
  const tex = dotTexture();
  const world = new Group();
  scene.add(world);

  /* ---- Cluster: pod nodes on a sphere, linked to their neighbours ---- */
  const NODES = lowPower ? 64 : 96;
  const unit = fibonacciSphere(NODES, 1);
  const cluster = new Group();
  world.add(cluster);
  const nodeGeo = new BufferGeometry();
  const nodePos = new Float32Array(NODES * 3),
    nodeCol = new Float32Array(NODES * 3);
  const nodeHeat = new Float32Array(NODES);
  const nodeTint: Color[] = unit.map(() => GREEN);
  unit.forEach((u, i) => nodePos.set([u.x, u.y, u.z], i * 3));
  nodeGeo.setAttribute('position', new BufferAttribute(nodePos, 3));
  nodeGeo.setAttribute('color', new BufferAttribute(nodeCol, 3));
  const nodes = new Points(
    nodeGeo,
    new PointsMaterial({ size: 0.16, map: tex, vertexColors: true, transparent: true, depthWrite: false, ...ADD }),
  );
  cluster.add(nodes);

  const pairs: number[] = [];
  for (let i = 0; i < NODES; i++)
    for (let j = i + 1; j < NODES; j++) if (unit[i].distanceTo(unit[j]) < 0.42) pairs.push(i, j);
  const linkGeo = new BufferGeometry();
  const linkPos = new Float32Array(pairs.length * 3);
  pairs.forEach((idx, k) => linkPos.set([unit[idx].x, unit[idx].y, unit[idx].z], k * 3));
  linkGeo.setAttribute('position', new BufferAttribute(linkPos, 3));
  const links = new LineSegments(
    linkGeo,
    new LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.16, depthWrite: false, ...ADD }),
  );
  cluster.add(links);

  const core = new LineSegments(
    new WireframeGeometry(new IcosahedronGeometry(1, 1)),
    new LineBasicMaterial({ color: BLUE_HI, transparent: true, opacity: 0.06, depthWrite: false }),
  );
  cluster.add(core);

  /* ---- Gates: three rings the commits pass through ---- */
  const gates = [0, 1, 2].map(() => {
    const m = new Mesh(
      new TorusGeometry(1, 0.012, 8, 96),
      new MeshBasicMaterial({ color: BLUE_HI.clone(), transparent: true, opacity: 0.25, depthWrite: false, ...ADD }),
    );
    m.rotation.y = Math.PI / 2.35;
    world.add(m);
    return { mesh: m, flash: 0, tint: BLUE_HI.clone() };
  });

  /* ---- Commit stream: heads + fading tails ---- */
  const COMMITS = lowPower ? 18 : 34,
    TAIL = 9;
  type Commit = {
    curve: CatmullRomCurve3;
    t: number;
    speed: number;
    node: number;
    blockAt: number;
    dead: number;
    gu: number[];
  };
  const commits: Commit[] = [];
  const headGeo = new BufferGeometry(),
    tailGeo = new BufferGeometry();
  const headPos = new Float32Array(COMMITS * 3),
    headCol = new Float32Array(COMMITS * 3);
  const tailPos = new Float32Array(COMMITS * TAIL * 3),
    tailCol = new Float32Array(COMMITS * TAIL * 3);
  headGeo.setAttribute('position', new BufferAttribute(headPos, 3));
  headGeo.setAttribute('color', new BufferAttribute(headCol, 3));
  tailGeo.setAttribute('position', new BufferAttribute(tailPos, 3));
  tailGeo.setAttribute('color', new BufferAttribute(tailCol, 3));
  const tails = new Points(
    tailGeo,
    new PointsMaterial({ size: 0.11, map: tex, vertexColors: true, transparent: true, depthWrite: false, ...ADD }),
  );
  const heads = new Points(
    headGeo,
    new PointsMaterial({ size: 0.3, map: tex, vertexColors: true, transparent: true, depthWrite: false, ...ADD }),
  );
  // Positions change every frame, so a bounding sphere computed once would cull them wrongly.
  tails.frustumCulled = heads.frustumCulled = false;
  world.add(tails, heads);

  /* ---- Dust for depth ---- */
  const DUST = lowPower ? 160 : 320;
  const dustGeo = new BufferGeometry(),
    dustPos = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 30;
    dustPos[i * 3 + 1] = (Math.random() - 0.5) * 16;
    dustPos[i * 3 + 2] = -Math.random() * 10 - 1;
  }
  dustGeo.setAttribute('position', new BufferAttribute(dustPos, 3));
  const dust = new Points(
    dustGeo,
    new PointsMaterial({
      size: 0.07,
      map: tex,
      color: BLUE_HI,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      ...ADD,
    }),
  );
  scene.add(dust);

  /* ---- Layout: map the portrait's screen position into the scene ---- */
  const L = { cx: 2.6, cy: 0, R: 2.4, x0: -9, gx: [-3, -1.5, 0], viewW: 16, viewH: 8.7 };
  function layout() {
    const w = canvas.clientWidth,
      h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    L.viewH = 2 * CAM_Z * Math.tan((FOV * Math.PI) / 360);
    L.viewW = L.viewH * camera.aspect;
    const toX = (px: number) => (px / w - 0.5) * L.viewW,
      toY = (py: number) => -(py / h - 0.5) * L.viewH;
    const cr = canvas.getBoundingClientRect();
    if (anchor) {
      const r = anchor.getBoundingClientRect();
      L.cx = toX(r.left - cr.left + r.width / 2);
      L.cy = toY(r.top - cr.top + r.height * 0.45);
      L.R = Math.max(1.6, (r.height / h) * L.viewH * 0.78);
    } else {
      L.cx = L.viewW * 0.25;
      L.cy = 0;
      L.R = L.viewH * 0.3;
    }
    const narrow = w < 980;
    L.x0 = -L.viewW / 2 - 1;
    const span = L.cx - L.R - L.x0;
    const edge = L.cx - L.R * 1.02;
    L.gx = narrow
      ? [L.x0 + span * 0.45, L.x0 + span * 0.62, L.x0 + span * 0.79]
      : [edge - 0.95, edge - 0.6, edge - 0.25];
    cluster.position.set(L.cx, L.cy, -1);
    cluster.scale.setScalar(L.R);
    gates.forEach((g, i) => {
      g.mesh.position.set(L.gx[i], L.cy, -0.5);
      g.mesh.scale.setScalar(narrow ? 0.55 : 0.5);
    });
  }

  const tmp = new Vector3();
  function nodeWorld(i: number, out: Vector3) {
    return out.copy(unit[i]).applyMatrix4(cluster.matrixWorld);
  }
  function spawn(c: Partial<Commit>, delay = 0): Commit {
    cluster.updateMatrixWorld();
    const node = (Math.random() * NODES) | 0;
    const end = nodeWorld(node, new Vector3());
    const y0 = L.cy + (Math.random() - 0.5) * L.viewH * 0.9;
    const pts = [
      new Vector3(L.x0, y0, (Math.random() - 0.5) * 2 - 1),
      new Vector3(L.gx[0], L.cy + (Math.random() - 0.5) * 0.6, -0.5),
      new Vector3(L.gx[1], L.cy + (Math.random() - 0.5) * 0.6, -0.5),
      new Vector3(L.gx[2], L.cy + (Math.random() - 0.5) * 0.6, -0.5),
      end,
    ];
    const curve = new CatmullRomCurve3(pts, false, 'centripetal');
    // Move at constant speed along the curve (arc length), and find where each gate sits on it.
    const lengths = curve.getLengths(240),
      total = lengths[lengths.length - 1];
    const gu = [1, 2, 3].map((k) => lengths[Math.round((k / 4) * 240)] / total);
    const blocked = Math.random() < 0.16;
    const speed = (1.15 + Math.random() * 0.55) / total; // world units per second, as a fraction of the path
    return Object.assign(c, {
      curve,
      t: -delay * speed,
      speed,
      node,
      blockAt: blocked ? 1 + ((Math.random() * 3) | 0) : 0,
      dead: 0,
      gu,
    }) as Commit;
  }

  layout();
  for (let i = 0; i < COMMITS; i++) commits.push(spawn({}, Math.random() * 4));

  /* ---- Interaction: pointer parallax + scroll ---- */
  const pointer = { x: 0, y: 0 },
    look = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    pointer.x = (e.clientX / innerWidth - 0.5) * 2;
    pointer.y = (e.clientY / innerHeight - 0.5) * 2;
  };
  addEventListener('pointermove', onPointer, { passive: true });
  const scroll = { p: 0 };
  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (st) => (scroll.p = st.progress),
  });

  /* ---- Loop ---- */
  let last = performance.now(),
    running = false,
    inView = true;
  const c = new Color();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const time = now / 1000;

    look.x += (pointer.x - look.x) * 0.04;
    look.y += (pointer.y - look.y) * 0.04;
    camera.position.x = look.x * 0.45;
    camera.position.y = -look.y * 0.3 - scroll.p * 1.2;
    camera.position.z = CAM_Z + scroll.p * 2.5;
    camera.lookAt(0, -scroll.p * 0.8, 0);
    cluster.rotation.y += dt * (0.12 + scroll.p * 0.5);
    cluster.rotation.x = Math.sin(time * 0.15) * 0.15;
    dust.position.x = -look.x * 0.3;
    dust.rotation.z = time * 0.004;

    // Nodes: idle blue, flash on arrival, ease back.
    for (let i = 0; i < NODES; i++) {
      nodeHeat[i] = Math.max(0, nodeHeat[i] - dt * 0.8);
      const twinkle = 0.55 + 0.15 * Math.sin(time * 1.3 + i * 1.7);
      c.copy(BLUE).multiplyScalar(twinkle).lerp(nodeTint[i], nodeHeat[i]);
      nodeCol[i * 3] = c.r;
      nodeCol[i * 3 + 1] = c.g;
      nodeCol[i * 3 + 2] = c.b;
    }
    nodeGeo.attributes.color.needsUpdate = true;

    // Gates: pulse when crossed.
    gates.forEach((g) => {
      g.flash = Math.max(0, g.flash - dt * 1.6);
      (g.mesh.material as MeshBasicMaterial).opacity = 0.1 + g.flash * 0.8;
      (g.mesh.material as MeshBasicMaterial).color.copy(BLUE_HI).lerp(g.tint, g.flash);
    });

    // Commits.
    for (let i = 0; i < COMMITS; i++) {
      const cm = commits[i];
      if (cm.dead > 0) {
        cm.dead -= dt;
        if (cm.dead <= 0) spawn(cm, Math.random() * 1.5);
      } else {
        const prev = cm.t;
        cm.t += cm.speed * dt;
        for (let gi = 0; gi < 3; gi++) {
          const at = cm.gu[gi];
          if (prev < at && cm.t >= at) {
            if (cm.blockAt === gi + 1) {
              cm.t = at;
              cm.dead = 1.1;
              gates[gi].flash = 1;
              gates[gi].tint = RED;
            } else if (gates[gi].flash < 0.35) {
              gates[gi].flash = 0.35;
              gates[gi].tint = BLUE_HI;
            }
          }
        }
        if (cm.t >= 1 && !cm.dead) {
          nodeHeat[cm.node] = 1;
          nodeTint[cm.node] = GREEN;
          spawn(cm, Math.random() * 1.2);
        }
      }
      const alive = cm.t > 0;
      const fade = cm.dead > 0 ? cm.dead / 1.1 : Math.min(1, cm.t * 10);
      const blockedNow = cm.dead > 0;
      cm.curve.getPointAt(Math.min(1, Math.max(0, cm.t)), tmp);
      headPos.set([tmp.x, tmp.y, tmp.z], i * 3);
      c.copy(blockedNow ? RED : WHITE).multiplyScalar(alive ? fade : 0);
      headCol.set([c.r, c.g, c.b], i * 3);
      for (let j = 0; j < TAIL; j++) {
        const tt = Math.max(0, cm.t - (j + 1) * 0.009);
        cm.curve.getPointAt(Math.min(1, tt), tmp);
        const o = (i * TAIL + j) * 3;
        tailPos[o] = tmp.x;
        tailPos[o + 1] = tmp.y;
        tailPos[o + 2] = tmp.z;
        const a = alive && cm.t - (j + 1) * 0.009 > 0 ? (1 - j / TAIL) * 0.75 * fade : 0;
        c.copy(blockedNow ? RED : BLUE).multiplyScalar(a);
        tailCol[o] = c.r;
        tailCol[o + 1] = c.g;
        tailCol[o + 2] = c.b;
      }
    }
    headGeo.attributes.position.needsUpdate = headGeo.attributes.color.needsUpdate = true;
    tailGeo.attributes.position.needsUpdate = tailGeo.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }

  const play = () => {
    if (running || !inView || document.hidden) return;
    running = true;
    last = performance.now();
    renderer.setAnimationLoop(frame);
  };
  const stop = () => {
    running = false;
    renderer.setAnimationLoop(null);
  };
  new IntersectionObserver(
    ([e]) => {
      inView = e.isIntersecting;
      if (inView) play();
      else stop();
    },
    { threshold: 0 },
  ).observe(hero);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
  new ResizeObserver(() => layout()).observe(canvas);
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    stop();
    canvas.classList.remove('on');
  });

  play();
  requestAnimationFrame(() => canvas.classList.add('on'));

  // Dev-only test hook: advance the simulation in fixed steps (removed from production builds).
  if (import.meta.env.DEV) {
    (window as unknown as { __heroStep: (s: number) => void }).__heroStep = (seconds: number) => {
      for (let t = 0; t < seconds; t += 0.05) frame(last + 50);
    };
  }
}
