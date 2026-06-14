export const personalInfo = {
  name: 'Rizky Aditya',
  nickname: 'Kiky',
  title: 'GRC Analyst & Security Researcher',
  company: 'Whitesec.id',
  email: 'rizky@nexorasec.asia',
  whatsapp: '+62 878 8986 7060',
  whatsappNumber: '6287889867060',
  bio: "I'm Rizky Aditya, a GRC Analyst & Security Researcher based in Indonesia with 2+ years of experience in information security governance and vulnerability assessment. Currently working at Whitesec.id, specializing in ISO 27001 & ISO 27701 implementation, internal auditing, and web/mobile penetration testing.",
  shortBio: "GRC Analyst & Security Researcher at Whitesec.id, specializing in ISO 27001/27701 governance and web/mobile penetration testing.",
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
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'GRC Analyst',
    company: 'Whitesec.id',
    location: 'Indonesia',
    startYear: 2024,
    endYear: null,
    description:
      'Leading ISO 27001 and ISO 27701 implementation projects for clients across various industries. Conducting gap analysis, policy & procedure writing, risk assessments, and internal audits. Also performing web application and mobile penetration testing for client security assessments.',
    tags: ['ISO 27001', 'ISO 27701', 'Gap Analysis', 'Internal Audit', 'Policy Writing', 'VAPT'],
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
  color: string
}

export const certifications: Certification[] = [
  {
    name: 'ISO 27001 Lead Auditor',
    issuer: 'International',
    color: 'brand-blue',
  },
  {
    name: 'ISO 27701 Lead Auditor',
    issuer: 'International',
    color: 'brand-purple',
  },
  {
    name: 'Certified Bug Bounty Masterclass',
    issuer: 'Wiz',
    color: 'brand-green',
  },
]

export type Service = {
  id: string
  title: string
  description: string
  items: string[]
  color: string
  accentColor: string
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
    color: 'brand-red',
    accentColor: '#E63946',
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
    color: 'brand-blue',
    accentColor: '#118AB2',
  },
]

export type Project = {
  id: string
  client: string
  scope: string
  year: number
  tags: string[]
  status: 'completed' | 'ongoing'
}

export const vaptProjects: Project[] = [
  {
    id: 'vapt-1',
    client: 'Client A (Confidential)',
    scope: 'Web Application Penetration Testing',
    year: 2025,
    tags: ['Web App', 'OWASP Top 10', 'API Security'],
    status: 'completed',
  },
  {
    id: 'vapt-2',
    client: 'Client B (Confidential)',
    scope: 'Mobile Application Penetration Testing',
    year: 2025,
    tags: ['Android', 'iOS', 'Mobile Security'],
    status: 'completed',
  },
]

export const grcProjects: Project[] = [
  {
    id: 'grc-1',
    client: 'Client C (Confidential)',
    scope: 'ISO 27001 Gap Analysis & Implementation',
    year: 2024,
    tags: ['ISO 27001', 'Gap Analysis', 'ISMS'],
    status: 'completed',
  },
  {
    id: 'grc-2',
    client: 'Client D (Confidential)',
    scope: 'ISO 27701 Privacy Implementation',
    year: 2025,
    tags: ['ISO 27701', 'Privacy', 'PIMS'],
    status: 'completed',
  },
]

export const marqueeItems = [
  'GRC Analyst',
  'Security Researcher',
  'ISO 27001 Lead Auditor',
  'ISO 27701 Lead Auditor',
  'Web App Pentester',
  'Mobile Pentester',
  'Bug Bounty Hunter',
]

export const skills = [
  { name: 'ISO 27001', color: 'brand-blue' },
  { name: 'ISO 27701', color: 'brand-purple' },
  { name: 'Gap Analysis', color: 'brand-blue' },
  { name: 'Internal Audit', color: 'brand-blue' },
  { name: 'Policy Writing', color: 'brand-green' },
  { name: 'Web App Pentest', color: 'brand-red' },
  { name: 'Mobile Pentest', color: 'brand-red' },
  { name: 'Bug Bounty', color: 'brand-yellow' },
  { name: 'Mikrotik / Networking', color: 'brand-green' },
  { name: 'Risk Assessment', color: 'brand-purple' },
]
