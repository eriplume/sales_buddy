import type { Metadata } from 'next'
import { Viewport } from 'next'
import { NextAuthProvider } from '../providers/NextAuth'
import { MantineProviderWrapper } from '../providers/MantineProvider';
import Header from './components/base/Header';
import './globals.css'

export const metadata: Metadata = {
  title: 'sales buddy',
}

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width',
  maximumScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <MantineProviderWrapper>
            <div className="flex flex-col h-screen">
              <Header />
              <main className='bg-gray-100'>
                {children}
              </main>
            </div>
          </MantineProviderWrapper>
        </NextAuthProvider>
      </body>
    </html>
  )
}
