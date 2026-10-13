import { skillGroups } from '../config/skills'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-sand py-20 sm:py-28" aria-labelledby="skills-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Tools and technologies"
            subtitle="Grouped by what I use them for."
            id="skills-heading"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className={`border-b border-border py-6 sm:pr-6 ${i > 0 ? 'lg:border-l lg:pl-6' : ''} lg:border-b-0`}
              >
                <h3 className="font-display text-lg font-semibold text-sage">{group.title}</h3>
                <ul className="mt-3 space-y-1 text-base" aria-label={group.title}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
