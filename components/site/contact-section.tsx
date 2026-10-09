import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { contactChannels, site } from '@/lib/site'
import { SectionLabel } from './section-label'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionLabel index="04">Contact</SectionLabel>
            <h2
              id="contact-title"
              className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-forest sm:text-4xl md:text-5xl"
            >
              Connect With ASEERA
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              For inquiries, collaboration, or general information about ASEERA, please reach out through our official
              contact channels.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border lg:col-span-5 lg:col-start-8 lg:self-end">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex items-start gap-4 py-6 transition-colors"
              >
                <Mail className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="mt-1 block break-all text-lg font-medium text-forest underline-offset-4 group-hover:underline">
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-forest/40 transition-colors group-hover:text-forest"
                  aria-hidden="true"
                />
              </a>
            ))}

            <div className="flex items-start gap-4 py-6">
              <MapPin className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Location</p>
                <address className="mt-1 text-lg font-medium not-italic leading-snug text-forest">
                  {site.location.full}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
