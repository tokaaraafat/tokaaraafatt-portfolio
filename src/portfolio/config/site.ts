/**
 * Central site configuration.
 */
export const siteConfig = {
  name: 'Tokaa Raafat',
  title: 'Tokaa Raafat | Junior Data Analyst & Data Science Portfolio',
  role: 'Junior Data Analyst',
  tagline: 'Turning Data Into Meaningful Insights.',
  email: 'tokaraafat369@gmail.com' as string,
  social: {
    github: 'https://github.com/tokaaraafat',
    linkedin: 'https://www.linkedin.com/in/tokaaraafat/',
  },
  /**
   * Public CV download. Put the PDF in /public and set e.g. '/Tokaa_Raafat_CV.pdf'.
   * While null, no Download CV button is shown (so there is never a broken link).
   */
  cvUrl: '/Tokaa_Raafat_CV.pdf' as string | null,
  location: 'Cairo, Egypt',
} as const

export type SiteConfig = typeof siteConfig
