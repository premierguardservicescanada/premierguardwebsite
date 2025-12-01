import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Premier Guard Services Corp. - Luxury Professional Security Services in Canada',
  description: 'Luxury licensed and professional security services for events, retail, construction, and more. 24/7 coverage across Canada. Your safety, our priority.',
  keywords: ['security services', 'Canada security', 'luxury security', 'event security', 'retail security', 'construction security', 'mobile patrol'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Premier Guard Services Corp. - Luxury Professional Security in Canada',
    description: 'Luxury licensed security services for events, retail, construction, and more. 24/7 professional coverage.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
