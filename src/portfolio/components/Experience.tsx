import { experienceItems } from '../config/experience'
import { ScrollReveal } from './ScrollReveal'

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-sand py-20 sm:py-28" aria-labelledby="experience-heading">
      <div className="container-page">
        <ScrollReveal>
          <h2 id="experience-heading" className="heading-display mb-10 text-4xl sm:text-5xl">
            Experience
          </h2>
        </ScrollReveal>
        <ol className="max-w-3xl">
          {experienceItems.map((item) => (
            <li key={item.id} className="relative border-l-2 border-sage-soft pb-8 pl-6 last:pb-0">
              <span className="absolute top-2 -left-[7px] size-3 rounded-full bg-gold" aria-hidden />
              {item.dates ? <p className="font-bold text-sage">{item.dates}</p> : null}
              <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
              <p className="mb-2 text-muted">{item.organization}</p>
              {item.highlights && item.highlights.length > 0 ? (
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : item.description ? (
                <p className="text-muted">{item.description}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
