import type { Metadata } from 'next'
import { NextAuthProvider } from '../providers/NextAuth'
import { MantineProviderWrapper } from '../providers/MantineProvider';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
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
      <body>
        <NextAuthProvider>
          <MantineProviderWrapper>
            <div className="flex flex-col h-screen">
              <Header />
              <main className='bg-gray-100'>
                {children}
              </main>
              <Footer />
            </div>
          </MantineProviderWrapper>
        </NextAuthProvider>
      </body>
    </html>
  )
}
