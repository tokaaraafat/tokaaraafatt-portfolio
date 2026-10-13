export type ExperienceItem = {
  id: string
  role: string
  organization: string
  /** Employment or activity dates. Empty string hides the date badge. */
  dates: string
  /** Short summary shown when there are no highlights. */
  description: string | null
  /** Bullet points shown on the card. */
  highlights?: string[]
  type: 'professional' | 'activity'
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'compusharaf',
    role: 'Developer',
    organization: 'CompuSharaf, Cairo, Egypt',
    dates: 'Oct 2024 – Sep 2025',
    description: null,
    highlights: [
      'Validated data accuracy through systematic testing and reporting, identified inconsistencies, and documented findings in structured test reports.',
      'Gathered data and business requirements from cross-functional teams and translated them into technical solutions, from requirements through deployment and user acceptance testing.',
      'Analysed business and operational data to define reporting needs and system enhancements.',
    ],
    type: 'professional',
  },
  {
    id: 'almarasem',
    role: 'Network & Security Intern',
    organization: 'ALMARASEM, Cairo, Egypt',
    dates: 'Aug 2022',
    description: null,
    highlights: [
      'Monitored network systems and troubleshot connectivity issues, applying IP addressing, subnetting and routing fundamentals.',
    ],
    type: 'professional',
  },
]

export type EducationItem = {
  id: string
  title: string
  institution: string
  detail: string
  status: 'completed' | 'in-progress' | 'coursework'
  year?: string
}

export const educationItems: EducationItem[] = [
  {
    id: 'bsc',
    title: 'B.Sc. in Computer and Information Science',
    institution: 'Sadat Academy for Management Sciences, Cairo',
    detail:
      'Software Engineering specialization · GPA 3.31 (Very Good). Graduation project: Auto Aid, a Flutter/Firebase app matching users with nearby helpers via real-time location.',
    status: 'completed',
    year: '2020 – 2024',
  },
  {
    id: 'depi',
    title: 'Data Scientist Track by IBM',
    institution: 'Digital Egypt Pioneers Initiative (DEPI), MCIT',
    detail:
      'Professional training in data analysis and data science: Pandas, NumPy, Matplotlib and API-based data extraction, plus the IBM Data Science course on Coursera.',
    status: 'in-progress',
    year: 'Jul 2026 – Jan 2027 (expected)',
  },
]
