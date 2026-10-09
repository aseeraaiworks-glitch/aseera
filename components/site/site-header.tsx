'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Wordmark } from './wordmark'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>('#home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveHref(`#${visible[0].target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onResize = () => mq.matches && setIsMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      mq.removeEventListener('change', onResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300',
        isScrolled || isMenuOpen
          ? 'border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80'
          : 'border-transparent bg-background',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-forest focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 md:h-[72px]">
        <a href="#home" onClick={closeMenu} className="-m-2 rounded-sm p-2" aria-label="ASEERA — back to home">
          <Wordmark priority className="h-[22px] md:h-6" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-sm px-3 py-2 text-sm transition-colors',
                      isActive ? 'text-forest' : 'text-muted-foreground hover:text-forest',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-px bg-forest transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#product"
            className="group hidden items-center gap-2 rounded-sm border border-forest/20 px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-forest hover:text-paper md:inline-flex"
          >
            Explore Product
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-sm text-forest md:hidden"
          >
            {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 pb-6 pt-2 sm:px-8">
          <ul className="divide-y divide-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={activeHref === item.href ? 'true' : undefined}
                  className="flex min-h-12 items-center justify-between py-3 text-base text-forest"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-forest/40" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#product"
            onClick={closeMenu}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest px-5 text-sm font-medium text-paper"
          >
            Explore Product
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
