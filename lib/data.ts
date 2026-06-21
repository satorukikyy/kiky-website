export const personalInfo = {
  name: 'Rizky Aditya',
  nickname: 'Aditya',
  title: 'GRC Consultant · Penetration Tester · Security Engineer',
  company: 'Whitesec ID',
  email: 'rizky@nexorasec.asia',
  whatsapp: '+62 878 8986 7060',
  whatsappNumber: '6287889867060',
  bio: "I'm Rizky Aditya, a cybersecurity professional based in Indonesia with experience across GRC consulting, penetration testing, and security operations. Currently at Whitesec ID, delivering 24+ engagements spanning ISO 27001/27701/42001 implementation, web/mobile VAPT, SOC monitoring, and incident management.",
  shortBio: "GRC Consultant, Penetration Tester & Security Engineer at Whitesec ID — ISO 27001/27701/42001 Lead Auditor.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/onerrorkx/',
    github: 'https://github.com/satorukikyy',
    instagram: 'https://www.instagram.com/kxs3c/',
    twitter: 'https://x.com/kxgapapa',
  },
}

export type ExperienceEntry = {
  role: string
  company: string
  location: string
  startYear: number
  endYear: number | null
  description: string
  highlights?: string[]
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'IT GRC Consultant & Penetration Tester',
    company: 'Whitesec ID (PT Topi Putih Siberindo)',
    location: 'Indonesia',
    startYear: 2024,
    endYear: null,
    description:
      'Helping organizations strengthen cybersecurity posture through governance, risk management, compliance initiatives, and technical security assessments. Building audit-ready security programs while validating controls through practical testing.',
    highlights: [
      'Delivered 24+ security engagements across GRC and VAPT disciplines spanning technology, fintech, healthcare, and critical infrastructure sectors',
      'Lead Auditor certified in ISO/IEC 27001:2022, ISO/IEC 27701, and ISO/IEC 42001 — leading gap analysis, risk assessment, annex A control mapping, SoA development, and evidence preparation through initial certification and surveillance audit cycles',
      'Conducted web application, mobile, and API penetration testing following OWASP Testing Guide and PTES methodology — delivering CVSS-rated technical reports with reproduction steps and remediation guidance',
      'Developed ISMS documentation suite — risk registers, risk treatment plans, SoA, security policies, procedures, and DPIAs — aligned to ISO/IEC 27001:2022 annex A controls and UU PDP compliance requirements',
      'Built GRC One Dashboard, an internal compliance management application consolidating control tracking across ISO/IEC 27001, ISO/IEC 27701, SOC Type 2, Essential Eight, and UU PDP frameworks into a single unified view',
      'Supported clients through full ISO 27001 lifecycle — from initial scoping and gap analysis, through risk treatment and control implementation, to certification audit readiness and post-certification surveillance',
    ],
    tags: ['ISO/IEC 27001:2022', 'ISO/IEC 27701', 'GRC', 'VAPT', 'Risk Assessment', 'Internal Audit', 'OWASP', 'UU PDP'],
  },
  {
    role: 'Security Engineer',
    company: 'Defenxor (PT Defender Nusa Semesta)',
    location: 'Indonesia',
    startYear: 2023,
    endYear: 2024,
    description:
      'Delivered security operations support across enterprise client environments — deploying and tuning SIEM infrastructure, developing detection capabilities, and monitoring for threats across highly regulated industries including banking, healthcare, government, and critical infrastructure.',
    highlights: [
      'Deployed and configured Wazuh SIEM integrated with Elastic Stack (ELK) for multiple enterprise client environments, establishing centralized log ingestion pipelines, index management, and real-time event correlation workflows',
      'Developed custom threat detection rules and correlation alerts covering Linux and Windows endpoint telemetry — tuned to client-specific environments to reduce false positive rates and improve actionable signal quality',
      'Operated SOC monitoring functions for 7+ organizations across banking, healthcare, government, and critical infrastructure sectors — including PT Bank Hibank Indonesia, PT Bank Saqu Indonesia, PT Kalbe Farma, PT Prodia Widyahusada, PT Jakarta International Container Terminal, KPK, and PT Asuransi Jiwa Sequis Life',
      'Performed continuous log analysis and security alert triage, classifying events by severity, correlating indicators across data sources, and escalating confirmed threats with documented findings and containment recommendations',
      'Coordinated incident management and response activities for PT Bank Resona Perdania — conducting root cause analysis, reconstructing attack timelines, and producing post-incident reports aligned to client SLA requirements',
      'Contributed to internal tooling development for incident tracking and event correlation workflows, improving SOC team operational efficiency and response consistency across concurrent client engagements',
    ],
    tags: ['Wazuh', 'ELK Stack', 'SIEM', 'SOC', 'Threat Detection', 'Incident Response', 'Log Analysis', 'Linux'],
  },
  {
    role: 'IT Support Intern',
    company: 'Faculty of Mathematics and Natural Sciences, University of Indonesia',
    location: 'Indonesia',
    startYear: 2022,
    endYear: 2022,
    description:
      'Provided IT operations support for the computer laboratory facilities at FMIPA Universitas Indonesia — managing endpoint infrastructure, network deployment, and asset administration in a high-usage academic environment.',
    highlights: [
      'Administered Windows endpoint lifecycle and Microsoft 365 user accounts across laboratory workstations, handling provisioning, configuration, software deployment, and decommissioning',
      'Assisted in structured cabling installation and network infrastructure deployment, including switch configuration, port assignment, and connectivity verification across laboratory segments',
      'Maintained IT asset inventory and technical documentation — tracking hardware status, software licensing, and operational procedures to support laboratory continuity and audit readiness',
    ],
    tags: ['Windows', 'Microsoft 365', 'Network Infrastructure', 'IT Support', 'Asset Management'],
  },
]

