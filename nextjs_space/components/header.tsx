'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-64 h-20 md:w-80 md:h-24">
              <Image
                src="https://cdn.abacus.ai/images/fbb7dfc1-475e-418b-b3ad-bef404ca9384.png"
                alt="Premier Guard Services"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '#'}
                className="text-slate-300 hover:text-amber-500 font-medium transition-colors duration-200"
              >
                {link?.label ?? ''}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:4374459542"
              className="flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(437) 445-9542</span>
            </a>
            <Link
              href="/quote"
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-800 bg-slate-900"
          >
            <nav className="px-6 py-4 space-y-3">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '#'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-slate-300 hover:text-amber-500 font-medium transition-colors"
                >
                  {link?.label ?? ''}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href="tel:4374459542"
                  className="flex items-center gap-2 py-2 text-slate-300 hover:text-amber-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(437) 445-9542</span>
                </a>
                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
