import Image from 'next/image'
import { cn } from '@/lib/utils'

const sources = {
  forest: '/brand/aseera-wordmark-green.png',
  light: '/brand/aseera-wordmark-white.png',
} as const

type WordmarkProps = {
  tone?: keyof typeof sources
  className?: string
  priority?: boolean
}

/** Official ASEERA wordmark. Swap the files in /public/brand to update the logo site-wide. */
export function Wordmark({ tone = 'forest', className, priority = false }: WordmarkProps) {
  return (
    <Image
      src={sources[tone]}
      alt="ASEERA"
      width={1599}
      height={263}
      priority={priority}
      className={cn('h-6 w-auto', className)}
    />
  )
}
