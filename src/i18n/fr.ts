/**
 * French copy for the language switch, keyed by the exact English text (whitespace collapsed).
 * The site is written in English; scripts/i18n.ts swaps each text node or attribute that has
 * an entry here. Text with no entry stays as it is (tool names, numbers, code).
 *
 * This is a rewrite in natural French, not a word-for-word translation: headings are French
 * idioms, the tone is professional ("vous" for the reader), and DevOps terms are the ones
 * French engineers actually use (pipeline, quality gate, rollback, taguée...).
 * A key can map to '' when French word order moves that fragment into a neighbouring one.
 */
const nb = ' '; // French puts a non-breaking space before : ; ? ! and inside « »

export const fr: Record<string, string> = {
  /* ---------- Page titles ---------- */
  'Saif Eddine Dahech · Cloud & DevOps Engineer': 'Saif Eddine Dahech · Ingénieur Cloud & DevOps',
  'Ktebna: from a side app to a gated release pipeline · Saif Eddine Dahech': `Ktebna${nb}: d’un projet annexe à un pipeline de livraison sous contrôle · Saif Eddine Dahech`,
  'LeaveDesk: an app with no servers to manage · Saif Eddine Dahech': `LeaveDesk${nb}: une application sans aucun serveur à gérer · Saif Eddine Dahech`,
  'Not found · Saif Eddine Dahech': 'Page introuvable · Saif Eddine Dahech',
  'Saif Eddine Dahech, Cloud & DevOps Engineer. Security-gated CI/CD pipelines, Kubernetes, observability and cloud infrastructure as code.':
    'Saif Eddine Dahech, ingénieur Cloud & DevOps. Pipelines CI/CD sous contrôle de sécurité, Kubernetes, observabilité et infrastructure cloud as code.',

  /* ---------- Layout, nav ---------- */
  'Skip to content': 'Aller au contenu',
  About: 'À propos',
  Work: 'Projets',
  Experience: 'Expérience',
  Toolbox: 'Outils',
  Education: 'Formation',
  Now: 'Actuellement',
  'Open menu': 'Ouvrir le menu',
  'Close menu': 'Fermer le menu',
  'Image viewer': 'Visionneuse d’images',
  Close: 'Fermer',

  /* ---------- Hero ---------- */
  'From commit to': 'Du commit au',
  'Cloud & DevOps engineer · CI/CD · Kubernetes · cloud security':
    'Ingénieur Cloud & DevOps · CI/CD · Kubernetes · sécurité cloud',
  'I make software easier to ship and harder to break. I design pipelines that test, scan and release every change automatically, then run it on Kubernetes with the monitoring to prove it works.':
    'Je rends les logiciels plus simples à livrer et plus robustes. Je conçois des pipelines qui testent, analysent et déploient automatiquement chaque modification, puis je fais tourner l’application sur Kubernetes, avec une supervision qui prouve qu’elle fonctionne.',
  'See my work': 'Voir mes projets',
  'Download CV': 'Télécharger le CV',
  'Download in English': 'Version anglaise',
  'Download in French': 'Version française',
  'Get in touch': 'Me contacter',
  'Portrait of Saif Eddine Dahech': 'Portrait de Saif Eddine Dahech',
  'Sousse, Tunisia': 'Sousse, Tunisie',
  'open to opportunities': 'à l’écoute d’opportunités',
  "hi, that's me!": `c’est moi${nb}!`,
  scroll: 'défiler',

  /* ---------- Facts ---------- */
  'At a glance': 'En bref',
  'internships, from IoT to DevSecOps': 'stages, de l’IoT au DevSecOps',
  'certifications incl. CEH, CCNA, AZ-900': 'certifications, dont CEH, CCNA et AZ-900',
  'languages: Arabic, English, French, German': `langues${nb}: arabe, anglais, français, allemand`,
  'engineering degree, Cloud Computing & DevOps': 'cycle ingénieur, Cloud Computing & DevOps',

  /* ---------- About ---------- */
  'a bit about me': 'en quelques mots',
  'Get to': 'Faisons',
  'know me': 'connaissance',
  'A baboon typing furiously on a laptop': 'Un babouin qui tape frénétiquement sur un ordinateur portable',
  "Hi, I'm Saif. I build the systems that get code safely from a laptop to production.":
    'Bonjour, je suis Saif. Je conçois les systèmes qui mènent le code, en toute sécurité, du poste du développeur jusqu’à la production.',
  "I'm 25, from Tunisia, and in the final year of a Cloud Computing & DevOps engineering degree.":
    'Tunisien, 25 ans, je suis en dernière année du cycle ingénieur en Cloud Computing & DevOps.',
  "I started with networks. My bachelor's at ISET Mahdia and the Cisco CCNA track taught me how traffic really moves. Ethical hacking (CEH) then taught me to look at every system the way an attacker would. In 2024 I spent three months at 42 Heilbronn in Germany, a school with no teachers and no lectures, where you learn C, algorithms and shell by building projects and defending them in peer reviews.":
    'Tout a commencé par les réseaux. Ma licence à l’ISET Mahdia et le cursus Cisco CCNA m’ont appris comment circule réellement le trafic. Le hacking éthique (CEH) m’a ensuite appris à aborder chaque système avec le regard d’un attaquant. En 2024, j’ai passé trois mois à 42 Heilbronn, en Allemagne : une école sans professeurs ni cours magistraux, où l’on apprend le C, l’algorithmique et le shell à travers des projets que l’on soutient devant ses pairs.',
  'All of that meets in DevSecOps. I like pipelines, containers and Kubernetes because they turn good engineering habits into rules a machine enforces on every commit. When something breaks, I want to understand why it broke, so the fix holds.':
    'Tout cela converge vers le DevSecOps. J’aime les pipelines, les conteneurs et Kubernetes parce qu’ils transforment les bonnes pratiques d’ingénierie en règles qu’une machine applique à chaque commit. Quand quelque chose tombe en panne, je cherche à comprendre pourquoi, pour que la correction soit durable.',
  'Next, I want to bring these practices to AI and LLM systems, where delivery, security and observability matter just as much.': `Prochaine étape${nb}: appliquer ces pratiques aux systèmes d’IA et aux LLM, où la livraison, la sécurité et l’observabilité comptent tout autant.`,
  'Security is a gate': 'La sécurité doit pouvoir bloquer',
  'Scanners only help if they can stop a release. I wire them in as blocking checks with clear thresholds.':
    'Les scanners ne servent à rien s’ils ne peuvent pas arrêter une mise en production. Je les intègre comme contrôles bloquants, avec des seuils clairs.',
  'Every release is traceable': 'Chaque version est traçable',
  'The image that was scanned is the image that ships, tagged by commit, with a rollback runbook ready.':
    'L’image analysée est exactement celle qui part en production, taguée par commit, avec une procédure de rollback prête.',
  'Find the real cause': 'Remonter à la vraie cause',
  "I debug from evidence: logs, variables, network paths. A fix I can't explain is a fix I don't trust.": `Je débogue à partir de faits${nb}: logs, variables, chemins réseau. Une correction que je ne sais pas expliquer ne m’inspire pas confiance.`,
  'Document it': 'Documenter',
  "READMEs, security policies and runbooks, so the next engineer doesn't need me in the room.": `README, politiques de sécurité et runbooks${nb}: le prochain ingénieur doit pouvoir s’en sortir sans moi.`,

  /* ---------- Work ---------- */
  "things I'm proud of": 'ce dont je suis fier',
  "Things I've": 'Mes',
  built: 'réalisations',
  'Arabsoft internship': 'Stage chez Arabsoft',
  'Ktebna: a security-gated delivery platform': `Ktebna${nb}: une chaîne de livraison sous contrôle de sécurité`,
  'Ktebna is a peer-to-peer book marketplace for Tunisia (Spring Boot, React, MySQL). I proposed the project, rebuilt its backend, and built everything around it: a 6-stage GitLab pipeline where any failed security check blocks the release, a Kubernetes deployment, and monitoring with alerting.': `Ktebna est une plateforme de vente de livres entre particuliers en Tunisie (Spring Boot, React, MySQL). J’ai proposé le projet, refait son backend et construit tout ce qui l’entoure${nb}: un pipeline GitLab en 6 étapes où le moindre contrôle de sécurité en échec bloque la mise en production, un déploiement Kubernetes, ainsi qu’une supervision avec alertes.`,
  'Read the case study': 'Lire l’étude de cas',
  'Key results': 'Résultats clés',
  'pipeline jobs in 6 stages': 'jobs de pipeline répartis en 6 étapes',
  'test coverage, quality gate passed': 'de couverture de tests, quality gate validée',
  'automated tests per run': 'tests automatisés à chaque exécution',
  'Prometheus alert rules with email': 'règles d’alerte Prometheus, notifiées par e-mail',
  'keep watching: every other run, a security gate stops the release': `regardez bien${nb}: un pipeline sur deux est arrêté par un contrôle de sécurité`,
  'Animated pipeline: a commit stops at each stage while it runs, turns green when the stage passes or red when a security gate blocks it, then rolls out as pods on a Kubernetes cluster.': `Pipeline animé${nb}: le commit marque une pause à chaque étape, passe au vert quand elle réussit ou au rouge quand un contrôle de sécurité le bloque, puis se déploie sous forme de pods sur un cluster Kubernetes.`,
  'A simulation of': 'Une simulation de',
  'this pipeline': 'ce pipeline',
  ': the commit stops at each stage while it runs.': `${nb}: le commit marque une pause à chaque étape, le temps de son exécution.`,
  'Dashed rings mark the blocking security gates.':
    'Les cercles en pointillés signalent les contrôles de sécurité bloquants.',
  'What I built': 'Ce que j’ai réalisé',
  'Migrated the backend from Supabase to Spring Boot + MySQL with JWT auth and Flyway-versioned schema.':
    'Migration du backend de Supabase vers Spring Boot + MySQL, avec authentification JWT et schéma versionné par Flyway.',
  'Shift-left security: SonarCloud quality gate (80%+ coverage on new code), Gitleaks over the full git history, Trivy on dependencies and images.': `Sécurité dès les premières étapes (shift-left)${nb}: quality gate SonarCloud (plus de 80${nb}% de couverture sur le nouveau code), Gitleaks sur tout l’historique git, Trivy sur les dépendances et les images.`,
  'Supply chain: only the exact scanned image is published to the registry, tagged by commit SHA for traceable rollbacks.': `Chaîne d’approvisionnement${nb}: seule l’image analysée est publiée dans le registre, taguée avec le SHA du commit pour des rollbacks traçables.`,
  'Tests with JUnit 5, Testcontainers on a real MySQL, JaCoCo, Vitest and ESLint, including authorization and rate-limit rules.':
    'Tests avec JUnit 5, Testcontainers sur une vraie base MySQL, JaCoCo, Vitest et ESLint, y compris sur les règles d’autorisation et de limitation de débit.',
  'How it runs': 'En production',
  'Kubernetes with multi-stage, non-root images, health probes, resource limits, PVCs and Secrets.':
    'Kubernetes avec des images multi-stage sans droits root, des sondes de santé, des limites de ressources, des PVC et des Secrets.',
  'Prometheus, Grafana and Alertmanager: golden-signals dashboard and 8 alert rules with email notifications.': `Prometheus, Grafana et Alertmanager${nb}: tableau de bord des golden signals et 8 règles d’alerte avec notification par e-mail.`,
  'Automated MySQL backups, S3-compatible object storage, nginx caching and compression.':
    'Sauvegardes MySQL automatisées, stockage objet compatible S3, cache et compression avec nginx.',
  'README, SECURITY.md, a security gate policy and rollback runbooks.':
    'README, SECURITY.md, une politique de contrôles de sécurité et des procédures de rollback.',
  'my favourite one: the gate doing its job': `mon préféré${nb}: le contrôle qui joue son rôle`,
  'Project screenshots': 'Captures d’écran du projet',
  'Grafana golden-signals dashboard: 0.0% error rate, 8.26 ms p99 latency': `Tableau de bord Grafana des golden signals${nb}: 0,0${nb}% d’erreurs, latence p99 de 8,26${nb}ms`,
  'Grafana dashboard for the Ktebna backend': 'Tableau de bord Grafana du backend Ktebna',
  '· 0.0% errors, 8.26 ms p99': `· 0,0${nb}% d’erreurs, p99 à 8,26${nb}ms`,
  'SonarCloud: quality gate passed, 83.9% coverage, 0.9% duplication, A security rating': `SonarCloud${nb}: quality gate validée, 83,9${nb}% de couverture, 0,9${nb}% de duplication, note de sécurité A`,
  'SonarCloud project overview': 'Vue d’ensemble du projet sur SonarCloud',
  '· gate passed, 83.9% coverage': `· gate validée, 83,9${nb}% de couverture`,
  'Proof the gate works: a deliberately added code issue fails sonarcloud-check and stops the pipeline': `La preuve que le contrôle fonctionne${nb}: un défaut introduit volontairement fait échouer sonarcloud-check et arrête le pipeline`,
  'GitLab pipeline blocked at the SonarCloud stage': 'Pipeline GitLab bloqué à l’étape SonarCloud',
  'Gate test': 'Test du contrôle',
  '· a bad commit gets blocked': '· un commit fautif est bloqué',
  'Kubernetes structure: services, deployments, pods, secrets and persistent volumes in the ktebna namespace': `Structure Kubernetes${nb}: services, deployments, pods, secrets et volumes persistants du namespace ktebna`,
  'Kubernetes structure diagram': 'Schéma de la structure Kubernetes',
  '· namespace design': '· organisation du namespace',
  'kubectl get all: backend, frontend and MySQL running in the ktebna namespace': `kubectl get all${nb}: backend, frontend et MySQL en fonctionnement dans le namespace ktebna`,
  'kubectl get all output': 'Résultat de kubectl get all',
  '· all workloads running': '· tous les workloads en fonctionnement',
  'Prometheus alert rules: BackendDown, HighErrorRate, HighP99Latency, DB pool and disk alerts': `Règles d’alerte Prometheus${nb}: BackendDown, HighErrorRate, HighP99Latency, pool de connexions et espace disque`,
  'Prometheus alert rules': 'Règles d’alerte Prometheus',
  Alerting: 'Alertes',
  '· 8 Prometheus rules': '· 8 règles Prometheus',
  'A leave management app on a fully serverless AWS architecture, with no EC2 or self-managed servers allowed. A Python Lambda behind API Gateway, four DynamoDB tables, everything defined in Terraform and deployed through GitHub Actions.': `Une application de gestion des congés sur une architecture AWS entièrement serverless, sans EC2 ni serveur à administrer${nb}: une Lambda Python derrière API Gateway et quatre tables DynamoDB, le tout décrit en Terraform et déployé avec GitHub Actions.`,
  'My part: Terraform infra': `Mon rôle${nb}: infra Terraform`,
  'Lambda backend': 'Backend Lambda',
  'Leave management platform': 'Plateforme de gestion des congés',
  'A full-stack application covering the complete leave request and approval lifecycle, built with Spring Boot, JPA and Oracle DB and packaged with Docker for Kubernetes. Working in an Agile team, I resolved an average of 7 backend defects per sprint to keep releases on schedule.':
    'Une application full-stack qui couvre tout le cycle d’une demande de congé, de la saisie à la validation, développée avec Spring Boot, JPA et Oracle DB et conteneurisée avec Docker pour Kubernetes. Au sein d’une équipe Agile, j’ai corrigé en moyenne 7 anomalies backend par sprint pour tenir le calendrier des livraisons.',
  'Real-time IoT web app': 'Application web IoT en temps réel',
  'A web application exchanging data in real time with ESP32 devices over MQTT. I configured and integrated the hardware end to end, from the microcontrollers to the web interface.':
    'Une application web qui échange des données en temps réel avec des cartes ESP32 via MQTT. J’ai configuré et intégré le matériel de bout en bout, des microcontrôleurs jusqu’à l’interface web.',
  'Full-stack web': 'Web full-stack',
  'Next build': 'Prochain projet',
  'in planning': 'en préparation',
  Something: 'Quelque chose de',
  new: 'nouveau',
  'is on the way.': 'se prépare.',
  'My next project is in the design phase. It will push further into cloud-native delivery and is coming to this page soon.':
    'Mon prochain projet est en cours de conception. Il ira plus loin dans la livraison cloud-native et sera bientôt présenté ici.',

  /* ---------- Experience ---------- */
  'my path so far': 'mon parcours',
  "Where I've": 'Expérience',
  worked: 'professionnelle',
  'Jul 2026 – Sep 2026': 'juil. 2026 – sept. 2026',
  'DevOps / DevSecOps Engineer Intern': 'Ingénieur stagiaire DevOps / DevSecOps',
  'Designed a 12-job, 6-stage security-gated GitLab pipeline for a Spring Boot, React and MySQL platform, deployed it to Kubernetes, and built monitoring and alerting with Prometheus, Grafana and Alertmanager.':
    'Conception d’un pipeline GitLab de 12 jobs en 6 étapes, sous contrôle de sécurité, pour une plateforme Spring Boot, React et MySQL. Déploiement sur Kubernetes et mise en place de la supervision et des alertes avec Prometheus, Grafana et Alertmanager.',
  'Tunis, Tunisia': 'Tunis, Tunisie',
  'Jun 2025 – Aug 2025': 'juin 2025 – août 2025',
  'Full Stack Developer Intern': 'Développeur full-stack stagiaire',
  'Built a leave management application with Spring Boot, JPA and Oracle DB, containerized for Kubernetes, and resolved about 7 backend defects per sprint in an Agile team.':
    'Développement d’une application de gestion des congés avec Spring Boot, JPA et Oracle DB, conteneurisée pour Kubernetes. Correction d’environ 7 anomalies backend par sprint au sein d’une équipe Agile.',
  'Mar 2024 – May 2024': 'mars 2024 – mai 2024',
  'Software Engineering Training': 'Formation en développement logiciel',
  'Project-based, peer-reviewed training in C/C++, algorithms and shell.':
    'Formation par projets, évaluée par les pairs, en C/C++, algorithmique et shell.',
  'Heilbronn, Germany': 'Heilbronn, Allemagne',
  'Feb 2023 – Jun 2023': 'févr. 2023 – juin 2023',
  'Built an IoT web application with real-time data exchange between the web interface and ESP32 devices over MQTT.':
    'Développement d’une application web IoT qui échange des données en temps réel avec des cartes ESP32 via MQTT.',
  'Gabes, Tunisia': 'Gabès, Tunisie',

  /* ---------- Toolbox ---------- */
  'my everyday kit': 'mes outils du quotidien',
  'What I': 'Ma boîte',
  'work with': 'à outils',
  'CI/CD & automation': 'CI/CD & automatisation',
  'Container Registry': 'Registre de conteneurs',
  'Release automation': 'Automatisation des mises en production',
  'Vulnerability management': 'Gestion des vulnérabilités',
  'Containers & orchestration': 'Conteneurs & orchestration',
  'S3-compatible storage': 'Stockage compatible S3',
  Observability: 'Observabilité',
  'Testing & quality': 'Tests & qualité',
  'Development & data': 'Développement & données',
  'Systems & networking': 'Systèmes & réseaux',
  'Routing & switching': 'Routage & commutation',

  /* ---------- Education ---------- */
  'still learning, always will be': 'on n’a jamais fini d’apprendre',
  Always: 'Apprendre,',
  learning: 'sans cesse',
  'Degrees & training': 'Diplômes & formations',
  'Engineering Degree in Computer Engineering, Cloud Computing & DevOps':
    'Diplôme d’ingénieur en informatique, spécialité Cloud Computing & DevOps',
  'EPI Digital School, Tunisia · Sep 2024 – Jun 2027 (expected)':
    'EPI Digital School, Tunisie · sept. 2024 – juin 2027 (obtention prévue)',
  'Project-Based Software Engineering Training': 'Formation en développement logiciel par projets',
  '42 Heilbronn, Germany · Mar 2024 – May 2024': '42 Heilbronn, Allemagne · mars 2024 – mai 2024',
  "Bachelor's Degree in Network & IT Services": 'Licence en réseaux et services informatiques',
  'ISET Mahdia, Tunisia · Sep 2020 – Jun 2023': 'ISET Mahdia, Tunisie · sept. 2020 – juin 2023',
  Languages: 'Langues',
  Arabic: 'Arabe',
  English: 'Anglais',
  French: 'Français',
  German: 'Allemand',
  Native: 'Langue maternelle',
  Fluent: 'Courant',
  Professional: 'Professionnel',
  Conversational: 'Conversationnel',
  'Arabic: Native': `Arabe${nb}: langue maternelle`,
  'English: Fluent': `Anglais${nb}: courant`,
  'French: Professional': `Français${nb}: niveau professionnel`,
  'German: Conversational': `Allemand${nb}: niveau conversationnel`,

  /* ---------- Now ---------- */
  'right now': 'actuellement',
  "What I'm": 'En ce',
  'up to': 'moment',
  'Kubernetes, hands-on': 'Kubernetes, par la pratique',
  'Working through KIND labs: multi-node clusters, networking, and the errors that teach you the most.': `Des labs KIND${nb}: clusters multi-nœuds, réseau, et les erreurs dont on apprend le plus.`,
  studying: 'j’apprends',
  'Terraform, properly': 'Terraform, en profondeur',
  'Going beyond "it applies": modules, state and writing infrastructure other people can read.': `Aller au-delà du «${nb}ça passe${nb}»${nb}: modules, state, et une infrastructure que d’autres peuvent relire.`,
  practising: 'je pratique',
  'Firewall administration': 'Administration de pare-feu',
  'FortiGate labs on VMware: policies, NAT and making sure only the right traffic gets through.': `Labs FortiGate sur VMware${nb}: politiques de sécurité, NAT, et ne laisser passer que le trafic légitime.`,
  'looking for': 'je recherche',
  'My PFE internship': 'Mon stage de fin d’études (PFE)',
  'A paid Cloud / DevOps / DevSecOps internship of 5+ months, starting January or February 2027.':
    'Un stage rémunéré Cloud / DevOps / DevSecOps de 5 mois minimum, à partir de janvier ou février 2027.',
  'Last updated November 2026.': 'Mis à jour en novembre 2026.',

  /* ---------- Contact ---------- */
  'say hello': 'écrivez-moi',
  "Let's ship something": 'Construisons quelque chose',
  'together.': 'ensemble.',
  "I'm looking for a paid Cloud / DevOps / DevSecOps internship of 5+ months from January or February 2027, and I'm open to junior roles. I'm based in Sousse, Tunisia, and ready to relocate.":
    'Je recherche un stage de fin d’études rémunéré en Cloud / DevOps / DevSecOps, de 5 mois minimum, à partir de janvier ou février 2027. Je suis également ouvert aux postes junior. Basé à Sousse, en Tunisie, je suis mobile géographiquement.',
  'Write me a message': 'Envoyez-moi un message',
  'or reach me directly below': 'ou contactez-moi directement ci-dessous',
  'all the direct ways to reach me': 'tous les moyens de me joindre',
  Email: 'E-mail',
  'Copy email address': 'Copier l’adresse e-mail',
  Copy: 'Copier',
  Copied: 'Copié',
  'Select it': 'Sélectionnez-la',

  /* ---------- Contact dialog ---------- */
  'drop me a line': 'un petit mot',
  "Let's": 'Parlons',
  'talk.': 'projet.',
  'Tell me a bit about what you have in mind. It goes straight to my inbox.':
    'Dites-m’en un peu plus sur votre projet. Votre message arrive directement dans ma boîte de réception.',
  "What's it about?": 'Objet',
  'Internship, job offer, a project…': 'Stage, offre d’emploi, projet…',
  'Your name': 'Votre nom',
  'Jane Doe': 'Marie Dupont',
  'Your email': 'Votre e-mail',
  'jane@company.com': 'marie@entreprise.com',
  'Hi Saif, …': 'Bonjour Saif, …',
  'Company website': 'Site web de l’entreprise',
  'checking fields': 'vérification',
  sending: 'envoi',
  delivered: 'reçu',
  'Send message': 'Envoyer le message',
  'Message sent.': 'Message envoyé.',
  "Thanks for writing. I'll get back to you by email.":
    'Merci pour votre message, je vous réponds rapidement par e-mail.',
  'Prefer email? Write to': `Vous préférez l’e-mail${nb}? Écrivez à`,
  'What is it about? A few words is enough.': 'Précisez l’objet, quelques mots suffisent.',
  'Please tell me your name.': 'Merci d’indiquer votre nom.',
  'That email doesn’t look right.': 'Cette adresse e-mail ne semble pas valide.',
  'A few more words, please (10+ characters).': 'Votre message est un peu court (10 caractères minimum).',
  'Just sent one, give it 30 seconds.': 'Message déjà envoyé, merci de patienter 30 secondes.',

  /* ---------- Live pipeline (status chip and log lines; stage and pod labels stay as tool output) ---------- */
  passed: 'réussi',
  running: 'en cours',
  blocked: 'bloqué',
  'rollout complete · 3/3 pods Running': 'déploiement terminé · 3/3 pods Running',
  'test · 297 tests passed': 'test · 297 tests réussis',
  'sonarcloud · quality gate passed': 'sonarcloud · quality gate validée',
  'gitleaks · no leaks · trivy · 0 HIGH/CRITICAL': 'gitleaks · aucun secret exposé · trivy · 0 HIGH/CRITICAL',
  'build · images saved as artifacts': 'build · images enregistrées en artefacts',
  'image scan · clean': 'image scan · aucune vulnérabilité',
  'sonarcloud · quality gate failed · new code issue':
    'sonarcloud · quality gate en échec · défaut dans le nouveau code',
  'gitleaks · 1 secret found in the commit': 'gitleaks · 1 secret détecté dans le commit',
  'trivy · 1 CRITICAL CVE in a dependency': 'trivy · 1 CVE critique dans une dépendance',
  'image scan · 1 CRITICAL CVE in the base image': 'image scan · 1 CVE critique dans l’image de base',
  'release blocked · nothing deployed': 'mise en production bloquée · rien n’a été déployé',

  /* ---------- 404 ---------- */
  '404 · pipeline blocked': '404 · pipeline bloqué',
  "This page didn't pass the": 'Cette page n’a pas franchi le',
  'gate.': 'contrôle.',
  'The address may be old or mistyped. Nothing was deployed here.':
    'L’adresse est peut-être obsolète ou mal saisie. Rien n’a été déployé ici.',
  'Back to the home page': 'Retour à l’accueil',

  /* ---------- Case studies: shared ---------- */
  'work /': 'projets /',
  Back: 'Retour',
  'Case study': 'Étude de cas',
  'Next case study →': 'Étude de cas suivante →',
  'Key decisions': 'Choix clés',
  Results: 'Résultats',

  /* ---------- Case study: Ktebna ---------- */
  'Ktebna: from a side app to a': `Ktebna${nb}: d’un projet annexe à un pipeline de livraison`,
  gated: 'sous contrôle',
  'release pipeline': '',
  'Arabsoft gave me supervision and freedom, not a set task. I proposed Ktebna, a book marketplace web app, and turned it into a production-style system: a new backend, containers, a pipeline where security checks can stop a release, a Kubernetes deployment, and monitoring that pages someone when things go wrong.': `Chez Arabsoft, j’ai bénéficié d’un encadrement et d’une vraie liberté, plutôt que d’une mission imposée. J’ai proposé Ktebna, une application web de vente de livres, et je l’ai transformée en un système digne d’un environnement de production${nb}: un nouveau backend, des conteneurs, un pipeline où les contrôles de sécurité peuvent bloquer une mise en production, un déploiement Kubernetes et une supervision qui alerte dès qu’un problème survient.`,
  Role: 'Rôle',
  'Sole engineer': 'Seul ingénieur du projet',
  Duration: 'Durée',
  'Jul – Sep 2026': 'juil. – sept. 2026',
  Setting: 'Cadre',
  'Remote internship, Arabsoft': 'Stage à distance chez Arabsoft',
  Status: 'Statut',
  'Complete, pipeline green': 'Terminé, pipeline au vert',
  'The challenge': 'Le défi',
  'The original app ran on Supabase with no tests, no containers and no delivery process. Any change went live by hand, and nothing checked it for bugs, leaked secrets or vulnerable dependencies.':
    'L’application d’origine tournait sur Supabase, sans tests, sans conteneurs et sans processus de livraison. Chaque modification était mise en production à la main, sans aucune vérification des bugs, des fuites de secrets ou des dépendances vulnérables.',
  'My goal:': `Mon objectif${nb}:`,
  'every commit on main should become a tested, scanned, traceable release, or be stopped with a clear reason.':
    'que chaque commit sur main devienne une version testée, analysée et traçable, ou soit bloqué pour une raison explicite.',
  'And I had to do it on free tiers, with 400 CI minutes a month.':
    'Le tout avec des offres gratuites et 400 minutes de CI par mois.',
  Architecture: 'Architecture',
  'I rebuilt the backend in Spring Boot with MySQL, JWT authentication and Flyway migrations, kept the React frontend behind nginx, and added a monitoring stack next to the app.':
    'J’ai refait le backend en Spring Boot avec MySQL, une authentification JWT et des migrations Flyway, conservé le frontend React derrière nginx, et ajouté une stack de supervision à côté de l’application.',
  'Runtime architecture: nginx serving React, Spring Boot API, MySQL, and the Prometheus, Grafana and Alertmanager stack': `Architecture d’exécution${nb}: nginx qui sert React, l’API Spring Boot, MySQL et la stack Prometheus, Grafana et Alertmanager`,
  'Ktebna runtime architecture diagram': 'Schéma de l’architecture d’exécution de Ktebna',
  'Runtime architecture. Ports bind to 127.0.0.1 only; Prometheus scrapes every 15 s and Alertmanager emails the operator.': `Architecture d’exécution. Les ports n’écoutent que sur 127.0.0.1${nb}; Prometheus collecte les métriques toutes les 15${nb}s et Alertmanager prévient l’opérateur par e-mail.`,
  'The pipeline': 'Le pipeline',
  'Six stages, twelve jobs. Images are built as artifacts but':
    'Six étapes, douze jobs. Les images sont construites en tant qu’artefacts, mais',
  'not pushed': 'ne sont poussées',
  'until their own Trivy scan passes, so what reaches the registry is exactly what was scanned.': `qu’une fois leur propre analyse Trivy réussie${nb}: ce qui arrive dans le registre est donc exactement ce qui a été analysé.`,
  'The 6-stage GitLab pipeline with nightly rescans of published images':
    'Le pipeline GitLab en 6 étapes, avec une nouvelle analyse nocturne des images publiées',
  'Pipeline stage diagram': 'Schéma des étapes du pipeline',
  'Each stage only runs once every blocking job before it has passed.':
    'Une étape ne démarre que lorsque tous les jobs bloquants qui la précèdent ont réussi.',
  'Scan the artifact, then publish it': 'Analyser l’artefact, puis le publier',
  'Build images, save them as job artifacts, scan them, and push only the scanned image tagged with the commit SHA.':
    'Construire les images, les conserver comme artefacts de job, les analyser, puis ne pousser que l’image analysée, taguée avec le SHA du commit.',
  "why: no gap between what's tested and what ships": `pourquoi${nb}: aucun écart entre ce qui est testé et ce qui est livré`,
  'Only main publishes': 'Seule la branche main publie',
  'The blocking SonarCloud gate runs on main, so only main can replace the':
    'La quality gate SonarCloud bloquante s’exécute sur main, donc seule main peut remplacer le tag',
  'image.': 'de l’image.',
  "why: a side branch can't skip the gate": `pourquoi${nb}: aucune autre branche ne peut contourner le contrôle`,
  'Nightly rescans': 'Analyses nocturnes',
  'A schedule rescans published images every night, because new CVEs appear even when the code doesn’t change.':
    'Une tâche planifiée analyse à nouveau les images publiées chaque nuit, car de nouvelles CVE apparaissent même quand le code ne change pas.',
  "why: clean yesterday isn't clean today": `pourquoi${nb}: sain hier ne veut pas dire sain aujourd’hui`,
  'Gitleaks on full history': 'Gitleaks sur tout l’historique',
  'Secrets are scanned in the working tree and across every past commit, not just the latest diff.':
    'Les secrets sont recherchés dans le répertoire de travail et dans tous les commits passés, pas seulement dans le dernier diff.',
  'why: a deleted secret is still in git': `pourquoi${nb}: un secret supprimé reste dans l’historique git`,
  'Spend CI minutes wisely': 'Économiser les minutes de CI',
  'Docs-only commits start no pipeline, and older pipelines are cancelled when a newer commit arrives.':
    'Un commit qui ne modifie que la documentation ne lance pas de pipeline, et les pipelines plus anciens sont annulés dès qu’un nouveau commit arrive.',
  'why: 400 free minutes a month': `pourquoi${nb}: 400 minutes gratuites par mois`,
  'Real database in tests': 'Une vraie base de données pour les tests',
  'Backend tests run against MySQL 8 through Testcontainers on Docker-in-Docker, not an in-memory fake.':
    'Les tests backend s’exécutent sur MySQL 8 grâce à Testcontainers en Docker-in-Docker, et non sur une base simulée en mémoire.',
  'why: catch the bugs production would hit': `pourquoi${nb}: détecter les bugs que la production rencontrerait`,
  'Defense in depth': 'Défense en profondeur',
  'Security isn’t one tool. Each layer limits what a failure in another layer can expose.':
    'La sécurité ne repose pas sur un seul outil. Chaque couche limite ce qu’une défaillance dans une autre pourrait exposer.',
  'Six security layers, from pipeline gates to secrets management':
    'Six couches de sécurité, des contrôles du pipeline à la gestion des secrets',
  'Defense in depth layers': 'Les couches de la défense en profondeur',
  'The stack runs in its own namespace with one Deployment and Service per component, PVCs for the database and uploads, and Secrets for credentials. Every pod runs without a service-account token, with CPU and memory limits, and images tagged by commit.':
    'La stack tourne dans son propre namespace, avec un Deployment et un Service par composant, des PVC pour la base de données et les fichiers téléversés, et des Secrets pour les identifiants. Chaque pod s’exécute sans jeton de service account, avec des limites CPU et mémoire, à partir d’images taguées par commit.',
  'Kubernetes structure of the ktebna namespace': 'Structure Kubernetes du namespace ktebna',
  'Kubernetes structure': 'Structure Kubernetes',
  'Problems I solved': 'Problèmes résolus',
  Symptom: 'Symptôme',
  'SonarCloud returned 403 in CI even with a valid token.':
    'SonarCloud renvoyait une erreur 403 en CI malgré un jeton valide.',
  'Root cause': 'Cause',
  'main was not a protected branch, so GitLab withheld protected variables like':
    'main n’était pas une branche protégée, GitLab ne lui transmettait donc pas les variables protégées comme',
  '. I proved it by checking': '. Je l’ai démontré en vérifiant',
  'and comparing variable lengths without printing secrets.':
    'et en comparant la longueur des variables, sans jamais afficher les secrets.',
  'Pods stuck in ImagePullBackOff with 401 Unauthorized.':
    'Pods bloqués en ImagePullBackOff avec une erreur 401 Unauthorized.',
  Fix: 'Solution',
  'Images live in a private GitLab registry. I created a read-only deploy token, a docker-registry Secret and':
    'Les images sont stockées dans un registre GitLab privé. J’ai créé un deploy token en lecture seule, un Secret docker-registry et des',
  ', then cleaned up duplicate ReplicaSets left by the failed rollout.':
    ', puis supprimé les ReplicaSets en double laissés par le déploiement raté.',
  "Docker-in-Docker builds couldn't reach the daemon.":
    'Les builds Docker-in-Docker n’arrivaient pas à joindre le démon Docker.',
  'Configured the DinD service without TLS inside the isolated job and pointed':
    'J’ai configuré le service DinD sans TLS à l’intérieur du job isolé et fait pointer',
  'at it; passed registry credentials to Trivy explicitly.': `dessus${nb}; j’ai aussi transmis explicitement les identifiants du registre à Trivy.`,
  'Trivy dependency scans failed on Maven registry rate limits.':
    'Les analyses de dépendances Trivy échouaient à cause des limites de requêtes du registre Maven.',
  'Ran the filesystem scan with': 'J’ai lancé l’analyse du système de fichiers avec',
  'and overrode scanner image entrypoints so they run as CI jobs.':
    'et redéfini l’entrypoint des images des scanners pour qu’elles puissent tourner comme jobs CI.',
  Incident: 'Incident',
  'A root .env file was staged for the first push, and tokens were later exposed while debugging.':
    'Un fichier .env à la racine avait été ajouté au premier push, et des jetons ont ensuite été exposés pendant une séance de débogage.',
  Response: 'Réaction',
  'Removed the file before it reached the remote, rotated the exposed tokens, and recorded the incident and rotation history in SECURITY.md.':
    'J’ai retiré le fichier avant qu’il n’arrive sur le dépôt distant, renouvelé les jetons exposés, puis consigné l’incident et l’historique des renouvellements dans SECURITY.md.',
  'jobs in 6 blocking stages': 'jobs répartis en 6 étapes bloquantes',
  'tests per run (121 backend, 176 frontend)': 'tests à chaque exécution (121 backend, 176 frontend)',
  'coverage, quality gate passed': 'de couverture, quality gate validée',
  'SonarCloud security rating, 0 open issues': 'note de sécurité SonarCloud, aucun problème ouvert',
  'alert rules, emailed on fire and resolve': 'règles d’alerte, avec un e-mail au déclenchement et à la résolution',
  'p99 latency on the Grafana dashboard': 'de latence p99 sur le tableau de bord Grafana',
  'How I worked': 'Méthode de travail',
  'Seven sprints, each ending with a working increment the next one builds on.':
    'Sept sprints, chacun terminé par un incrément fonctionnel sur lequel s’appuie le suivant.',
  'Sprint roadmap: analysis and migration through gates, alerting and polish': `Planning des sprints${nb}: de l’analyse et la migration jusqu’aux contrôles, aux alertes et aux finitions`,
  'Sprint roadmap': 'Planning des sprints',
  'LeaveDesk, serverless on AWS': 'LeaveDesk, une application serverless sur AWS',

  /* ---------- Case study: LeaveDesk ---------- */
  'LeaveDesk: an app with': `LeaveDesk${nb}: une application`,
  'no servers': 'sans aucun serveur',
  'to manage': 'à gérer',
  'A leave request platform built by a team of three at EPI Digital School under one strict rule: no EC2 and no self-managed infrastructure. Every component is an AWS managed service, defined in Terraform and shipped through GitHub Actions.': `Une plateforme de demandes de congé réalisée à trois à l’EPI Digital School, avec une règle stricte${nb}: ni EC2, ni infrastructure à administrer soi-même. Chaque composant est un service managé d’AWS, décrit en Terraform et déployé avec GitHub Actions.`,
  'My role': 'Mon rôle',
  'Infra, backend, CI/CD': 'Infra, backend, CI/CD',
  Team: 'Équipe',
  '3 students': '3 étudiants',
  Context: 'Contexte',
  'Academic project (PFA)': 'Projet de fin d’année (PFA)',
  Constraint: 'Contrainte',
  'No EC2, fully serverless': 'Sans EC2, entièrement serverless',
  'The problem': 'Le problème',
  'Server-based internal tools carry hidden costs: patching, capacity planning, paying for idle machines, and environments built by hand in a console that nobody can reproduce.': `Les outils internes hébergés sur des serveurs ont des coûts cachés${nb}: les mises à jour de sécurité, le dimensionnement, des machines payées même quand elles ne font rien, et des environnements montés à la main dans une console, que personne ne sait reproduire.`,
  'The question we answered:': `La question à laquelle nous avons répondu${nb}:`,
  'can an enterprise app with role-based access, encryption and continuous delivery run on AWS without a single server to manage?': `une application d’entreprise avec gestion des accès par rôle, chiffrement et livraison continue peut-elle tourner sur AWS sans le moindre serveur à gérer${nb}?`,
  'LeaveDesk architecture: browser to Netlify React app to API Gateway to Lambda to DynamoDB, with KMS, IAM, CloudWatch and SNS; GitHub Actions deploys with Terraform and to Netlify': `Architecture de LeaveDesk${nb}: du navigateur à l’application React sur Netlify, puis API Gateway, Lambda et DynamoDB, avec KMS, IAM, CloudWatch et SNS${nb}; GitHub Actions déploie avec Terraform et sur Netlify`,
  'Request path in blue. Dashed lines: monitoring, encryption and delivery.': `En bleu, le parcours d’une requête. En pointillés${nb}: supervision, chiffrement et livraison.`,
  'My part': 'Ma contribution',
  'Infrastructure:': `Infrastructure${nb}:`,
  'wrote the Terraform for Lambda, API Gateway, the four DynamoDB tables with their indexes, KMS keys and IAM roles, so the whole environment can be rebuilt from Git.':
    'j’ai écrit le code Terraform de la Lambda, d’API Gateway, des quatre tables DynamoDB et de leurs index, des clés KMS et des rôles IAM, pour que tout l’environnement puisse être recréé depuis Git.',
  'Backend:': `Backend${nb}:`,
  'built the Python Lambda that handles every route (auth, leave requests and approvals, user admin, leave policies) through internal dispatch on method and path.':
    'j’ai développé la Lambda Python qui traite toutes les routes (authentification, demandes et validations de congés, gestion des utilisateurs, règles de congés) grâce à un aiguillage interne selon la méthode et le chemin.',
  'CI/CD:': `CI/CD${nb}:`,
  'set up GitHub Actions with separate workflows for the frontend and the infrastructure, plus branch protection and pull-request reviews so nothing reached main unchecked.':
    'j’ai mis en place GitHub Actions avec des workflows distincts pour le frontend et l’infrastructure, ainsi que la protection des branches et la relecture des pull requests, pour que rien n’arrive sur main sans vérification.',
  'One Lambda, internal routing': 'Une seule Lambda, un routage interne',
  'A single stateless function routes on HTTP method and path, with all state in DynamoDB.':
    'Une seule fonction sans état aiguille les requêtes selon la méthode HTTP et le chemin, et tout l’état est stocké dans DynamoDB.',
  'why: one deploy unit, fewer cold starts': `pourquoi${nb}: une seule unité à déployer, moins de démarrages à froid`,
  'Pay-per-request tables': 'Des tables facturées à la requête',
  'DynamoDB on on-demand billing, with indexes on email and employee_id.':
    'DynamoDB en facturation à la demande, avec des index sur email et employee_id.',
  'why: no idle cost, no table scans': `pourquoi${nb}: aucun coût au repos, aucun parcours complet de table`,
  'Sessions that expire themselves': 'Des sessions qui expirent d’elles-mêmes',
  'Tokens live in a Sessions table with a TTL, so DynamoDB deletes them after 30 days.':
    'Les jetons sont stockés dans une table Sessions dotée d’un TTL, et DynamoDB les supprime au bout de 30 jours.',
  'why: no cleanup job to run': `pourquoi${nb}: aucune tâche de nettoyage à prévoir`,
  'Encryption and least privilege': 'Chiffrement et moindre privilège',
  'KMS encryption at rest with key rotation; the Lambda role can only touch the tables it needs. Passwords hashed with bcrypt.': `Chiffrement au repos avec KMS et rotation des clés${nb}; le rôle de la Lambda n’a accès qu’aux tables dont elle a besoin. Mots de passe hachés avec bcrypt.`,
  'why: limit the blast radius': `pourquoi${nb}: limiter l’impact d’une compromission`,
  'Why serverless': 'Pourquoi le serverless',
  Criterion: 'Critère',
  'SaaS tools': 'Outils SaaS',
  'Servers to manage': 'Serveurs à gérer',
  None: 'Aucun',
  Yes: 'Oui',
  No: 'Non',
  Partial: 'Partiel',
  'Pay only for usage': 'Paiement à l’usage',
  Subscription: 'Abonnement',
  'KMS encryption at rest': 'Chiffrement au repos avec KMS',
  'Full CI/CD pipeline': 'Pipeline CI/CD complet',
  Manual: 'Manuel',
  'Ktebna, a security-gated pipeline': 'Ktebna, un pipeline sous contrôle de sécurité',

  /* LeaveDesk diagram labels */
  'AWS · managed services only · no EC2': 'AWS · services managés uniquement · sans EC2',
  Browser: 'Navigateur',
  users: 'utilisateurs',
  'Python 3 router': 'routeur Python 3',
  'Requests · Employees': 'Demandes · Employés',
  'Sessions (TTL) · Policies': 'Sessions (TTL) · Règles',
  'logs · alarms': 'logs · alarmes',
  alerts: 'alertes',
  'encryption at rest': 'chiffrement au repos',
  'least privilege': 'moindre privilège',
  'all resources as code': 'tout en code',
  'PR checks · deploy': 'contrôles PR · déploiement',
};

/** Same English word, different French depending on where it sits (checked before the main list). */
export const frScoped: { scope: string; en: string; fr: string }[] = [
  // "Now" card tags: the main list has learning → "sans cesse" for the "Always learning" heading.
  { scope: '.now-item', en: 'learning', fr: 'j’apprends' },
  { scope: '.now-item', en: 'studying', fr: 'j’approfondis' },
];

/** Text that scripts build at runtime around a variable part (commit SHA, email, dots). */
export const frPatterns: [RegExp, string][] = [
  [/^push (\w+) to main$/, 'push $1 sur main'],
  [/^publish · pushed :(\w+)$/, 'publish · image poussée :$1'],
  [/^loading(\.{0,3})$/, 'chargement$1'],
  [/^Couldn't send right now\. Please email me at (\S+)\.$/, 'Envoi impossible pour le moment. Écrivez-moi à $1.'],
];
