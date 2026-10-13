export type NavItem = {
  label: string
  href: `#${string}`
}

export type ContactChannel = {
  label: string
  value: string
  href: string
}

export type Product = {
  name: string
  status: string
  description: string
  category: string
  audience: string
  url: string
  displayUrl: string
  ctaLabel: string
}

export const site = {
  name: 'ASEERA',
  tagline: 'Aseera Go Beyond.',
  url: 'https://aseerakarsa.com',
  title: 'Aseera Group Indonesia',
  description:
    'Independent product group based in Indonesia. Aseera builds digital products, brands, and ecosystems.',
  founder: {
    name: 'Andy Faiz Anissullah',
    role: 'Founder of ASEERA',
  },
  founded: {
    iso: '2026-01-02',
    long: 'January 2, 2026',
    short: '02 · 01 · 2026',
    year: '2026',
  },
  location: {
    lines: ['Cot Bau, Sabang', 'Aceh 23522, Indonesia'],
    full: 'Cot Bau, Sabang, Aceh 23522, Indonesia.',
  },
} as const

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Founder', href: '#founder' },
  { label: 'Product', href: '#product' },
  { label: 'Contact', href: '#contact' },
]

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'aseera.aiworks@gmail.com',
    href: 'mailto:aseera.aiworks@gmail.com',
  },
]

export const products: Product[] = [
  {
    name: 'NgajiTrack',
    status: 'In Development',
    description:
      'NgajiTrack is a Qur’an learning management platform designed to help Qur’an learning institutions manage student progress and simplify learning monitoring.',
    category: 'Qur’an learning management',
    audience: 'Qur’an learning institutions',
    url: 'https://landing-page-ngajitrack.aseerakarsa.com',
    displayUrl: 'landing-page-ngajitrack.aseerakarsa.com',
    ctaLabel: 'Visit NgajiTrack',
  },
]
