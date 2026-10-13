type SectionHeadingProps = {
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      <h2 id={id} className="heading-display text-4xl sm:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p> : null}
    </div>
  )
}
