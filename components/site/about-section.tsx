import { site } from '@/lib/site'
import { SectionLabel } from './section-label'

const pillars = [
  { title: 'Develop ideas', body: 'Starting from a clear purpose and a long-term perspective.' },
  { title: 'Build products', body: 'Each with its own identity, purpose, and direction.' },
  { title: 'Create value', body: 'Through innovation and purposeful execution.' },
] as const

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="01">About ASEERA</SectionLabel>
            <h2
              id="about-title"
              className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] text-forest sm:text-4xl md:text-5xl"
            >
              Built With Purpose. Driven by Vision.
            </h2>

            <dl className="mt-10 inline-flex flex-col border-l-2 border-forest pl-5">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Founded</dt>
              <dd className="mt-2 text-2xl font-medium tracking-tight text-forest">
                <time dateTime={site.founded.iso}>{site.founded.long}</time>
              </dd>
            </dl>
          </div>

          <div className="space-y-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p>
              Founded on <time dateTime={site.founded.iso}>{site.founded.long}</time>, ASEERA was established as an
              independent brand with a long-term vision to develop ideas, build products, and create meaningful value
              through innovation and purposeful execution.
            </p>
            <p>
              ASEERA serves as the home for its products and future initiatives, each developed with its own identity,
              purpose, and direction.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid border-t border-border sm:grid-cols-3 md:mt-20">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="border-b border-border py-8 sm:border-b-0 sm:py-10 sm:pr-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8"
            >
              <span className="font-mono text-xs text-forest/60">{`0${i + 1}`}</span>
              <h3 className="mt-4 text-lg font-medium text-forest">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
