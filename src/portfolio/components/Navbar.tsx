import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { cn, scrollToId } from '../lib/utils'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
] as const

function getInitialTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [themeReady, setThemeReady] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    setTheme(getInitialTheme())
    setThemeReady(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)
    if (!('IntersectionObserver' in window) || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!themeReady) return
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme, themeReady])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        'border-b border-border bg-bg/95 backdrop-blur-md',
        scrolled && 'shadow-sm',
      )}
    >
      <nav className="section-pad container-page flex h-16 items-center justify-between sm:h-[4.5rem]" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-ink/80"
          onClick={(e) => {
            e.preventDefault()
            goTo('home')
          }}
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-sage after:transition-transform hover:text-ink hover:after:scale-x-100',
                  active === link.id ? 'text-ink after:scale-x-100' : 'text-muted after:scale-x-0',
                )}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-ink transition hover:border-sage/60"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-on-ink transition hover:bg-ink/90"
            onClick={(e) => {
              e.preventDefault()
              goTo('contact')
            }}
          >
            Let&apos;s Connect
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-ink"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-border bg-bg lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="section-pad container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={cn('block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-sand/60', active === link.id && 'bg-sand/60')}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              className="block rounded-lg bg-ink px-3 py-3 text-center text-base font-semibold text-on-ink"
              onClick={(e) => {
                e.preventDefault()
                goTo('contact')
              }}
            >
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
