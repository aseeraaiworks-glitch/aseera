import { AboutSection } from '@/components/site/about-section'
import { ContactSection } from '@/components/site/contact-section'
import { FounderSection } from '@/components/site/founder-section'
import { HeroSection } from '@/components/site/hero-section'
import { ProductSection } from '@/components/site/product-section'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <FounderSection />
        <ProductSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
