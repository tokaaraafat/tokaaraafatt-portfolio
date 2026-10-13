import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <main className="section-pad flex min-h-screen items-center justify-center bg-bg">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold tracking-wide text-sage uppercase">404</p>
        <h1 className="heading-display mt-3 text-3xl sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition hover:bg-ink/90"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
