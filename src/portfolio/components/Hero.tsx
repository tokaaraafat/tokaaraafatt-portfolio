import { useReducedMotion, motion } from 'framer-motion'
import { siteConfig } from '../config/site'
import { scrollToId } from '../lib/utils'
import { HeroVisual } from './HeroVisual'

const facts = [
  { value: '1 year', label: 'professional experience as a developer' },
  { value: 'About 10,000', label: 'order lines modelled in Power Query' },
  { value: 'IBM track', label: 'Data Scientist, through DEPI' },
]

const btn =
  'inline-flex items-center border-2 border-gold-soft px-5 py-3 text-base font-bold transition hover:-translate-y-0.5'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: 'easeOut' as const, delay },
        }

  return (
    <section id="home" className="section-pad relative overflow-hidden bg-forest pt-28 text-[#f5f1e6] sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(620px circle at 72% 28%, rgba(140,156,122,.22), transparent 60%), radial-gradient(520px circle at 8% 95%, rgba(221,185,98,.1), transparent 60%)',
        }}
      />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            className="mb-6 border-l-[3px] border-gold-soft pl-3 font-medium text-[#d4dac6]"
            {...fade(0)}
          >
            {siteConfig.role}, growing into data science
          </motion.p>
          <motion.h1
            className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-[4.6rem]"
            {...fade(0.08)}
          >
            Turning data into <em className="font-normal text-gold-soft">meaningful</em> insights.
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg leading-relaxed text-[#dde2d0]" {...fade(0.16)}>
            I&apos;m Tokaa Raafat. I use Excel, Power Query and Python to explore data, improve its quality
            and explain what it means. I studied software engineering and worked a year as a developer
            before moving into analytics.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.24)}>
            <a
              href="#projects"
              className={`${btn} bg-gold-soft text-[#1e2a23] hover:bg-[#ebcb7c]`}
              onClick={(e) => {
                e.preventDefault()
                scrollToId('projects')
              }}
            >
              Explore my projects
            </a>
            <a
              href="#contact"
              className={`${btn} text-[#f5f1e6] hover:bg-white/10`}
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              Get in touch
            </a>
            {siteConfig.cvUrl ? (
              <a href={siteConfig.cvUrl} download className={`${btn} text-[#f5f1e6] hover:bg-white/10`}>
                Download CV
              </a>
            ) : null}
          </motion.div>
        </div>

        <motion.div {...fade(0.2)}>
          <HeroVisual />
        </motion.div>
      </div>

      <dl className="container-page relative mt-12 grid border-t border-white/20 sm:mt-16 md:grid-cols-3">
        {facts.map((fact, i) => (
          <div
            key={fact.value}
            className={`py-6 ${i > 0 ? 'border-t border-white/20 md:border-t-0 md:border-l md:pl-6' : 'md:pr-6'}`}
          >
            <dt className="font-display text-3xl font-semibold text-gold-soft">{fact.value}</dt>
            <dd className="mt-1 text-[0.95rem] text-[#d4dac6]">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
