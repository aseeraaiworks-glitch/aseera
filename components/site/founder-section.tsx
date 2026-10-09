import { site } from '@/lib/site'
import { SectionLabel } from './section-label'

export function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="scroll-mt-20 bg-forest text-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel index="02" tone="light" >
          Founder
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2
              id="founder-title"
              className="text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl md:text-5xl"
            >
              The Vision Behind ASEERA
            </h2>

            <div className="mt-10 border-t border-paper/15 pt-6">
              <p className="text-xl font-medium tracking-tight sm:text-2xl">{site.founder.name}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">{site.founder.role}</p>
            </div>
          </div>

          <blockquote className="lg:col-span-6 lg:col-start-7">
            <span aria-hidden="true" className="block font-serif text-7xl leading-none text-sage/70">
              {'“'}
            </span>
            <p className="-mt-4 text-pretty text-xl leading-relaxed text-paper/90 sm:text-2xl sm:leading-relaxed">
              ASEERA was founded by {site.founder.name} with the ambition to build an independent ecosystem of products
              and ideas. His vision is to develop meaningful work through thoughtful design, continuous learning, and a
              long-term commitment to creating products with purpose.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
