import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Premier Guard Services Corp. - Professional Security Services in Toronto & GTA',
  description: 'Licensed and professional security services for events, retail, construction, and more. 24/7 coverage across Toronto and the Greater Toronto Area. Your safety, our priority.',
  keywords: ['security services', 'Toronto security', 'GTA security', 'event security', 'retail security', 'construction security', 'mobile patrol'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Premier Guard Services Corp. - Professional Security in Toronto & GTA',
    description: 'Licensed security services for events, retail, construction, and more. 24/7 professional coverage.',
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
