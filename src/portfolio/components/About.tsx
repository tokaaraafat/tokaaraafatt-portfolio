import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="container-page grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <h2 id="about-heading" className="heading-display text-4xl sm:text-5xl">
          About me
        </h2>
        <ScrollReveal>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I studied software engineering and spent a year as a developer before moving into data
              analysis. That background makes me a careful analyst: I test before I trust, validate data
              before I report on it, and ask what the business needs before I build anything.
            </p>
            <p>
              My projects cover Excel KPI dashboards, Power Query data modelling and a Python pipeline,
              working with about 10,000 order records, return tracking and multi-year trends. I&apos;m
              building toward data science through the IBM Data Scientist track.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
