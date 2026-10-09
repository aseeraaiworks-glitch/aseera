import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'ASEERA — Building Ideas Into Meaningful Products'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/aseera-wordmark-white.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '96px 100px',
          background: '#173C2D',
          color: '#F7F7F4',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={520} height={86} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05, maxWidth: 900 }}>
            Building Ideas Into Meaningful Products.
          </div>
          <div style={{ display: 'flex', fontSize: 24, opacity: 0.6, letterSpacing: 4 }}>
            ASEERAKARSA.COM — ASEERA GO BEYOND.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
