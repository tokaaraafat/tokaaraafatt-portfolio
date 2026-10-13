import { ArrowUpRight, Link2Off } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project, ProjectLink, ProjectMetric } from '../config/projects'
import { cn } from '../lib/utils'

type ProjectCardProps = {
  project: Project
  /** Puts the screenshot panel on the left on wide screens. */
  reversed?: boolean
}

function ProjectAction({ link }: { link: ProjectLink }) {
  if (!link.url) {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-muted" title="URL pending">
        <Link2Off size={14} aria-hidden />
        {link.label} (pending)
      </span>
    )
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1 font-bold text-ink transition hover:text-sage"
    >
      <span className="border-b-2 border-gold pb-px group-hover/link:border-sage">{link.label}</span>
      <ArrowUpRight
        size={15}
        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        aria-hidden
      />
    </a>
  )
}

function Bar({ metric }: { metric: ProjectMetric }) {
  const reduceMotion = useReducedMotion()
  const pct = metric.pct ?? 0
  const fill = cn('h-full', metric.accent ? 'bg-gold-soft' : 'bg-sage-soft')

  return (
    <div className="my-3">
      <div className="mb-1 flex justify-between text-[0.95rem]">
        <span>{metric.label}</span>
        <span className="font-semibold">{metric.display}</span>
      </div>
      <div className="h-3 bg-white/15">
        {reduceMotion ? (
          <div className={fill} style={{ width: `${pct}%` }} />
        ) : (
          <motion.div
            className={fill}
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          />
        )}
      </div>
    </div>
  )
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const hasBars = project.metrics.some((m) => m.pct !== undefined)

  return (
    <article className="grid items-start gap-8 border-t border-border py-12 md:grid-cols-2 md:gap-14 md:py-16">
      <div className={cn(reversed && 'md:order-2')}>
        {project.period ? <p className="mb-2 font-bold text-sage">{project.period}</p> : null}
        <h3 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-[2.1rem]">
          {project.title}
        </h3>
        <p className="mt-4 font-display text-xl text-ink italic">{project.question}</p>

        <dl className="mt-5">
          <dt className="font-bold">Approach</dt>
          <dd className="text-muted">{project.description}</dd>
          {project.outcome ? (
            <>
              <dt className="mt-4 font-bold">Finding</dt>
              <dd className="text-muted">{project.outcome}</dd>
            </>
          ) : null}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-sm border border-sage-soft px-2.5 py-0.5 text-sm font-medium">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-6">
          <ProjectAction link={project.viewProject} />
          {project.viewCode ? <ProjectAction link={project.viewCode} /> : null}
        </div>
      </div>

      <div className={cn('relative isolate', reversed && 'md:order-1')}>
        {project.thumbnail ? (
          <div className="overflow-hidden border border-border bg-card">
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              width={project.thumbnailSize.width}
              height={project.thumbnailSize.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        ) : null}

        <div className="relative mt-4 bg-forest p-5 text-[#f5f1e6]">
          <h4 className="mb-3 font-semibold text-[#d4dac6]">{project.metricsTitle}</h4>
          {hasBars ? (
            project.metrics.map((m) => <Bar key={m.label} metric={m} />)
          ) : (
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-2xl leading-none font-semibold text-gold-soft">{m.display}</dd>
                  <dt className="mt-1 text-sm text-[#d4dac6]">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-3 text-sm text-[#c3cbb5]">Figures from the project write-up.</p>
        </div>
      </div>
    </article>
  )
}
