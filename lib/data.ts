export const personalInfo = {
  name: 'Rizky Aditya',
  nickname: 'Aditya',
  title: 'GRC Analyst & Security Researcher',
  company: 'Whitesec ID',
  email: 'rizky@nexorasec.asia',
  whatsapp: '+62 878 8986 7060',
  whatsappNumber: '6287889867060',
  bio: "I'm Rizky Aditya, a GRC Analyst & Security Researcher based in Indonesia with 2+ years of experience in information security governance and vulnerability assessment. Currently working at Whitesec ID, specializing in ISO 27001 & ISO 27701 implementation, internal auditing, and web/mobile penetration testing.",
  shortBio: "GRC Analyst & Security Researcher at Whitesec ID, specializing in ISO 27001/27701 governance and web/mobile penetration testing.",
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
      'Delivered 24+ security engagements across GRC and VAPT disciplines',
      'Lead Auditor certified in ISO/IEC 27001:2022, ISO/IEC 27701, and ISO/IEC 42001',
      'Conducted web application and mobile penetration testing across technology, finance, and healthcare sectors',
      'Developed ISMS documentation — risk registers, SoA, security policies — mapped to annex A and UU PDP',
      'Supported clients through ISO 27001 initial certification and surveillance audit cycles',
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
      'Worked on security monitoring and security operations initiatives, supporting the deployment and optimization of enterprise SIEM environments for client organizations.',
    highlights: [
      'Deployed and tuned Wazuh SIEM with ELK Stack for enterprise client environments',
      'Authored custom threat detection rules across Linux and Windows endpoint telemetry',
      'Performed log analysis and alert triage to support client SOC teams',
      'Contributed to internal tooling for incident response and event correlation workflows',
    ],
    tags: ['Wazuh', 'ELK Stack', 'SIEM', 'Security Monitoring', 'Linux', 'Threat Detection'],
  },
  {
    role: 'IT Support Intern',
    company: 'Faculty of Mathematics and Natural Sciences, University of Indonesia',
    location: 'Indonesia',
    startYear: 2022,
    endYear: 2022,
    description:
      'Supported endpoint management and infrastructure operations within the university laboratory environment.',
    highlights: [
      'Managed Windows and Microsoft 365 lifecycle across laboratory workstations',
      'Assisted in network deployment, cabling, and switch configuration',
      'Maintained IT asset inventory and operational documentation',
    ],
    tags: ['Windows', 'Microsoft 365', 'Network Deployment', 'IT Support'],
  },
]

export type EducationEntry = {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
  achievement?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Telkom University Bandung',
    degree: "Bachelor's Degree",
    field: 'Teknik Informatika (Informatics Engineering)',
    startYear: 2025,
    endYear: null,
  },
  {
    institution: 'SMK Harapan Bangsa',
    degree: 'High School Diploma',
    field: 'Teknik Komputer & Jaringan (Computer & Networking)',
    startYear: 2020,
    endYear: 2023,
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
  { name: 'Cloud Technical Essentials',   issuer: 'AWS',                  category: 'cloud' },
  { name: 'Cybersecurity Professional',   issuer: 'Google',               category: 'cloud' },
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
      'Vulnerability Assessment',
      'Security Review & Reporting',
    ],
  },
  {
    id: 'grc',
    title: 'Security Assessment & Compliance',
    description:
      'End-to-end information security governance support — from assessing your current posture to achieving and maintaining compliance with international standards.',
    items: [
      'Gap Analysis (ISO 27001 / ISO 27701)',
      'Policy & Procedure Writing',
      'Internal Audit',
      'Risk Assessment & Treatment',
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
]

