export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Engineering Manager',
    company: 'ING',
    companyUrl: 'https://ing.com',
    location: 'Amsterdam, NL',
    start: '2020',
    end: 'Present',
    current: true,
    summary: 'Hands On Engineering Manager, carrying multiple hats',
    bullets: [
      '',
      '',
      '',
    ],
    badges: ['Java', ' ', ' '],
  },
  {
    role: 'Engineer / Engineering Manager | iDEAL Payments',
    company: 'ING',
    companyUrl: 'https://ing.com',
    location: 'Amsterdam, NL',
    start: '2012',
    end: '2020',
    summary: 'Hands on engineering manager.',
    bullets: [
      ' ',
      ' ',
    ],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'Dialogues Technology', company: 'ABN AMRO Fintech Incubator', start: '2009 - 2012', end: '2012' },
];

export const education: Education[] = [
  {
    degree: 'MSc',
    field: 'Cooperative Computing',
    school: 'Middlesex University | London',
    start: '1999',
    end: '2022  ',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'Platforms & Tools',
    skills: ['Azure', 'Oracle', 'Docker', 'AWS', 'Prometheus', 'Grafana', 'REST', 'Spring', 'Kafka',  'Linux'],
  },
  {
    title: 'Interests',
    skills: ['Leadership', 'Agile Processes', 'Reliability', 'Security'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'engineering manager',
  'reliability advocate',
  'engineer at heart',
  'innovator',
  'speaker',
];
