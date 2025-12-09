'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/98 backdrop-blur-md border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-56 h-16 md:w-72 md:h-20">
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
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '#'}
                className="text-white hover:text-white font-body text-sm tracking-[0.2em] transition-colors duration-300"
              >
                {link?.label ?? ''}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/quote"
              className="inline-block px-8 py-2.5 border-[1.5px] border-white text-white font-elegant text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-full"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-white transition-colors"
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
            className="lg:hidden border-t border-white/20 bg-black"
          >
            <nav className="px-6 py-6 space-y-4">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '#'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-white hover:text-white font-body text-sm tracking-wider transition-colors"
                >
                  {link?.label ?? ''}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-8 py-3 border-[1.5px] border-white text-white font-elegant text-sm tracking-wide rounded-full transition-all duration-300"
                >
                  GET A QUOTE
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