export type EducationEntry = {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
  description?: string
  achievement?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Telkom University Bandung',
    degree: "Bachelor's Degree",
    field: 'Teknik Informatika (Informatics Engineering)',
    startYear: 2025,
    endYear: null,
    description:
      'Focused on offensive security, governance, and emerging technology — covering penetration testing methodology, GRC frameworks, DevSecOps practices, and AI security.',
  },
  {
    institution: 'SMK Harapan Bangsa',
    degree: 'High School Diploma',
    field: 'Teknik Komputer & Jaringan (Computer & Networking)',
    startYear: 2020,
    endYear: 2023,
    description:
      'Grounded in computer networking fundamentals — routing, switching, network infrastructure, and hands-on lab work with Cisco and Mikrotik equipment.',
    achievement: '🥇 1st Place — Mikrotik Network Competition (50+ participants)',
  },
]

export type Certification = {
  name: string
  issuer: string
  category: 'iso' | 'security' | 'cloud'
  featured?: boolean
}

export const certifications: Certification[] = [
  // ISO/IEC Management Systems — featured on homepage
  { name: 'ISO 27001:2022 Lead Auditor',  issuer: 'Mastermind Assurance', category: 'iso',      featured: true },
  { name: 'ISO 27701:2025 Lead Auditor',  issuer: 'Mastermind Assurance', category: 'iso',      featured: true },
  { name: 'ISO 42001:2023 Lead Auditor',  issuer: 'Mastermind Assurance', category: 'iso',      featured: true },
  // Security & Professional
  { name: 'Certified in Cybersecurity',   issuer: 'ISC2',                 category: 'security', featured: true },
  { name: 'Student Summit 2025',          issuer: 'ISACA',                category: 'security' },
  { name: 'Ethical Hacker',               issuer: 'Cisco',                category: 'security' },
  { name: 'Bug Bounty Masterclass',       issuer: 'Wiz',                  category: 'security' },
  { name: 'OWASP Top 10 2025',            issuer: 'Snyk',                 category: 'security' },
  // Cloud & Technical
  { name: 'Cloud Technical Essentials',                    issuer: 'AWS',       category: 'cloud' },
  { name: 'Cybersecurity Professional',                    issuer: 'Google',    category: 'cloud' },
  { name: 'Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', category: 'cloud' },
]

