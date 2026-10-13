import { ArrowUp } from 'lucide-react'
import { siteConfig } from '../config/site'
import { scrollToId } from '../lib/utils'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-pad border-t border-panel-fg/20 bg-panel py-6 text-panel-fg/80">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          © {year} {siteConfig.name}, Cairo, Egypt
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 transition hover:text-gold-soft"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 transition hover:text-gold-soft"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={18} />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:text-gold-soft"
            onClick={() => scrollToId('home')}
          >
            Back to top
            <ArrowUp size={14} aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  )
}
