import { skillGroups } from '../config/skills'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-sand/35 py-20 sm:py-24" aria-labelledby="skills-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading title="Tools & Technologies" id="skills-heading" />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                <h3 className="font-display text-lg font-bold text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-bg px-3 py-1.5 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
