import { ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'
import { HeroVisual } from './hero-visual'

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Independent brand &amp; product ecosystem
            <span aria-hidden="true" className="mx-2 text-forest/30">
              /
            </span>
            Est. {site.founded.year}
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-forest [animation-delay:80ms] sm:text-6xl lg:text-[4.5rem]"
          >
            Building Ideas Into Meaningful Products.
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-lg">
            ASEERA is an independent brand and product ecosystem focused on developing ideas into meaningful digital
            experiences and products.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
            <a
              href="#product"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest px-6 text-sm font-medium text-paper transition-colors hover:bg-forest-deep"
            >
              Explore Our Product
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-forest/20 bg-card px-6 text-sm font-medium text-forest transition-colors hover:border-forest"
            >
              About ASEERA
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:200ms] lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
