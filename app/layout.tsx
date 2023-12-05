import type { Metadata } from 'next'
import { NextAuthProvider } from '../providers/NextAuth'
import { MantineProviderWrapper } from '../providers/MantineProvider';
import Footer from './components/base/Footer';
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
      <body className='bg-gray-100'>
        <NextAuthProvider>
          <MantineProviderWrapper>
            {children}
            <Footer />
          </MantineProviderWrapper>
        </NextAuthProvider>
      </body>
    </html>
  )
}
