// Unified Theme and Language Controller

const translations = {
  en: {
    "nav.index": "Index",
    "nav.background": "Background",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.cv": "CV",
    
    "status.available": "[ STATUS: AVAILABLE_FOR_INTERNSHIP ]",
    
    "footer.github": "GitHub",
    "footer.linkedin": "LinkedIn",
    
    // Index Page
    "index.hi": "Hi, I'm Sacha Morin.",
    "index.desc": "Trained at <strong>42 Paris</strong>. I build intelligent systems at the intersection of AI and low-level engineering. I grasp complex architectural paradigms quickly, ship rapidly under pressure, and win hackathons. Seeking a 6-month AI/ML internship.",
    "index.dl_cv": "[0] Download_CV.pdf",
    "index.view_port": "[1] View_Portfolio",
    "index.highlights": "Top Highlights",
    
    // Portfolio Data
    "port.ad_super": "1st Place — Gemini 3 Paris Hackathon",
    "port.ad_super.meta": "2026 // Google DeepMind",
    "port.ad_super.desc": "Ad-SuperSense: AI ad injection pipeline for YouTube. Won $50,000 in Gemini API credits + access to Google AIFF founders. Built with FastAPI and Gemini multimodal indexing. <a href=\"https://www.linkedin.com/posts/42paris_42paris-42beyondthecode-activity-7441881588356833280-Qgoc?utm_source=share&utm_medium=member_ios&rcm=ACoAAEtjeTgB0-I0K8rfNmNIM151WpyCHImYY3g\" target=\"_blank\" style=\"text-decoration:underline; font-weight:600;\">Featured by 42 Paris</a>.",
    
    "port.mistral": "Top 7 Worldwide — Mistral AI Hackathon",
    "port.mistral.meta": "2026 // Mistral",
    "port.mistral.desc": "Vibe AR: Voice-controlled AR code assistant running directly inside a Meta Quest 3. Built with Mistral Large 3, Voxtral, and Three.js/WebXR. Finalist among 100+ global teams.",
    
    "port.mcp": "Mistral AI × MCP Hackathon",
    "port.mcp.meta": "2025 // MCP Protocol",
    "port.mcp.desc": "Quiz Game MCP: Real-time multiplayer quiz with LLM-generated questions. Implemented an MCP server allowing autonomous AI assistants to play the game securely via API constraints.",
    
    "index.stack": "Stack",
    "index.philosophy": "Core Philosophy & Interests",
    
    "phil.problem.title": "Hardcore Problem Solving",
    "phil.problem.desc": "I love racking my brain on complex algorithms and low-level system intricacies. No black boxes, just pure understanding of the mechanics underneath.",
    
    "phil.learning.title": "Continuous Learning",
    "phil.learning.desc": "My primary drive is learning new paradigms. Throw any new technology, whitepaper or language at me, and I will understand and build with it rapidly.",
    
    "phil.euro.title": "European Tech Sovereignty",
    "phil.euro.desc": "Deeply committed to the European AI ecosystem. I believe we have the talent to compete globally, and I want to be on the front lines building our sovereign infrastructure.",
    
    "comp.ai.h3": "AI & LLM — Core Expertise",
    "comp.ai.p": "Building end-to-end intelligent systems, pipelines, and agents.",
    "comp.cloud.h3": "Cloud & DevOps",
    "comp.cloud.p": "Deploying, scaling, and maintaining infrastructure.",
    "comp.sys.h3": "Low-Level Systems — 42 Base",
    "comp.sys.p": "Memory management, networking, and system calls.",
    "comp.web.h3": "Web & Full-Stack",
    "comp.soft.h3": "Soft Skills",
    "comp.soft1.t": "Leadership & Execution",
    "comp.soft1.p": "Managed an association of 2,000+ members. Built and united a team from scratch. Proven ability to execute and ship under 48h pressure during hackathons.",
    "comp.soft2.t": "Fast Learning & Problem Solving",
    "comp.soft2.p": "Trained in self-directed learning at 42. Capable of learning any technology by building. Able to decompose any complex architecture without assistance.",
    "comp.soft3.t": "International & Negotiation",
    "comp.soft3.p": "Fluent English, participated in hackathons across 4 continents. Secured partnerships and dealt with major tech actors (Algorand, Solana, Ledger).",
    "comp.roles.h3": "Target Roles",
    "comp.role1.t": "LLM Engineering",
    "comp.role1.p": "Fine-tuning, advanced prompt engineering, model evaluation, and inference pipelines.",
    "comp.role2.t": "AI Agents & MCP",
    "comp.role2.p": "Multi-agent systems, orchestration, Model Context Protocol integration, agentic workflows.",
    "comp.role3.t": "RAG & Knowledge Bases",
    "comp.role3.p": "Retrieval-augmented generation, vector stores, semantic search systems.",

    // Parcours Page
    "parc.title": "Background",
    "parc.subtitle": "Education · Experience · Commitments",
    "parc.exp.h3": "Experience & Leadership",
    "parc.exp1.t": "Co-President — 42Blockchain",
    "parc.exp1.m": "Jan 2024 – 2025 // Paris, France",
    "parc.exp1.p": "Revitalized an abandoned student association into the world's largest student blockchain union with 2,063 members across 30+ countries. Secured partnerships with Algorand, Solana, and Ledger. Organized events and dispatched students to international hackathons (Bangkok, Singapore, Brussels, Berlin).",
    "parc.exp2.t": "Human Resources Advisor",
    "parc.exp2.m": "2022 - 2024 // Pôle Emploi - France Travail",
    "parc.exp2.p": "Analyzed complex organizational logic and advised businesses on talent acquisition structuring.",
    "parc.exp3.t": "Hotel Receptionist",
    "parc.exp3.m": "Sept – Dec 2022 // London, UK",
    "parc.exp3.p": "Front desk operations in a 100% English-speaking environment. Total linguistic immersion resulting in professional-level fluency.",
    "parc.cert.h3": "Certifications",
    "parc.cert1.t": "AWS Solutions Architect — Associate",
    "parc.cert1.m": "In Progress",
    "parc.cert1.p": "Cloud architecture, Infrastructure as Code, high availability, and AWS security. (EC2, S3, Lambda, VPC, IAM, CloudFormation).",
    "parc.cert2.t": "AWS AI Practitioner",
    "parc.cert2.m": "In Progress",
    "parc.cert2.p": "Machine Learning pipelines, model inference, and deployment using AWS Bedrock, SageMaker, Rekognition, and Comprehend.",
    "parc.cert3.t": "Alyra — Rust Programming",
    "parc.cert3.m": "Completed 2024",
    "parc.cert3.p": "Rust certification applied to low-level systems and blockchain (Ownership, borrowing, lifetimes, safe concurrency).",
    "parc.edu.h3": "Education",
    "parc.edu1.t": "42 Paris — Software Engineering",
    "parc.edu1.m": "Nov 2023 – Present // Paris, France",
    "parc.edu1.tag": "RNCP Level 7 (IA / Algo) In Progress (Master's Eq.)",
    "parc.edu1.p": "Intensive peer-to-peer curriculum. System programming in C (memory, processes, sockets), OOP in C++, networking (TCP/IP, HTTP servers from scratch), multithreading, and advanced Linux/Docker administration.",
    "parc.edu2.t": "EF Education First — Language & Finance",
    "parc.edu2.m": "Jan – Jun 2023 // San Diego, CA",
    "parc.edu2.p": "English language diploma with supplementary modules in finance. 6 months of total immersion on an American campus.",
    "parc.edu3.t": "General Baccalaureate",
    "parc.edu3.m": "2022 // France",
    "parc.edu3.p": "Solid scientific foundation — Specialties in Physics, Chemistry, Biology, and Expert Mathematics.",
    "parc.lang.h3": "Languages",
    "parc.lang1": "French (Native)",
    "parc.lang2": "English (Fluent/Professional)",

    "portpage.h1": "Portfolio",
    "portpage.h2": "Projects built under pressure",
    "portpage.ai": "AI Hackathons",
    "portpage.cloud": "Cloud & Infrastructure",
    "portpage.sys": "Low-Level Systems & Infrastructure",
    "portpage.web3": "Web3 Hackathons",

    "cloud.portfolio.title": "sachamorin.fr \u2014 Serverless AWS Deployment",
    "cloud.portfolio.meta": "2026 // AWS \u00b7 Terraform \u00b7 OVH",
    "cloud.portfolio.desc": "Full production-grade AWS deployment of this portfolio. Serverless architecture: S3 static hosting behind CloudFront CDN, Lambda visit counter, API Gateway, DynamoDB \u2014 all provisioned with Terraform IaC. Custom domain sachamorin.fr via OVH Cloud with ACM SSL and Route 53 DNS. AWS Budgets for FinOps monitoring.",
    
    "sys.inc.title": "Inception",
    "sys.inc.meta": "System Administration / Docker",
    "sys.inc.desc": "Production Docker infrastructure from scratch. A WordPress setup served via Nginx with TLS, backed by MariaDB, and cached with Redis. Built entirely with custom Dockerfiles without raw images.",
    
    "sys.irc.title": "ft_irc",
    "sys.irc.meta": "C++ / Networking",
    "sys.irc.desc": "RFC-compliant IRC server in C++. Features non-blocking I/O with poll(), channel management, operator privileges, private messaging, and concurrent clients.",
    
    "sys.trans.title": "ft_transcendence",
    "sys.trans.meta": "Full-Stack Web",
    "sys.trans.desc": "Real-time multiplayer Pong application with WebSockets, OAuth2, matchmaking, user profiles, and a multi-service Docker architecture.",
    
    "sys.mini.title": "Minishell",
    "sys.mini.meta": "C / Unix Systems",
    "sys.mini.desc": "Unix shell written from scratch in C. Complete lexer/parser, pipes, redirections, variable expansion, signal handling, and nested quotes.",
    
    "web3.ape.title": "APE ID",
    "web3.ape.meta": "EthGlobal Bangkok 2024 // $20,000+ Prize",
    "web3.ape.desc": "Web3 passport linking ENS subdomains to NFC wristbands. Scanning the wristband proves on-chain identity and grants event access.",
    
    "web3.algo.title": "Algorand ASA Minter",
    "web3.algo.meta": "Blockspace Hackathon // 1st Place",
    "web3.algo.desc": "dApp to mint NFTs and tokens (ASAs) on the Algorand TestNet using a Svelte frontend and Flask backend."
  },
  
  fr: {
    "nav.index": "Accueil",
    "nav.background": "Parcours",
    "nav.skills": "Compétences",
    "nav.portfolio": "Portfolio",
    "nav.cv": "CV",
    
    "status.available": "[ STATUT : DISPONIBLE_STAGE_IA ]",
    
    "footer.github": "GitHub",
    "footer.linkedin": "LinkedIn",
    
    // Index Page
    "index.hi": "Salut, je suis Sacha Morin.",
    "index.desc": "Formé à <strong>42 Paris</strong>. Je construis des systèmes intelligents à l'intersection de l'IA et de l'ingénierie bas niveau. Je saisis rapidement les paradigmes complexes, déploie sous pression et gagne des hackathons. Recherche active d'un stage IA/ML de 6 mois.",
    "index.dl_cv": "[0] Mon_CV.pdf",
    "index.view_port": "[1] Voir_Portfolio",
    "index.highlights": "Faits Marquants",
    
    // Portfolio Data
    "port.ad_super": "1ère Place — Hackathon Gemini 3 Paris",
    "port.ad_super.meta": "2026 // Google DeepMind",
    "port.ad_super.desc": "Ad-SuperSense : Pipeline IA d'injection publicitaire intelligente sur YouTube. 50 000$ de crédits API Gemini remportés + one-on-one avec les fondateurs Google AIFF. Construit avec FastAPI et indexation multimodale Gemini. <a href=\"https://www.linkedin.com/posts/42paris_42paris-42beyondthecode-activity-7441881588356833280-Qgoc?utm_source=share&utm_medium=member_ios&rcm=ACoAAEtjeTgB0-I0K8rfNmNIM151WpyCHImYY3g\" target=\"_blank\" style=\"text-decoration:underline; font-weight:600;\">Mis en avant par 42 Paris</a>.",
    
    "port.mistral": "Top 7 Mondial — Hackathon Mistral AI",
    "port.mistral.meta": "2026 // Mistral",
    "port.mistral.desc": "Vibe AR : Assistant code AR contrôlé vocalement tournant dans le Meta Quest 3. Construit avec Mistral Large 3, Voxtral, et Three.js/WebXR. Finaliste mondial parmi +100 équipes.",
    
    "port.mcp": "Hackathon Mistral AI × MCP",
    "port.mcp.meta": "2025 // Protocol MCP",
    "port.mcp.desc": "Quiz Game MCP : Jeu de quiz multijoueur temps réel avec questions générées à la volée. Serveur MCP permettant à des assistants IA autonomes de jouer via API sécurisée.",
    
    "index.stack": "Technologies",
    "index.philosophy": "Philosophie & Centres d'Intérêt",
    
    "phil.problem.title": "Algorithms & Résolution Complexe",
    "phil.problem.desc": "J'adore me casser le crâne sur des algorithmes pointus et les détails des systèmes bas niveau. Aucune boîte noire, tout pour la compréhension pure de la mécanique interne.",
    
    "phil.learning.title": "Apprentissage Continu",
    "phil.learning.desc": "Ma motivation principale est l'apprentissage de nouveaux paradigmes. Donnez-moi n'importe quelle nouvelle techno ou langage, je l'apprendrai rapidement.",
    
    "phil.euro.title": "Souveraineté Technologique Européenne",
    "phil.euro.desc": "Profondément engagé dans l'écosystème IA européen et français. Nous avons les talents pour rivaliser mondialement, et je veux être en première ligne sur l'infrastructure.",
    
    "comp.ai.h3": "IA & LLM — Expertise Principale",
    "comp.ai.p": "Création de systèmes intelligents, pipelines et agents de bout en bout.",
    "comp.cloud.h3": "Cloud & DevOps",
    "comp.cloud.p": "Déploiement, mise à l'échelle et maintenance d'infrastructures.",
    "comp.sys.h3": "Systèmes Bas Niveau — Socle 42",
    "comp.sys.p": "Gestion de mémoire, réseau et appels système.",
    "comp.web.h3": "Web & Full-Stack",
    "comp.soft.h3": "Compétences Humaines (Soft Skills)",
    "comp.soft1.t": "Leadership & Exécution",
    "comp.soft1.p": "Gestion d'une association de +2000 membres. Construction et fédération d'une équipe de zéro. Capacité éprouvée à exécuter sous pression (48h) en hackathon.",
    "comp.soft2.t": "Apprentissage Rapide & Problem Solving",
    "comp.soft2.p": "Formé à l'apprentissage autonome à 42. Capable d'apprendre toute technologie en la construisant. Apte à décomposer des architectures complexes sans assistance.",
    "comp.soft3.t": "International & Négociation",
    "comp.soft3.p": "Anglais courant, participation à des hackathons sur 4 continents. Négociation de partenariats et échanges avec des acteurs tech majeurs (Algorand, Solana, Ledger).",
    "comp.roles.h3": "Rôles ciblés",
    "comp.role1.t": "Ingénierie LLM",
    "comp.role1.p": "Fine-tuning, prompt engineering avancé, évaluation de modèles et pipelines d'inférence.",
    "comp.role2.t": "Agents IA & MCP",
    "comp.role2.p": "Systèmes multi-agents, orchestration, intégration Model Context Protocol, workflows orientés agents.",
    "comp.role3.t": "RAG & Bases de connaissance",
    "comp.role3.p": "Génération augmentée par la recherche, bases vectorielles, systèmes de recherche sémantique.",

    // Parcours Page
    "parc.title": "Parcours",
    "parc.subtitle": "Éducation · Expérience · Engagements",
    "parc.exp.h3": "Expérience & Leadership",
    "parc.exp1.t": "Co-Président — 42Blockchain",
    "parc.exp1.m": "Jan 2024 – 2025 // Paris, France",
    "parc.exp1.p": "Relance d'une association étudiante abandonnée pour en faire la plus grande association blockchain étudiante au monde (2 063 membres dans 30 pays). Partenariats avec Algorand, Solana, et Ledger. Envoi d'équipes à l'étranger (Bangkok, Singapour, Bruxelles, Berlin).",
    "parc.exp2.t": "Conseiller Ressources Humaines",
    "parc.exp2.m": "2022 - 2024 // Pôle Emploi - France Travail",
    "parc.exp2.p": "Analyse de logiques organisationnelles complexes et conseil en structuration des recrutements.",
    "parc.exp3.t": "Réceptionniste d'Hôtel",
    "parc.exp3.m": "Sept – Déc 2022 // Londres, RU",
    "parc.exp3.p": "Opérations front-desk en environnement 100% anglophone. Immersion totale garantissant un anglais d'affaires très fluide.",
    "parc.cert.h3": "Certifications",
    "parc.cert1.t": "AWS Solutions Architect — Associate",
    "parc.cert1.m": "En cours",
    "parc.cert1.p": "Architecture Cloud, Infrastructure as Code, haute disponibilité et sécurité AWS. (EC2, S3, Lambda, VPC, IAM, CloudFormation).",
    "parc.cert2.t": "AWS AI Practitioner",
    "parc.cert2.m": "En cours",
    "parc.cert2.p": "Pipelines de Machine Learning, inférence de modèles et déploiement via AWS Bedrock, SageMaker, Rekognition.",
    "parc.cert3.t": "Alyra — Programmation Rust",
    "parc.cert3.m": "Validé en 2024",
    "parc.cert3.p": "Certification Rust appliquée aux systèmes de bas niveau et à la blockchain (Ownership, emprunts, cycles de vie).",
    "parc.edu.h3": "Éducation",
    "parc.edu1.t": "42 Paris — Ingénierie Logicielle & IA",
    "parc.edu1.m": "Nov 2023 – Présent // Paris, France",
    "parc.edu1.tag": "Titre RNCP Niveau 7 (IA / Algo) en cours (Éq. Master)",
    "parc.edu1.p": "Cursus peer-to-peer intensif. Systèmes bas niveau en C (mémoire, process, sockets), C++ (serveurs HTTP from scratch), multi-threading et administration Linux/Docker avancée.",
    "parc.edu2.t": "EF Education First — Langues & Finance",
    "parc.edu2.m": "Jan – Jun 2023 // San Diego, CA",
    "parc.edu2.p": "Diplôme d'anglais approfondi avec modules universitaires en finance. 6 mois d'immersion totale sur un campus américain.",
    "parc.edu3.t": "Baccalauréat Général",
    "parc.edu3.m": "2022 // France",
    "parc.edu3.p": "Solide socle scientifique — Spécialités Physique, Chimie, SVT et Mathématiques Expertes.",
    "parc.lang.h3": "Langues parlées",
    "parc.lang1": "Français (Natif)",
    "parc.lang2": "Anglais (Bilingue/Pro)",
    
    // Portfolio Subpage
    "portpage.h1": "Portfolio",
    "portpage.h2": "Projets construits sous pression des Hackathons & de l'école",
    "portpage.ai": "Hackathons IA & Modèles",
    "portpage.cloud": "Cloud & Infrastructure",
    "portpage.sys": "Infrastructures & Bas Niveau",
    "portpage.web3": "Hackathons Web3",

    "cloud.portfolio.title": "sachamorin.fr — Déploiement Serverless AWS",
    "cloud.portfolio.meta": "2026 // AWS · Terraform · OVH",
    "cloud.portfolio.desc": "Déploiement AWS production-grade de ce portfolio. Architecture serverless : S3 statique derrière CloudFront CDN, compteur de visites Lambda + API Gateway + DynamoDB — le tout provisionné par Terraform IaC. Domaine sachamorin.fr via OVH Cloud avec certificat SSL ACM et DNS Route 53. AWS Budgets pour le monitoring FinOps.",
    
    "sys.inc.title": "Inception",
    "sys.inc.meta": "Administration Système / Docker",
    "sys.inc.desc": "Infrastructure Docker de production from scratch. Setup WordPress servi via Nginx (TLS), backend MariaDB, cache Redis. Construit sans images pré-faites (alpine pur).",
    
    "sys.irc.title": "ft_irc",
    "sys.irc.meta": "C++ / Réseaux Socket",
    "sys.irc.desc": "Serveur IRC respectant la stricte RFC en C++. I/O non bloquants avec poll(), gestion complète des channels et privilèges opérateurs.",
    
    "sys.trans.title": "ft_transcendence",
    "sys.trans.meta": "Full-Stack / TypeScript",
    "sys.trans.desc": "Jeu Pong online temps réel avec WebSockets, authentification OAuth2, matchmaking et micro-services Docker interconnectés.",
    
    "sys.mini.title": "Minishell",
    "sys.mini.meta": "C / Mécaniques OS Unix",
    "sys.mini.desc": "Shell Unix refait de zéro. Traitement AST, Lexer/parser exhaustif, signaux POSIX, pipes multithread, et redirections fd.",
    
    "web3.ape.title": "APE ID",
    "web3.ape.meta": "EthGlobal Bangkok 2024 // +20 000$ Total",
    "web3.ape.desc": "Passeport Web3 liant des Subdomains ENS à des bracelets NFC cryptés pour authentification Event on-chain.",
    
    "web3.algo.title": "Algorand ASA Minter",
    "web3.algo.meta": "Blockspace Hackathon // 1ère Place",
    "web3.algo.desc": "Interface décentralisée pour minter des ASAs (Algorand Standard Assets) via SDK Python Flask et UI Svelte."
  }
};

