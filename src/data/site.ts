/** Single source of truth for personal details, links and page-wide copy. */
export const site = {
  name: 'Saif Eddine Dahech',
  first: 'Saif Eddine',
  last: 'Dahech',
  role: 'Cloud & DevOps Engineer',
  tagline: 'From commit to cluster.',
  description:
    'Saif Eddine Dahech, Cloud & DevOps Engineer. Security-gated CI/CD pipelines, Kubernetes, observability and cloud infrastructure as code.',
  tracks: ['Cloud & DevOps engineer', 'CI/CD', 'Kubernetes', 'cloud security'],
  lede: 'I make software easier to ship and harder to break. I design pipelines that test, scan and release every change automatically, then run it on Kubernetes with the monitoring to prove it works.',
  location: 'Sousse, Tunisia',
  availability:
    "I'm looking for a paid Cloud / DevOps / DevSecOps internship of 5+ months from January or February 2027, and I'm open to junior roles. I'm based in Sousse, Tunisia, and ready to relocate.",
  email: 'saif.eddine.dahech10@gmail.com',
  links: {
    linkedin: { href: 'https://www.linkedin.com/in/saif-eddine-dahech-165105261', label: 'in/saif-eddine-dahech' },
    github: { href: 'https://github.com/Saifexe', label: 'github.com/Saifexe' },
    gitlab: { href: 'https://gitlab.com/saifed10', label: 'gitlab.com/saifed10' },
  },
  cv: [
    { label: 'Download in English', href: 'https://drive.google.com/uc?export=download&id=1h4Q-fi6wEo4P2hMDEqVLzS31Lyt9Q9PP' },
    { label: 'Download in French', href: 'https://drive.google.com/uc?export=download&id=1rejqP6sRRkkdJxOrHYkZbePlnWKH9w6g' },
  ],
  nav: [
    { href: '/#about', id: 'about', label: 'About' },
    { href: '/#work', id: 'work', label: 'Work' },
    { href: '/#experience', id: 'experience', label: 'Experience' },
    { href: '/#toolbox', id: 'toolbox', label: 'Toolbox' },
    { href: '/#education', id: 'education', label: 'Education' },
    { href: '/#now', id: 'now', label: 'Now' },
  ],
} as const;

export const facts = [
  { n: 3, label: 'internships, from IoT to DevSecOps' },
  { n: 6, label: 'certifications incl. CEH, CCNA, AZ-900' },
  { n: 4, label: 'languages: Arabic, English, French, German' },
  { n: 2027, label: 'engineering degree, Cloud Computing & DevOps', accent: true },
];

export const about = {
  intro: "Hi, I'm Saif. I build the systems that get code safely from a laptop to production.",
  story: [
    "I'm 25, from Tunisia, and in the final year of a Cloud Computing & DevOps engineering degree.",
    "I started with networks. My bachelor's at ISET Mahdia and the Cisco CCNA track taught me how traffic really moves. Ethical hacking (CEH) then taught me to look at every system the way an attacker would. In 2024 I spent three months at 42 Heilbronn in Germany, a school with no teachers and no lectures, where you learn C, algorithms and shell by building projects and defending them in peer reviews.",
    'All of that meets in DevSecOps. I like pipelines, containers and Kubernetes because they turn good engineering habits into rules a machine enforces on every commit. When something breaks, I want to understand why it broke, so the fix holds.',
    'Next, I want to bring these practices to AI and LLM systems, where delivery, security and observability matter just as much.',
  ],
  principles: [
    { title: 'Security is a gate', text: 'Scanners only help if they can stop a release. I wire them in as blocking checks with clear thresholds.' },
    { title: 'Every release is traceable', text: 'The image that was scanned is the image that ships, tagged by commit, with a rollback runbook ready.' },
    { title: 'Find the real cause', text: "I debug from evidence: logs, variables, network paths. A fix I can't explain is a fix I don't trust." },
    { title: 'Document it', text: "READMEs, security policies and runbooks, so the next engineer doesn't need me in the room." },
  ],
};

/**
 * "Right now": what I'm doing this month. Keep it current; a stale date hurts more than no section.
 */
export const now = {
  updated: 'November 2026',
  items: [
    { k: 'learning', title: 'Kubernetes, hands-on', text: 'Working through KIND labs: multi-node clusters, networking, and the errors that teach you the most.' },
    { k: 'studying', title: 'Terraform, properly', text: 'Going beyond "it applies": modules, state and writing infrastructure other people can read.' },
    { k: 'practising', title: 'Firewall administration', text: 'FortiGate labs on VMware: policies, NAT and making sure only the right traffic gets through.' },
    { k: 'looking for', title: 'My PFE internship', text: 'A paid Cloud / DevOps / DevSecOps internship of 5+ months, starting January or February 2027.' },
  ],
};

/**
 * "Beyond the code": life outside tech. The section stays hidden until this list has items.
 * Each item: { title, text, image? } where image is imported from src/assets/img/beyond/.
 */
export const beyond: { title: string; text: string; image?: ImageMetadata; alt?: string }[] = [];