export type Service = {
  id: string
  title: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    id: 'vapt',
    title: 'Vulnerability Assessment & Penetration Testing',
    description:
      'Comprehensive security testing of web and mobile applications to identify vulnerabilities before attackers do. Deliverables include a detailed report with findings, risk ratings, and remediation guidance.',
    items: [
      'Web Application Penetration Testing',
      'Mobile Application Penetration Testing',
      'API Security Testing',
      'Vulnerability Assessment & Reporting',
    ],
  },
  {
    id: 'grc',
    title: 'GRC Consulting & Compliance',
    description:
      'End-to-end information security governance support — from assessing your current posture to achieving and maintaining compliance with ISO/IEC standards and regulatory requirements.',
    items: [
      'ISO/IEC 27001 / 27701 / 42001 Implementation',
      'Gap Analysis & Risk Assessment',
      'Security Policy & SoA Development',
      'Internal Audit & Certification Support',
    ],
  },
  {
    id: 'seceng',
    title: 'Security Operations & Blue Team',
    description:
      'Hands-on security operations support — deploying and tuning detection capabilities, monitoring security events, and managing incidents to reduce dwell time and improve response posture.',
    items: [
      'SIEM Deployment & Tuning (Wazuh / ELK)',
      'Threat Detection Rule Development',
      'SOC Monitoring & Alert Triage',
      'Incident Management & Response',
    ],
  },
  {
    id: 'bugbounty',
    title: 'Bug Bounty Hunting',
    description:
      'Independent vulnerability research on public bug bounty programs. Focused on web application logic flaws, authentication bypasses, and high-impact business-logic vulnerabilities.',
    items: [
      'Web Application Vulnerability Research',
      'Business Logic & Auth Bypass Testing',
      'Responsible Disclosure',
      'Report Writing & PoC Development',
    ],
  },
]

export type GRCClient = {
  name: string
  year: number
  logo?: string
}

export type GRCCategory = {
  id: string
  label: string
  shortLabel: string
  clients: GRCClient[]
}

export const grcCategories: GRCCategory[] = [
  {
    id: 'implementation',
    label: 'ISO/IEC 27001 Implementation & ISMS Development',
    shortLabel: 'ISO 27001 Implementation',
    clients: [
      { name: 'PT Pallav Kredit Makmur', year: 2024 },
      { name: 'PT Navios Evolusi Solusindo', year: 2025 },
      { name: 'PT Covena Teknologi Global', year: 2025 },
      { name: 'PT Omnia Teknologi Indonesia', year: 2026 },
      { name: 'PT Prima Sistem Informasi', year: 2026 },
      { name: 'PT Arta MediaTek Transformasi', year: 2026 },
      { name: 'PT Inovasi Digital Untuk Transformasi', year: 2026 },
      { name: 'PT Mahardika Teknotama Integrasi', year: 2026 },
      { name: 'PT Berlian Sistem Informasi', year: 2026 },
    ],
  },
  {
    id: 'surveillance',
    label: 'Surveillance Audit & Compliance Review',
    shortLabel: 'Surveillance Audit',
    clients: [
      { name: 'PT Autopedia Sukses Lestari', year: 2025 },
      { name: 'PT JBA Indonesia', year: 2025 },
      { name: 'PT Manpro Teknologi Indonesia', year: 2025 },
      { name: 'PT Starone Mitra Telekomunikasi (BDx Data Centers)', year: 2026 },
    ],
  },
  {
    id: 'assessment',
    label: 'Security Compliance Assessment',
    shortLabel: 'Compliance Assessment',
    clients: [
      { name: 'PT Solusi Dwi Satya', year: 2026 },
    ],
  },
  {
    id: 'security-awareness',
    label: 'Security Awareness Program',
    shortLabel: 'Security Awareness',
    clients: [
      { name: 'PT Kilang Pertama Internasional', year: 2024 },
    ],
  },
]

