'use client'

/** Rendered on the client so the year stays current without a rebuild. */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>
}
