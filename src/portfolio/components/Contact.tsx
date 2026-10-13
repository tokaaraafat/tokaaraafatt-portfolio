import { siteConfig } from '../config/site'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  const email = siteConfig.email.trim()
  const items = [
    email ? { label: 'Email', value: email, href: `mailto:${email}`, external: false } : null,
    { label: 'LinkedIn', value: 'in/tokaaraafat', href: siteConfig.social.linkedin, external: true },
    { label: 'GitHub', value: 'tokaaraafat', href: siteConfig.social.github, external: true },
    siteConfig.cvUrl
      ? { label: 'CV (PDF)', value: 'Download', href: siteConfig.cvUrl, external: false, download: true }
      : null,
  ].filter((i): i is NonNullable<typeof i> => i !== null)

  return (
    <section id="contact" className="section-pad bg-panel py-20 text-panel-fg sm:py-28" aria-labelledby="contact-heading">
      <div className="container-page">
        <ScrollReveal>
          <h2 id="contact-heading" className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-xl text-lg text-panel-fg/80">
            I&apos;m interested in data-focused opportunities and in collaborating on meaningful projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-10 grid border-t border-panel-fg/25 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...('download' in item && item.download ? { download: true } : {})}
                className="border-b border-panel-fg/25 py-5 pr-4 transition-colors hover:text-gold-soft"
              >
                <span className="block text-sm text-panel-fg/70">{item.label}</span>
                <strong className="font-display text-xl font-semibold break-words">{item.value}</strong>
              </a>
            ))}
          </div>
          <p className="mt-6 text-panel-fg/70">{siteConfig.location}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
