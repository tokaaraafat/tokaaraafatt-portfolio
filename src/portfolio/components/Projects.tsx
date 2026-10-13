import { ArrowUpRight } from 'lucide-react'
import { githubExploreUrl, projects } from '../config/projects'
import { ProjectCard } from './ProjectCard'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section-pad py-20 sm:py-28" aria-labelledby="projects-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Selected projects"
            subtitle="Practical projects covering data preparation, analysis and visualization. Each one starts with a question."
            id="projects-heading"
          />
        </ScrollReveal>

        {projects.map((project, index) => (
          <ScrollReveal key={project.id}>
            <ProjectCard project={project} reversed={index % 2 === 1} />
          </ScrollReveal>
        ))}

        <div className="border-t border-border pt-8">
          <a
            href={githubExploreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-bold text-ink transition hover:bg-ink hover:text-on-ink"
          >
            Explore more on GitHub
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
