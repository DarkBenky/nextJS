// src/app/layout.tsx
'use client'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [message, setMessage] = useState('')

  return (
    <html>
      <body>
        <SessionProvider>
          {message && (
            <div className="success-message">
              {message}
            </div>
          )}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}