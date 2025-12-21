'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6">
              <div className="relative w-56 h-16 md:w-72 md:h-20">
                <Image
                  src="/logo.png"
                  alt="Premier Guard Services"
                  fill
                  className="object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6 font-body leading-relaxed text-center md:text-left">
              Luxury professional security services across Canada.
            </p>
            <a
              href="https://www.instagram.com/premierguardservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-white-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-body text-sm">Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-elegant text-lg mb-6 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/quote', label: 'Request Quote' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link?.href ?? ''}>
                  <Link
                    href={link?.href ?? '#'}
                    className="text-white/70 hover:text-white transition-colors font-body text-sm"
                  >
                    {link?.label ?? ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-elegant text-lg mb-6 tracking-wide">OUR SERVICES</h3>
            <ul className="space-y-3 text-white/70 font-body text-sm">
              <li>Event Security</li>
              <li>Retail Security</li>
              <li>Construction Security</li>
              <li>Mobile Patrol</li>
              <li>Concierge Security</li>
              <li>24/7 Coverage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-elegant text-lg mb-6 tracking-wide">CONTACT US</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:4374459542"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-body text-sm">(437) 445-9542</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Premierguardservicescorp@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all font-body text-sm">Premierguardservicescorp@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm">Serving in Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/50 text-center font-body text-sm">
            © 2024 Premier Guard Services Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
