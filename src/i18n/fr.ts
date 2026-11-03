/**
 * French copy for the language switch, keyed by the exact English text (whitespace collapsed).
 * The site is written in English; scripts/i18n.ts swaps each text node or attribute that has
 * an entry here. Text with no entry stays as it is (tool names, numbers, code).
 * A key can map to '' when French word order moves that fragment into a neighbouring one.
 */
const nb = ' '; // French puts a non-breaking space before : ; ? !

export const fr: Record<string, string> = {
  /* ---------- Page titles ---------- */
  'Saif Eddine Dahech · Cloud & DevOps Engineer': 'Saif Eddine Dahech · Ingénieur Cloud & DevOps',
  'Ktebna: from a side app to a gated release pipeline · Saif Eddine Dahech': `Ktebna${nb}: d’une appli annexe à un pipeline de release contrôlé · Saif Eddine Dahech`,
  'LeaveDesk: an app with no servers to manage · Saif Eddine Dahech': `LeaveDesk${nb}: une appli sans aucun serveur à gérer · Saif Eddine Dahech`,
  'Not found · Saif Eddine Dahech': 'Page introuvable · Saif Eddine Dahech',

  /* ---------- Layout, nav ---------- */
  'Skip to content': 'Aller au contenu',
  About: 'À propos',
  Work: 'Projets',
  Experience: 'Expérience',
  Toolbox: 'Outils',
  Education: 'Formation',
  Now: 'Maintenant',
  'Open menu': 'Ouvrir le menu',
  'Close menu': 'Fermer le menu',
  'Image viewer': 'Visionneuse d’images',
  Close: 'Fermer',

  /* ---------- Hero ---------- */
  'From commit to': 'Du commit au',
  'Cloud & DevOps engineer · CI/CD · Kubernetes · cloud security':
    'Ingénieur Cloud & DevOps · CI/CD · Kubernetes · sécurité cloud',
  'I make software easier to ship and harder to break. I design pipelines that test, scan and release every change automatically, then run it on Kubernetes with the monitoring to prove it works.':
    'Je rends les logiciels plus faciles à livrer et plus difficiles à casser. Je conçois des pipelines qui testent, analysent et publient chaque changement automatiquement, puis je le fais tourner sur Kubernetes avec la supervision qui prouve que tout fonctionne.',
  'See my work': 'Voir mes projets',
  'Download CV': 'Télécharger le CV',
  'Download in English': 'Télécharger en anglais',
  'Download in French': 'Télécharger en français',
  'Get in touch': 'Me contacter',
  'Portrait of Saif Eddine Dahech': 'Portrait de Saif Eddine Dahech',
  'Sousse, Tunisia': 'Sousse, Tunisie',
  'open to opportunities': 'ouvert aux opportunités',
  "hi, that's me!": `salut, c’est moi${nb}!`,
  scroll: 'défiler',

  /* ---------- Facts ---------- */
  'At a glance': 'En bref',
  'internships, from IoT to DevSecOps': 'stages, de l’IoT au DevSecOps',
  'certifications incl. CEH, CCNA, AZ-900': 'certifications dont CEH, CCNA, AZ-900',
  'languages: Arabic, English, French, German': `langues${nb}: arabe, anglais, français, allemand`,
  'engineering degree, Cloud Computing & DevOps': 'diplôme d’ingénieur, Cloud Computing & DevOps',

  /* ---------- About ---------- */
  'a bit about me': 'un peu sur moi',
  'Get to': 'Apprenez à',
  'know me': 'me connaître',
  'A baboon typing furiously on a laptop': 'Un babouin qui tape frénétiquement sur un ordinateur portable',
  "Hi, I'm Saif. I build the systems that get code safely from a laptop to production.":
    'Salut, moi c’est Saif. Je construis les systèmes qui amènent le code en toute sécurité d’un ordinateur portable jusqu’à la production.',
  "I'm 25, from Tunisia, and in the final year of a Cloud Computing & DevOps engineering degree.":
    'J’ai 25 ans, je viens de Tunisie et je suis en dernière année d’un cycle d’ingénieur en Cloud Computing & DevOps.',
  "I started with networks. My bachelor's at ISET Mahdia and the Cisco CCNA track taught me how traffic really moves. Ethical hacking (CEH) then taught me to look at every system the way an attacker would. In 2024 I spent three months at 42 Heilbronn in Germany, a school with no teachers and no lectures, where you learn C, algorithms and shell by building projects and defending them in peer reviews.":
    'J’ai commencé par les réseaux. Ma licence à l’ISET Mahdia et le cursus Cisco CCNA m’ont appris comment le trafic circule vraiment. Le hacking éthique (CEH) m’a ensuite appris à regarder chaque système comme le ferait un attaquant. En 2024, j’ai passé trois mois à 42 Heilbronn en Allemagne, une école sans professeurs ni cours magistraux, où l’on apprend le C, l’algorithmique et le shell en réalisant des projets et en les défendant devant ses pairs.',
  'All of that meets in DevSecOps. I like pipelines, containers and Kubernetes because they turn good engineering habits into rules a machine enforces on every commit. When something breaks, I want to understand why it broke, so the fix holds.':
    'Tout cela se rejoint dans le DevSecOps. J’aime les pipelines, les conteneurs et Kubernetes parce qu’ils transforment les bonnes pratiques d’ingénierie en règles qu’une machine applique à chaque commit. Quand quelque chose casse, je veux comprendre pourquoi, pour que la correction tienne.',
  'Next, I want to bring these practices to AI and LLM systems, where delivery, security and observability matter just as much.':
    'Ensuite, je veux appliquer ces pratiques aux systèmes d’IA et de LLM, où la livraison, la sécurité et l’observabilité comptent tout autant.',
  'Security is a gate': 'La sécurité est un contrôle bloquant',
  'Scanners only help if they can stop a release. I wire them in as blocking checks with clear thresholds.':
    'Les scanners ne servent que s’ils peuvent arrêter une mise en production. Je les intègre comme des contrôles bloquants avec des seuils clairs.',
  'Every release is traceable': 'Chaque version est traçable',
  'The image that was scanned is the image that ships, tagged by commit, with a rollback runbook ready.':
    'L’image analysée est celle qui est livrée, étiquetée par commit, avec une procédure de retour arrière prête.',
  'Find the real cause': 'Trouver la vraie cause',
  "I debug from evidence: logs, variables, network paths. A fix I can't explain is a fix I don't trust.": `Je débogue à partir de preuves${nb}: logs, variables, chemins réseau. Une correction que je ne sais pas expliquer est une correction en laquelle je n’ai pas confiance.`,
  'Document it': 'Tout documenter',
  "READMEs, security policies and runbooks, so the next engineer doesn't need me in the room.":
    'README, politiques de sécurité et runbooks, pour que le prochain ingénieur n’ait pas besoin de moi dans la pièce.',

  /* ---------- Work ---------- */
  "things I'm proud of": 'ce dont je suis fier',
  "Things I've": 'Ce que j’ai',
  built: 'construit',
  'Arabsoft internship': 'Stage chez Arabsoft',
  'Ktebna: a security-gated delivery platform': `Ktebna${nb}: une plateforme de livraison verrouillée par la sécurité`,
  'Ktebna is a peer-to-peer book marketplace for Tunisia (Spring Boot, React, MySQL). I proposed the project, rebuilt its backend, and built everything around it: a 6-stage GitLab pipeline where any failed security check blocks the release, a Kubernetes deployment, and monitoring with alerting.': `Ktebna est une marketplace de livres entre particuliers en Tunisie (Spring Boot, React, MySQL). J’ai proposé le projet, reconstruit son backend et bâti tout ce qui l’entoure${nb}: un pipeline GitLab en 6 étapes où chaque contrôle de sécurité échoué bloque la mise en production, un déploiement Kubernetes, et une supervision avec alertes.`,
  'Read the case study': 'Lire l’étude de cas',
  'Key results': 'Résultats clés',
  'pipeline jobs in 6 stages': 'jobs de pipeline en 6 étapes',
  'test coverage, quality gate passed': 'de couverture de tests, quality gate validée',
  'automated tests per run': 'tests automatisés par exécution',
  'Prometheus alert rules with email': 'règles d’alerte Prometheus avec e-mail',
  'keep watching: every other run, a security gate stops the release': `regardez bien${nb}: une exécution sur deux, un contrôle de sécurité bloque la mise en production`,
  'Animated pipeline: a commit stops at each stage while it runs, turns green when the stage passes or red when a security gate blocks it, then rolls out as pods on a Kubernetes cluster.': `Pipeline animé${nb}: un commit s’arrête à chaque étape pendant son exécution, passe au vert quand l’étape réussit ou au rouge quand un contrôle de sécurité le bloque, puis se déploie en pods sur un cluster Kubernetes.`,
  'A simulation of': 'Une simulation de',
  'this pipeline': 'ce pipeline',
  ': the commit stops at each stage while it runs.': `${nb}: le commit s’arrête à chaque étape pendant son exécution.`,
  'Dashed rings mark the blocking security gates.':
    'Les anneaux en pointillés marquent les contrôles de sécurité bloquants.',
  'What I built': 'Ce que j’ai construit',
  'Migrated the backend from Supabase to Spring Boot + MySQL with JWT auth and Flyway-versioned schema.':
    'Migration du backend de Supabase vers Spring Boot + MySQL, avec authentification JWT et schéma versionné par Flyway.',
  'Shift-left security: SonarCloud quality gate (80%+ coverage on new code), Gitleaks over the full git history, Trivy on dependencies and images.': `Sécurité shift-left${nb}: quality gate SonarCloud (80${nb}%+ de couverture sur le nouveau code), Gitleaks sur tout l’historique git, Trivy sur les dépendances et les images.`,
  'Supply chain: only the exact scanned image is published to the registry, tagged by commit SHA for traceable rollbacks.': `Chaîne d’approvisionnement${nb}: seule l’image exacte qui a été analysée est publiée dans le registre, étiquetée par SHA de commit pour des retours arrière traçables.`,
  'Tests with JUnit 5, Testcontainers on a real MySQL, JaCoCo, Vitest and ESLint, including authorization and rate-limit rules.':
    'Tests avec JUnit 5, Testcontainers sur un vrai MySQL, JaCoCo, Vitest et ESLint, y compris les règles d’autorisation et de limitation de débit.',
  'How it runs': 'Comment ça tourne',
  'Kubernetes with multi-stage, non-root images, health probes, resource limits, PVCs and Secrets.':
    'Kubernetes avec des images multi-stage non-root, des sondes de santé, des limites de ressources, des PVC et des Secrets.',
  'Prometheus, Grafana and Alertmanager: golden-signals dashboard and 8 alert rules with email notifications.': `Prometheus, Grafana et Alertmanager${nb}: tableau de bord des golden signals et 8 règles d’alerte avec notifications par e-mail.`,
  'Automated MySQL backups, S3-compatible object storage, nginx caching and compression.':
    'Sauvegardes MySQL automatisées, stockage objet compatible S3, cache et compression nginx.',
  'README, SECURITY.md, a security gate policy and rollback runbooks.':
    'README, SECURITY.md, une politique des contrôles de sécurité et des runbooks de retour arrière.',
  'my favourite one: the gate doing its job': `mon préféré${nb}: le contrôle qui fait son travail`,
  'Project screenshots': 'Captures d’écran du projet',
  'Grafana golden-signals dashboard: 0.0% error rate, 8.26 ms p99 latency': `Tableau de bord Grafana des golden signals${nb}: 0,0${nb}% d’erreurs, latence p99 de 8,26${nb}ms`,
  'Grafana dashboard for the Ktebna backend': 'Tableau de bord Grafana du backend Ktebna',
  '· 0.0% errors, 8.26 ms p99': `· 0,0${nb}% d’erreurs, p99 8,26${nb}ms`,
  'SonarCloud: quality gate passed, 83.9% coverage, 0.9% duplication, A security rating': `SonarCloud${nb}: quality gate validée, 83,9${nb}% de couverture, 0,9${nb}% de duplication, note de sécurité A`,
  'SonarCloud project overview': 'Vue d’ensemble du projet SonarCloud',
  '· gate passed, 83.9% coverage': `· gate validée, 83,9${nb}% de couverture`,
  'Proof the gate works: a deliberately added code issue fails sonarcloud-check and stops the pipeline': `La preuve que le contrôle fonctionne${nb}: un problème de code ajouté exprès fait échouer sonarcloud-check et arrête le pipeline`,
  'GitLab pipeline blocked at the SonarCloud stage': 'Pipeline GitLab bloqué à l’étape SonarCloud',
  'Gate test': 'Test du contrôle',
  '· a bad commit gets blocked': '· un mauvais commit est bloqué',
  'Kubernetes structure: services, deployments, pods, secrets and persistent volumes in the ktebna namespace': `Structure Kubernetes${nb}: services, deployments, pods, secrets et volumes persistants dans le namespace ktebna`,
  'Kubernetes structure diagram': 'Schéma de la structure Kubernetes',
  '· namespace design': '· conception du namespace',
  'kubectl get all: backend, frontend and MySQL running in the ktebna namespace': `kubectl get all${nb}: backend, frontend et MySQL en marche dans le namespace ktebna`,
  'kubectl get all output': 'Sortie de kubectl get all',
  Cluster: 'Cluster',
  '· all workloads running': '· toutes les charges de travail tournent',
  'Prometheus alert rules: BackendDown, HighErrorRate, HighP99Latency, DB pool and disk alerts': `Règles d’alerte Prometheus${nb}: BackendDown, HighErrorRate, HighP99Latency, pool de connexions et disque`,
  'Prometheus alert rules': 'Règles d’alerte Prometheus',
  Alerting: 'Alertes',
  '· 8 Prometheus rules': '· 8 règles Prometheus',
  'A leave management app on a fully serverless AWS architecture, with no EC2 or self-managed servers allowed. A Python Lambda behind API Gateway, four DynamoDB tables, everything defined in Terraform and deployed through GitHub Actions.':
    'Une application de gestion des congés sur une architecture AWS entièrement serverless, sans EC2 ni serveur autogéré. Une Lambda Python derrière API Gateway, quatre tables DynamoDB, le tout défini en Terraform et déployé via GitHub Actions.',
  'My part: Terraform infra': `Ma partie${nb}: infra Terraform`,
  'Lambda backend': 'Backend Lambda',
  'Leave management platform': 'Plateforme de gestion des congés',
  'A full-stack application covering the complete leave request and approval lifecycle, built with Spring Boot, JPA and Oracle DB and packaged with Docker for Kubernetes. Working in an Agile team, I resolved an average of 7 backend defects per sprint to keep releases on schedule.':
    'Une application full-stack qui couvre tout le cycle des demandes de congé et de leur validation, construite avec Spring Boot, JPA et Oracle DB et empaquetée avec Docker pour Kubernetes. Au sein d’une équipe Agile, j’ai corrigé en moyenne 7 défauts backend par sprint pour tenir le calendrier des livraisons.',
  'Real-time IoT web app': 'Application web IoT en temps réel',
  'A web application exchanging data in real time with ESP32 devices over MQTT. I configured and integrated the hardware end to end, from the microcontrollers to the web interface.':
    'Une application web qui échange des données en temps réel avec des modules ESP32 via MQTT. J’ai configuré et intégré le matériel de bout en bout, des microcontrôleurs jusqu’à l’interface web.',
  'Full-stack web': 'Web full-stack',
  'Next build': 'Prochain projet',
  'in planning': 'en préparation',
  Something: 'Quelque chose de',
  new: 'nouveau',
  'is on the way.': 'arrive bientôt.',
  'My next project is in the design phase. It will push further into cloud-native delivery and is coming to this page soon.':
    'Mon prochain projet est en phase de conception. Il ira plus loin dans la livraison cloud-native et arrivera bientôt sur cette page.',

  /* ---------- Experience ---------- */
  'my path so far': 'mon parcours jusqu’ici',
  "Where I've": 'Là où j’ai',
  worked: 'travaillé',
  'Jul 2026 – Sep 2026': 'juil. 2026 – sept. 2026',
  'DevOps / DevSecOps Engineer Intern': 'Ingénieur DevOps / DevSecOps stagiaire',
  'Designed a 12-job, 6-stage security-gated GitLab pipeline for a Spring Boot, React and MySQL platform, deployed it to Kubernetes, and built monitoring and alerting with Prometheus, Grafana and Alertmanager.':
    'Conception d’un pipeline GitLab de 12 jobs en 6 étapes, verrouillé par des contrôles de sécurité, pour une plateforme Spring Boot, React et MySQL, son déploiement sur Kubernetes, et la mise en place de la supervision et des alertes avec Prometheus, Grafana et Alertmanager.',
  'Tunis, Tunisia': 'Tunis, Tunisie',
  'Jun 2025 – Aug 2025': 'juin 2025 – août 2025',
  'Full Stack Developer Intern': 'Développeur full-stack stagiaire',
  'Built a leave management application with Spring Boot, JPA and Oracle DB, containerized for Kubernetes, and resolved about 7 backend defects per sprint in an Agile team.':
    'Développement d’une application de gestion des congés avec Spring Boot, JPA et Oracle DB, conteneurisée pour Kubernetes, et correction d’environ 7 défauts backend par sprint au sein d’une équipe Agile.',
  'Mar 2024 – May 2024': 'mars 2024 – mai 2024',
  'Software Engineering Training': 'Formation en génie logiciel',
  'Project-based, peer-reviewed training in C/C++, algorithms and shell.':
    'Formation par projets, évaluée par les pairs, en C/C++, algorithmique et shell.',
  'Heilbronn, Germany': 'Heilbronn, Allemagne',
  'Feb 2023 – Jun 2023': 'févr. 2023 – juin 2023',
  'Built an IoT web application with real-time data exchange between the web interface and ESP32 devices over MQTT.':
    'Développement d’une application web IoT avec échange de données en temps réel entre l’interface web et des modules ESP32 via MQTT.',
  'Gabes, Tunisia': 'Gabès, Tunisie',

  /* ---------- Toolbox ---------- */
  'my everyday kit': 'mon kit de tous les jours',
  'What I': 'Mes outils',
  'work with': 'de travail',
  'CI/CD & automation': 'CI/CD & automatisation',
  'Container Registry': 'Registre de conteneurs',
  'Release automation': 'Automatisation des releases',
  'Vulnerability management': 'Gestion des vulnérabilités',
  'Containers & orchestration': 'Conteneurs & orchestration',
  'S3-compatible storage': 'Stockage compatible S3',
  Observability: 'Observabilité',
  'Testing & quality': 'Tests & qualité',
  'Development & data': 'Développement & données',
  'Systems & networking': 'Systèmes & réseaux',
  'Routing & switching': 'Routage & commutation',

  /* ---------- Education ---------- */
  'still learning, always will be': 'toujours en apprentissage, et ça ne changera pas',
  Always: 'Toujours',
  learning: 'apprendre',
  'Degrees & training': 'Diplômes & formations',
  'Engineering Degree in Computer Engineering, Cloud Computing & DevOps':
    'Diplôme d’ingénieur en génie informatique, Cloud Computing & DevOps',
  'EPI Digital School, Tunisia · Sep 2024 – Jun 2027 (expected)':
    'EPI Digital School, Tunisie · sept. 2024 – juin 2027 (prévu)',
  'Project-Based Software Engineering Training': 'Formation en génie logiciel par projets',
  '42 Heilbronn, Germany · Mar 2024 – May 2024': '42 Heilbronn, Allemagne · mars 2024 – mai 2024',
  "Bachelor's Degree in Network & IT Services": 'Licence en réseaux et services informatiques',
  'ISET Mahdia, Tunisia · Sep 2020 – Jun 2023': 'ISET Mahdia, Tunisie · sept. 2020 – juin 2023',
  Languages: 'Langues',
  Arabic: 'Arabe',
  English: 'Anglais',
  French: 'Français',
  German: 'Allemand',
  Native: 'Natif',
  Fluent: 'Courant',
  Professional: 'Professionnel',
  Conversational: 'Conversationnel',
  'Arabic: Native': `Arabe${nb}: natif`,
  'English: Fluent': `Anglais${nb}: courant`,
  'French: Professional': `Français${nb}: professionnel`,
  'German: Conversational': `Allemand${nb}: conversationnel`,

  /* ---------- Now ---------- */
  'right now': 'en ce moment',
  "What I'm": 'Ce qui',
  'up to': 'm’occupe',
  'Kubernetes, hands-on': 'Kubernetes, en pratique',
  'Working through KIND labs: multi-node clusters, networking, and the errors that teach you the most.': `J’enchaîne les labs KIND${nb}: clusters multi-nœuds, réseau, et les erreurs qui en apprennent le plus.`,
  studying: 'j’étudie',
  'Terraform, properly': 'Terraform, pour de vrai',
  'Going beyond "it applies": modules, state and writing infrastructure other people can read.': `Aller au-delà du «${nb}ça s’applique${nb}»${nb}: modules, state, et une infrastructure que les autres peuvent lire.`,
  practising: 'je pratique',
  'Firewall administration': 'Administration de pare-feu',
  'FortiGate labs on VMware: policies, NAT and making sure only the right traffic gets through.': `Labs FortiGate sur VMware${nb}: politiques, NAT, et s’assurer que seul le bon trafic passe.`,
  'looking for': 'je recherche',
  'My PFE internship': 'Mon stage de PFE',
  'A paid Cloud / DevOps / DevSecOps internship of 5+ months, starting January or February 2027.':
    'Un stage rémunéré Cloud / DevOps / DevSecOps de 5 mois ou plus, à partir de janvier ou février 2027.',
  'Last updated November 2026.': `Dernière mise à jour${nb}: novembre 2026.`,

  /* ---------- Contact ---------- */
  'say hello': 'dites bonjour',
  "Let's ship something": 'Livrons quelque chose',
  'together.': 'ensemble.',
  "I'm looking for a paid Cloud / DevOps / DevSecOps internship of 5+ months from January or February 2027, and I'm open to junior roles. I'm based in Sousse, Tunisia, and ready to relocate.":
    'Je recherche un stage rémunéré Cloud / DevOps / DevSecOps de 5 mois ou plus à partir de janvier ou février 2027, et je suis ouvert aux postes junior. Je suis basé à Sousse, en Tunisie, et prêt à déménager.',
  'Write me a message': 'Écrivez-moi un message',
  'or reach me directly below': 'ou contactez-moi directement ci-dessous',
  'all the direct ways to reach me': 'tous les moyens de me joindre directement',
  Email: 'E-mail',
  'Copy email address': 'Copier l’adresse e-mail',
  Copy: 'Copier',
  Copied: 'Copié',
  'Select it': 'Sélectionnez-la',

  /* ---------- Contact dialog ---------- */
  'drop me a line': 'écrivez-moi un mot',
  "Let's": 'On en',
  'talk.': `discute${nb}?`,
  'Tell me a bit about what you have in mind. It goes straight to my inbox.':
    'Dites-m’en un peu plus sur ce que vous avez en tête. Le message arrive directement dans ma boîte de réception.',
  "What's it about?": `De quoi s’agit-il${nb}?`,
  'Internship, job offer, a project…': 'Stage, offre d’emploi, un projet…',
  'Your name': 'Votre nom',
  'Jane Doe': 'Marie Dupont',
  'Your email': 'Votre e-mail',
  'jane@company.com': 'marie@entreprise.com',
  'Hi Saif, …': 'Bonjour Saif, …',
  'Company website': 'Site web de l’entreprise',
  'checking fields': 'vérification des champs',
  sending: 'envoi',
  delivered: 'remis',
  'Send message': 'Envoyer le message',
  'Message sent.': 'Message envoyé.',
  "Thanks for writing. I'll get back to you by email.": 'Merci pour votre message. Je vous répondrai par e-mail.',
  'Prefer email? Write to': `Vous préférez l’e-mail${nb}? Écrivez à`,
  'What is it about? A few words is enough.': `De quoi s’agit-il${nb}? Quelques mots suffisent.`,
  'Please tell me your name.': 'Merci d’indiquer votre nom.',
  'That email doesn’t look right.': 'Cette adresse e-mail ne semble pas valide.',
  'A few more words, please (10+ characters).': 'Encore quelques mots, s’il vous plaît (10 caractères minimum).',
  'Just sent one, give it 30 seconds.': 'Un message vient de partir, patientez 30 secondes.',

  /* ---------- Live pipeline (status chip and log lines; stage and pod labels stay as tool output) ---------- */
  passed: 'réussi',
  running: 'en cours',
  blocked: 'bloqué',
  'rollout complete · 3/3 pods Running': 'déploiement terminé · 3/3 pods Running',
  'test · 297 tests passed': 'test · 297 tests réussis',
  'sonarcloud · quality gate passed': 'sonarcloud · quality gate validée',
  'gitleaks · no leaks · trivy · 0 HIGH/CRITICAL': 'gitleaks · aucune fuite · trivy · 0 HIGH/CRITICAL',
  'build · images saved as artifacts': 'build · images enregistrées comme artefacts',
  'image scan · clean': 'image scan · aucune faille',
  'sonarcloud · quality gate failed · new code issue': 'sonarcloud · quality gate échouée · nouveau problème de code',
  'gitleaks · 1 secret found in the commit': 'gitleaks · 1 secret trouvé dans le commit',
  'trivy · 1 CRITICAL CVE in a dependency': 'trivy · 1 CVE CRITICAL dans une dépendance',
  'image scan · 1 CRITICAL CVE in the base image': 'image scan · 1 CVE CRITICAL dans l’image de base',
  'release blocked · nothing deployed': 'release bloquée · rien n’a été déployé',

  /* ---------- Footer, 404 ---------- */
  '404 · pipeline blocked': '404 · pipeline bloqué',
  "This page didn't pass the": 'Cette page n’a pas passé le',
  'gate.': 'contrôle.',
  'The address may be old or mistyped. Nothing was deployed here.':
    'L’adresse est peut-être ancienne ou mal saisie. Rien n’a été déployé ici.',
  'Back to the home page': 'Retour à l’accueil',

  /* ---------- Case studies: shared ---------- */
  'work /': 'projets /',
  '← Back': '← Retour',
  'Case study': 'Étude de cas',
  'Saif Eddine Dahech, Cloud & DevOps Engineer. Security-gated CI/CD pipelines, Kubernetes, observability and cloud infrastructure as code.':
    'Saif Eddine Dahech, ingénieur Cloud & DevOps. Pipelines CI/CD verrouillés par la sécurité, Kubernetes, observabilité et infrastructure cloud en code.',
  'Arabsoft gave me supervision and freedom, not a set task. I proposed Ktebna, a book marketplace web app, and turned it into a production-style system: a new backend, containers, a pipeline where security checks can stop a release, a Kubernetes deployment, and monitoring that pages someone when things go wrong.': `Arabsoft m’a donné un encadrement et de la liberté, pas une tâche imposée. J’ai proposé Ktebna, une application web de marketplace de livres, et je l’ai transformée en système digne de la production${nb}: un nouveau backend, des conteneurs, un pipeline où les contrôles de sécurité peuvent arrêter une mise en production, un déploiement Kubernetes, et une supervision qui alerte quelqu’un quand quelque chose tourne mal.`,
  'A leave request platform built by a team of three at EPI Digital School under one strict rule: no EC2 and no self-managed infrastructure. Every component is an AWS managed service, defined in Terraform and shipped through GitHub Actions.': `Une plateforme de demandes de congé construite par une équipe de trois à l’EPI Digital School, avec une règle stricte${nb}: pas d’EC2 ni d’infrastructure autogérée. Chaque composant est un service managé AWS, défini en Terraform et livré via GitHub Actions.`,
  'Next case study →': 'Étude de cas suivante →',
  'Key decisions': 'Décisions clés',
  Results: 'Résultats',
  Architecture: 'Architecture',

  /* ---------- Case study: Ktebna ---------- */
  'Ktebna: from a side app to a': `Ktebna${nb}: d’une appli annexe à un pipeline de release`,
  gated: 'contrôlé',
  'release pipeline': '',
  Role: 'Rôle',
  'Sole engineer': 'Seul ingénieur',
  Duration: 'Durée',
  'Jul – Sep 2026': 'juil. – sept. 2026',
  Setting: 'Cadre',
  'Remote internship, Arabsoft': 'Stage à distance, Arabsoft',
  Status: 'Statut',
  'Complete, pipeline green': 'Terminé, pipeline au vert',
  'The challenge': 'Le défi',
  'The original app ran on Supabase with no tests, no containers and no delivery process. Any change went live by hand, and nothing checked it for bugs, leaked secrets or vulnerable dependencies.':
    'L’application d’origine tournait sur Supabase, sans tests, sans conteneurs et sans processus de livraison. Chaque changement partait en production à la main, et rien ne vérifiait l’absence de bugs, de secrets divulgués ou de dépendances vulnérables.',
  'My goal:': `Mon objectif${nb}:`,
  'every commit on main should become a tested, scanned, traceable release, or be stopped with a clear reason.':
    'chaque commit sur main doit devenir une release testée, analysée et traçable, ou être bloqué avec une raison claire.',
  'And I had to do it on free tiers, with 400 CI minutes a month.':
    'Et je devais le faire avec des offres gratuites, avec 400 minutes de CI par mois.',
  'I rebuilt the backend in Spring Boot with MySQL, JWT authentication and Flyway migrations, kept the React frontend behind nginx, and added a monitoring stack next to the app.':
    'J’ai reconstruit le backend en Spring Boot avec MySQL, une authentification JWT et des migrations Flyway, gardé le frontend React derrière nginx, et ajouté une stack de supervision à côté de l’application.',
  'Runtime architecture: nginx serving React, Spring Boot API, MySQL, and the Prometheus, Grafana and Alertmanager stack': `Architecture d’exécution${nb}: nginx qui sert React, l’API Spring Boot, MySQL, et la stack Prometheus, Grafana et Alertmanager`,
  'Ktebna runtime architecture diagram': 'Schéma de l’architecture d’exécution de Ktebna',
  'Runtime architecture. Ports bind to 127.0.0.1 only; Prometheus scrapes every 15 s and Alertmanager emails the operator.': `Architecture d’exécution. Les ports n’écoutent que sur 127.0.0.1${nb}; Prometheus collecte les métriques toutes les 15${nb}s et Alertmanager prévient l’opérateur par e-mail.`,
  'The pipeline': 'Le pipeline',
  'Six stages, twelve jobs. Images are built as artifacts but':
    'Six étapes, douze jobs. Les images sont construites comme artefacts mais',
  'not pushed': 'ne sont pas poussées',
  'until their own Trivy scan passes, so what reaches the registry is exactly what was scanned.': `tant que leur propre analyse Trivy n’a pas réussi${nb}: ce qui arrive dans le registre est exactement ce qui a été analysé.`,
  'The 6-stage GitLab pipeline with nightly rescans of published images':
    'Le pipeline GitLab en 6 étapes, avec une nouvelle analyse des images publiées chaque nuit',
  'Pipeline stage diagram': 'Schéma des étapes du pipeline',
  'Each stage only runs once every blocking job before it has passed.':
    'Chaque étape ne démarre qu’une fois que tous les jobs bloquants qui la précèdent ont réussi.',
  'Scan the artifact, then publish it': 'Analyser l’artefact, puis le publier',
  'Build images, save them as job artifacts, scan them, and push only the scanned image tagged with the commit SHA.':
    'Construire les images, les enregistrer comme artefacts de job, les analyser, et ne pousser que l’image analysée, étiquetée avec le SHA du commit.',
  "why: no gap between what's tested and what ships": `pourquoi${nb}: aucun écart entre ce qui est testé et ce qui est livré`,
  'Only main publishes': 'Seule main publie',
  'The blocking SonarCloud gate runs on main, so only main can replace the':
    'La quality gate SonarCloud bloquante tourne sur main, donc seule main peut remplacer l’image',
  'image.': '.',
  "why: a side branch can't skip the gate": `pourquoi${nb}: une branche annexe ne peut pas contourner le contrôle`,
  'Nightly rescans': 'Nouvelles analyses chaque nuit',
  'A schedule rescans published images every night, because new CVEs appear even when the code doesn’t change.':
    'Une tâche planifiée réanalyse les images publiées chaque nuit, car de nouvelles CVE apparaissent même quand le code ne change pas.',
  "why: clean yesterday isn't clean today": `pourquoi${nb}: propre hier ne veut pas dire propre aujourd’hui`,
  'Gitleaks on full history': 'Gitleaks sur tout l’historique',
  'Secrets are scanned in the working tree and across every past commit, not just the latest diff.':
    'Les secrets sont recherchés dans l’arbre de travail et dans chaque commit passé, pas seulement dans le dernier diff.',
  'why: a deleted secret is still in git': `pourquoi${nb}: un secret supprimé reste dans git`,
  'Spend CI minutes wisely': 'Dépenser les minutes de CI avec soin',
  'Docs-only commits start no pipeline, and older pipelines are cancelled when a newer commit arrives.':
    'Les commits qui ne touchent que la documentation ne lancent aucun pipeline, et les anciens pipelines sont annulés quand un commit plus récent arrive.',
  'why: 400 free minutes a month': `pourquoi${nb}: 400 minutes gratuites par mois`,
  'Real database in tests': 'Une vraie base de données dans les tests',
  'Backend tests run against MySQL 8 through Testcontainers on Docker-in-Docker, not an in-memory fake.':
    'Les tests backend tournent sur MySQL 8 via Testcontainers en Docker-in-Docker, pas sur une fausse base en mémoire.',
  'why: catch the bugs production would hit': `pourquoi${nb}: attraper les bugs que la production rencontrerait`,
  'Defense in depth': 'Défense en profondeur',
  'Security isn’t one tool. Each layer limits what a failure in another layer can expose.':
    'La sécurité n’est pas un seul outil. Chaque couche limite ce qu’une défaillance dans une autre couche peut exposer.',
  'Six security layers, from pipeline gates to secrets management':
    'Six couches de sécurité, des contrôles du pipeline à la gestion des secrets',
  'Defense in depth layers': 'Couches de la défense en profondeur',
  'The stack runs in its own namespace with one Deployment and Service per component, PVCs for the database and uploads, and Secrets for credentials. Every pod runs without a service-account token, with CPU and memory limits, and images tagged by commit.':
    'La stack tourne dans son propre namespace, avec un Deployment et un Service par composant, des PVC pour la base de données et les fichiers envoyés, et des Secrets pour les identifiants. Chaque pod tourne sans jeton de service account, avec des limites CPU et mémoire, et des images étiquetées par commit.',
  'Kubernetes structure of the ktebna namespace': 'Structure Kubernetes du namespace ktebna',
  'Kubernetes structure': 'Structure Kubernetes',
  'Problems I solved': 'Problèmes résolus',
  Symptom: 'Symptôme',
  'SonarCloud returned 403 in CI even with a valid token.':
    'SonarCloud renvoyait une erreur 403 en CI, même avec un jeton valide.',
  'Root cause': 'Cause racine',
  'main was not a protected branch, so GitLab withheld protected variables like':
    'main n’était pas une branche protégée, donc GitLab ne transmettait pas les variables protégées comme',
  '. I proved it by checking': '. Je l’ai prouvé en vérifiant',
  'and comparing variable lengths without printing secrets.':
    'et en comparant la longueur des variables sans afficher les secrets.',
  'Pods stuck in ImagePullBackOff with 401 Unauthorized.':
    'Pods bloqués en ImagePullBackOff avec une erreur 401 Unauthorized.',
  Fix: 'Correctif',
  'Images live in a private GitLab registry. I created a read-only deploy token, a docker-registry Secret and':
    'Les images sont dans un registre GitLab privé. J’ai créé un deploy token en lecture seule, un Secret docker-registry et des',
  ', then cleaned up duplicate ReplicaSets left by the failed rollout.':
    ', puis nettoyé les ReplicaSets en double laissés par le déploiement échoué.',
  "Docker-in-Docker builds couldn't reach the daemon.":
    'Les builds Docker-in-Docker n’arrivaient pas à joindre le daemon.',
  'Configured the DinD service without TLS inside the isolated job and pointed':
    'J’ai configuré le service DinD sans TLS dans le job isolé et fait pointer',
  'at it; passed registry credentials to Trivy explicitly.': `vers lui${nb}; j’ai aussi passé explicitement les identifiants du registre à Trivy.`,
  'Trivy dependency scans failed on Maven registry rate limits.':
    'Les analyses de dépendances Trivy échouaient à cause des limites de débit du registre Maven.',
  'Ran the filesystem scan with': 'J’ai lancé l’analyse du système de fichiers avec',
  'and overrode scanner image entrypoints so they run as CI jobs.':
    'et redéfini les entrypoints des images des scanners pour qu’elles tournent comme jobs CI.',
  Incident: 'Incident',
  'A root .env file was staged for the first push, and tokens were later exposed while debugging.':
    'Un fichier .env à la racine avait été ajouté au premier push, et des jetons ont ensuite été exposés pendant le débogage.',
  Response: 'Réponse',
  'Removed the file before it reached the remote, rotated the exposed tokens, and recorded the incident and rotation history in SECURITY.md.':
    'J’ai retiré le fichier avant qu’il n’atteigne le dépôt distant, renouvelé les jetons exposés, et consigné l’incident et l’historique des renouvellements dans SECURITY.md.',
  'jobs in 6 blocking stages': 'jobs en 6 étapes bloquantes',
  'tests per run (121 backend, 176 frontend)': 'tests par exécution (121 backend, 176 frontend)',
  'coverage, quality gate passed': 'de couverture, quality gate validée',
  'SonarCloud security rating, 0 open issues': 'note de sécurité SonarCloud, 0 problème ouvert',
  'alert rules, emailed on fire and resolve':
    'règles d’alerte, notifiées par e-mail au déclenchement et à la résolution',
  'p99 latency on the Grafana dashboard': 'latence p99 sur le tableau de bord Grafana',
  'How I worked': 'Ma méthode de travail',
  'Seven sprints, each ending with a working increment the next one builds on.':
    'Sept sprints, chacun terminé par un incrément fonctionnel sur lequel le suivant s’appuie.',
  'Sprint roadmap: analysis and migration through gates, alerting and polish': `Feuille de route des sprints${nb}: de l’analyse et la migration jusqu’aux contrôles, aux alertes et aux finitions`,
  'Sprint roadmap': 'Feuille de route des sprints',
  'LeaveDesk, serverless on AWS': 'LeaveDesk, du serverless sur AWS',

  /* ---------- Case study: LeaveDesk ---------- */
  'LeaveDesk: an app with': `LeaveDesk${nb}: une appli`,
  'no servers': 'sans aucun serveur',
  'to manage': 'à gérer',
  'My role': 'Mon rôle',
  Team: 'Équipe',
  '3 students': '3 étudiants',
  Context: 'Contexte',
  'Academic project (PFA)': 'Projet académique (PFA)',
  Constraint: 'Contrainte',
  'No EC2, fully serverless': 'Pas d’EC2, entièrement serverless',
  'The problem': 'Le problème',
  'Server-based internal tools carry hidden costs: patching, capacity planning, paying for idle machines, and environments built by hand in a console that nobody can reproduce.': `Les outils internes sur serveurs ont des coûts cachés${nb}: correctifs, planification de capacité, machines payées à ne rien faire, et environnements construits à la main dans une console, que personne ne sait reproduire.`,
  'The question we answered:': `La question à laquelle nous avons répondu${nb}:`,
  'can an enterprise app with role-based access, encryption and continuous delivery run on AWS without a single server to manage?': `une application d’entreprise avec contrôle d’accès par rôles, chiffrement et livraison continue peut-elle tourner sur AWS sans un seul serveur à gérer${nb}?`,
  'LeaveDesk architecture: browser to Netlify React app to API Gateway to Lambda to DynamoDB, with KMS, IAM, CloudWatch and SNS; GitHub Actions deploys with Terraform and to Netlify': `Architecture de LeaveDesk${nb}: du navigateur à l’application React sur Netlify, puis API Gateway, Lambda et DynamoDB, avec KMS, IAM, CloudWatch et SNS${nb}; GitHub Actions déploie avec Terraform et vers Netlify`,
  'Request path in blue. Dashed lines: monitoring, encryption and delivery.': `Le chemin des requêtes est en bleu. Lignes pointillées${nb}: supervision, chiffrement et livraison.`,
  'My part': 'Ma partie',
  'Infrastructure:': `Infrastructure${nb}:`,
  'wrote the Terraform for Lambda, API Gateway, the four DynamoDB tables with their indexes, KMS keys and IAM roles, so the whole environment can be rebuilt from Git.':
    'écriture du Terraform pour Lambda, API Gateway, les quatre tables DynamoDB avec leurs index, les clés KMS et les rôles IAM, pour que tout l’environnement puisse être reconstruit depuis Git.',
  'Backend:': `Backend${nb}:`,
  'built the Python Lambda that handles every route (auth, leave requests and approvals, user admin, leave policies) through internal dispatch on method and path.':
    'développement de la Lambda Python qui gère chaque route (authentification, demandes et validations de congés, administration des utilisateurs, politiques de congés) par un routage interne sur la méthode et le chemin.',
  'CI/CD:': `CI/CD${nb}:`,
  'set up GitHub Actions with separate workflows for the frontend and the infrastructure, plus branch protection and pull-request reviews so nothing reached main unchecked.':
    'mise en place de GitHub Actions avec des workflows séparés pour le frontend et l’infrastructure, plus la protection de branche et la revue des pull requests, pour que rien n’arrive sur main sans vérification.',
  'One Lambda, internal routing': 'Une seule Lambda, routage interne',
  'A single stateless function routes on HTTP method and path, with all state in DynamoDB.':
    'Une seule fonction sans état route selon la méthode HTTP et le chemin, et tout l’état est dans DynamoDB.',
  'why: one deploy unit, fewer cold starts': `pourquoi${nb}: une seule unité de déploiement, moins de démarrages à froid`,
  'Pay-per-request tables': 'Tables facturées à la requête',
  'DynamoDB on on-demand billing, with indexes on email and employee_id.':
    'DynamoDB en facturation à la demande, avec des index sur email et employee_id.',
  'why: no idle cost, no table scans': `pourquoi${nb}: aucun coût à vide, aucun scan de table`,
  'Sessions that expire themselves': 'Des sessions qui expirent toutes seules',
  'Tokens live in a Sessions table with a TTL, so DynamoDB deletes them after 30 days.':
    'Les jetons sont stockés dans une table Sessions avec un TTL, donc DynamoDB les supprime au bout de 30 jours.',
  'why: no cleanup job to run': `pourquoi${nb}: aucun job de nettoyage à lancer`,
  'Encryption and least privilege': 'Chiffrement et moindre privilège',
  'KMS encryption at rest with key rotation; the Lambda role can only touch the tables it needs. Passwords hashed with bcrypt.': `Chiffrement KMS au repos avec rotation des clés${nb}; le rôle de la Lambda ne peut toucher qu’aux tables dont il a besoin. Mots de passe hachés avec bcrypt.`,
  'why: limit the blast radius': `pourquoi${nb}: limiter le rayon d’impact`,
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
  'KMS encryption at rest': 'Chiffrement KMS au repos',
  'Full CI/CD pipeline': 'Pipeline CI/CD complet',
  Manual: 'Manuel',
  'Ktebna, a security-gated pipeline': 'Ktebna, un pipeline verrouillé par la sécurité',

  /* LeaveDesk diagram labels */
  'AWS · managed services only · no EC2': 'AWS · services managés uniquement · pas d’EC2',
  Browser: 'Navigateur',
  users: 'utilisateurs',
  'Python 3 router': 'routeur Python 3',
  'Requests · Employees': 'Demandes · Employés',
  'Sessions (TTL) · Policies': 'Sessions (TTL) · Politiques',
  'logs · alarms': 'logs · alarmes',
  alerts: 'alertes',
  'encryption at rest': 'chiffrement au repos',
  'least privilege': 'moindre privilège',
  'all resources as code': 'tout en code',
  'PR checks · deploy': 'vérifs PR · déploiement',
};

/** Text that scripts build at runtime around a variable part (commit SHA, email, dots). */
export const frPatterns: [RegExp, string][] = [
  [/^push (\w+) to main$/, 'push $1 vers main'],
  [/^publish · pushed :(\w+)$/, 'publish · image poussée :$1'],
  [/^loading(\.{0,3})$/, 'chargement$1'],
  [/^Couldn't send right now\. Please email me at (\S+)\.$/, 'Envoi impossible pour le moment. Écrivez-moi à $1.'],
];
