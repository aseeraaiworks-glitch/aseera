import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import { contactChannels, navItems, site } from '@/lib/site'
import { CurrentYear } from './current-year'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-12 border-b border-paper/10 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark tone="light" className="h-7" />
            <p className="mt-4 text-sm text-paper/70">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">Location</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-paper/80">
              {site.location.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="mt-4 inline-block break-all text-sm text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline"
              >
                {channel.value}
              </a>
            ))}
          </div>
        </div>

        <div className="py-12 md:py-16">
          <Image
            src="/brand/aseera-go-beyond-white.png"
            alt="Aseera Go Beyond."
            width={1549}
            height={495}
            className="h-auto w-full max-w-xl opacity-80"
          />
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-paper/10 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> ASEERA. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex min-h-10 items-center gap-2 self-start text-paper/70 transition-colors hover:text-paper sm:self-auto"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
