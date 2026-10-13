import { educationItems } from '../config/experience'
import { ScrollReveal } from './ScrollReveal'

const statusLabel = {
  completed: 'Completed',
  'in-progress': 'In progress',
  coursework: 'Coursework',
} as const

export function Education() {
  return (
    <section id="education" className="section-pad py-20 sm:py-28" aria-labelledby="education-heading">
      <div className="container-page">
        <ScrollReveal>
          <h2 id="education-heading" className="heading-display mb-10 text-4xl sm:text-5xl">
            Education and training
          </h2>
        </ScrollReveal>
        <ol className="max-w-3xl">
          {educationItems.map((item) => (
            <li key={item.id} className="relative border-l-2 border-sage-soft pb-8 pl-6 last:pb-0">
              <span className="absolute top-2 -left-[7px] size-3 rounded-full bg-gold" aria-hidden />
              <p className="font-bold text-sage">
                {item.year ? `${item.year}, ` : ''}
                {statusLabel[item.status].toLowerCase()}
              </p>
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mb-2 text-muted">{item.institution}</p>
              <p className="text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
