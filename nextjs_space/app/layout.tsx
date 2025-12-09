import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

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
      <body className={`${inter.variable} ${cormorant.variable} ${playfair.variable} font-body bg-luxury-bg text-white antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
