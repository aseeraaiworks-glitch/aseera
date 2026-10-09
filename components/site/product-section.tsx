import { ArrowUpRight } from 'lucide-react'
import { products, type Product } from '@/lib/site'
import { SectionLabel } from './section-label'

export function ProductSection() {
  return (
    <section id="product" aria-labelledby="product-title" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="03">Product</SectionLabel>
            <h2
              id="product-title"
              className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.025em] text-forest sm:text-4xl md:text-5xl"
            >
              Our Product
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Products developed under ASEERA, each with its own identity, purpose, and direction.
          </p>
        </div>

        <ul className="mt-12 md:mt-16">
          {products.map((product) => (
            <li key={product.name}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      aria-labelledby={`product-${product.name}`}
      className="grid overflow-hidden rounded-md border border-border bg-card lg:grid-cols-12"
    >
      <div className="flex flex-col p-6 sm:p-10 lg:col-span-7 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">P—001</span>
          <span className="inline-flex items-center gap-2 rounded-sm border border-amber-700/20 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-amber-600" />
            <span>
              <span className="sr-only">Status: </span>
              {product.status}
            </span>
          </span>
        </div>

        <h3
          id={`product-${product.name}`}
          className="mt-8 text-4xl font-semibold tracking-[-0.03em] text-forest sm:text-5xl"
        >
          {product.name}
        </h3>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {product.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-auto lg:pt-12">
          <a
            href={product.url}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest px-6 text-sm font-medium text-paper transition-colors hover:bg-forest-deep"
          >
            {product.ctaLabel}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <span className="break-all font-mono text-xs text-muted-foreground">{product.displayUrl}</span>
        </div>
      </div>

      <dl className="grid content-start divide-y divide-border border-t border-border bg-sage-soft/50 lg:col-span-5 lg:border-l lg:border-t-0">
        <ProductFact label="Category" value={product.category} />
        <ProductFact label="Built for" value={product.audience} />
        <ProductFact label="Status" value={product.status} />
        <ProductFact label="Developed by" value="ASEERA" />
      </dl>
    </article>
  )
}

function ProductFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-6 py-5 sm:px-10 lg:px-10 lg:py-7">
      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="text-base font-medium text-forest">{value}</dd>
    </div>
  )
}
