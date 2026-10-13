export type SkillGroup = {
  title: string
  skills: string[]
}

/** Skills listed on the CV only. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Data Analysis & ETL',
    skills: [
      'Excel',
      'Pivot Tables',
      'Power Query',
      'VLOOKUP',
      'SQL',
      'SQL Server',
      'Data Cleaning',
      'Data Validation',
      'KPI Tracking',
      'Trend Analysis',
    ],
  },
  {
    title: 'Visualization & Reporting',
    skills: ['Excel Dashboards', 'Slicers', 'Plotly', 'Matplotlib', 'PowerPoint'],
  },
  {
    title: 'Python',
    skills: [
      'Pandas',
      'NumPy',
      'BeautifulSoup',
      'REST APIs',
      'Web Scraping',
      'Streamlit',
      'Jupyter Notebook',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
]