export type SecEngCategory = {
  id: string
  label: string
  shortLabel: string
  clients: GRCClient[]
}

export const secEngCategories: SecEngCategory[] = [
  {
    id: 'soc',
    label: 'Security Operations Center (SOC) Monitoring',
    shortLabel: 'SOC Monitoring',
    clients: [
      { name: 'PT Prodia Widyahusada', year: 2023 },
      { name: 'PT Kalbe Farma', year: 2023 },
      { name: 'PT Bank Hibank Indonesia', year: 2023 },
      { name: 'PT Bank Saqu Indonesia', year: 2023 },
      { name: 'PT Jakarta International Container Terminal', year: 2023 },
      { name: 'KPK (Komisi Pemberantasan Korupsi)', year: 2023 },
      { name: 'PT Asuransi Jiwa Sequis Life', year: 2023 },
      { name: 'PT HM Sampoerna Tbk', year: 2023 },
    ],
  },
  {
    id: 'incident',
    label: 'Incident Management & Response',
    shortLabel: 'Incident Management',
    clients: [
      { name: 'PT Bank Resona Perdania', year: 2024 },
    ],
  },
]

export type WritingPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  draft?: boolean
}

export const writings: WritingPost[] = [
  {
    slug: 'the-computer-that-changed-everything',
    title: '2012 — The Computer That Changed Everything',
    date: '2012-02',
    excerpt: 'Everything started in 2012, when I was just seven years old and a single click on Counter-Strike 1.6 opened a door to a world I never expected.',
    tags: ['personal', 'story', 'beginnings'],
  },
  {
    slug: 'more-than-just-games',
    title: '2014 — More Than Just Games',
    date: '2014-06',
    excerpt: 'A couple years later I\'d become the "computer kid" at school. My first desktop was gone, I had a new laptop, and somehow I was already teaching myself things without even realizing it.',
    tags: ['personal', 'story', 'childhood'],
  },
  {
    slug: 'hello-world',
    title: '2016 — Hello, World.',
    date: '2016-02',
    excerpt: 'The year I typed my first HTML tags, discovered cracked software from Bagas31, and somehow survived it all without a single malware infection.',
    tags: ['personal', 'story', 'coding'],
  },
  {
    slug: 'learning-beyond-school',
    title: '2018 — Learning Beyond School',
    date: '2018-09',
    excerpt: 'Dota 2 taught me English, YouTube gave me my first 1,000 subscribers, and junior high gave me some of the best memories of my life — right before the world stopped in 2020.',
    tags: ['personal', 'story', 'gaming'],
  },
]

export type VAPTClient = {
  name: string
  year: number
  logo?: string
}

export const vaptClients: VAPTClient[] = [
  { name: 'PT Manpro Teknologi Indonesia', year: 2025 },
  { name: 'PT Prima Sistem Informasi', year: 2026 },
  { name: 'PT Good Doctor Technology Indonesia', year: 2026 },
  { name: 'PT Prime Analytics Indonesia', year: 2026 },
  { name: 'PT Inovasi Digital Untuk Transformasi', year: 2026 },
  { name: 'PT Arta MediaTek Transformasi', year: 2026 },
  { name: 'PT Pupuk Iskandar Muda', year: 2026 },
  { name: 'PT Mahardika Teknotama Integrasi', year: 2026 },
  { name: 'PT Asuransi Jiwa Reliance Indonesia', year: 2026 },
  { name: 'PT Hutama Karya Infrastruktur', year: 2026 },
  { name: 'PT Inspiro', year: 2026 },
  { name: 'PT Lestari Banten Energy', year: 2026 },
]