// ── LOGIC STATE ── //
let currentLang = localStorage.getItem('site_lang') || 'fr'; // User prefers FR starting point maybe? Or EN standard. Let's do FR since he's french. Actually, user speaks French. Let's start with EN since it's global tech standard, wait the prompt said "add button fr when u click u have alll the website in franch and une can click and u have english". Let's default to EN.
if (!localStorage.getItem('site_lang')) {
    // Check if browser prefers FR
    if (navigator.language.startsWith('fr')) {
        currentLang = 'fr';
    } else {
        currentLang = 'en';
    }
}
let currentTheme = localStorage.getItem('site_theme') || 'light';

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  updateToggles();
});

// ── THEME TOGGLE ── //
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('site_theme', currentTheme);
  applyTheme(currentTheme);
  updateToggles();
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

// ── LANG TOGGLE ── //
function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('site_lang', currentLang);
  applyLang(currentLang);
  updateToggles();
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
        // If it's the download cv link, we want to preserve the href if we had separate EN/FR cvs. But here it's text.
        el.innerHTML = translations[lang][key];
    }
  });
}

const svgSun = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>`;
const svgMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>`;

function updateToggles() {
  const themeBtn = document.getElementById('theme-toggle');
  const langBtn = document.getElementById('lang-toggle');
  
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'light' ? svgMoon : svgSun;
  }
  
  if (langBtn) {
    langBtn.innerHTML = currentLang.toUpperCase();
  }
}

// Global Nav
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
