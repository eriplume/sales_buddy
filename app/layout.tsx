import type { Metadata } from 'next'
import { Viewport } from 'next'
import { NextAuthProvider } from '../providers/NextAuth'
import { MantineProviderWrapper } from '../providers/MantineProvider';
import Header from './components/base/Header';
import './globals.css'

const siteName= 'sales buddy';
const description = 'アパレルスタッフの自己記録管理をサポートするアプリです';
const url = 'https://sbuddy-apparel.com/';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sbuddy-apparel.com/'),
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
  },
  twitter: {
		card: 'summary',
    title: siteName,
    description,
	},
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
