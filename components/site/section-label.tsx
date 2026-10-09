import { cn } from '@/lib/utils'

type SectionLabelProps = {
  index: string
  children: React.ReactNode
  tone?: 'forest' | 'light'
  className?: string
}

export function SectionLabel({ index, children, tone = 'forest', className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]',
        tone === 'forest' ? 'text-muted-foreground' : 'text-paper/60',
        className,
      )}
    >
      <span className={tone === 'forest' ? 'text-forest' : 'text-paper'}>{index}</span>
      <span aria-hidden="true" className={cn('h-px w-8', tone === 'forest' ? 'bg-forest/30' : 'bg-paper/30')} />
      {children}
    </p>
  )
}
