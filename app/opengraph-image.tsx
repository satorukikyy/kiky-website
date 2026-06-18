export const runtime = 'edge'

import { ImageResponse } from 'next/og'

export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ color: '#7C3AED', fontSize: '18px', marginBottom: '32px', letterSpacing: '0.02em' }}>
          rizky@nexorasec.asia
        </div>
        <div style={{ color: '#f5f5f5', fontSize: '66px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-2px' }}>
          Rizky Aditya
        </div>
        <div style={{ color: '#888888', fontSize: '24px', marginTop: '20px', lineHeight: 1.5 }}>
          GRC Consultant · Penetration Tester · Security Engineer
        </div>
        <div style={{ color: '#2a2a2a', fontSize: '17px', marginTop: '64px', letterSpacing: '0.05em' }}>
          onerrorkx.pages.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
