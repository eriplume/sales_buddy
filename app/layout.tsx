import type { Metadata } from 'next'
import { NextAuthProvider } from '../providers/NextAuth'
import './globals.css'

export const metadata: Metadata = {
  title: 'sales buddy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
