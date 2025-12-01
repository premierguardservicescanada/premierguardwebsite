'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="relative w-48 h-16 mb-4">
              <Image
                src="https://cdn.abacus.ai/images/fbb7dfc1-475e-418b-b3ad-bef404ca9384.png"
                alt="Premier Guard Services"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 mb-4">
              Professional security services across Toronto and the Greater Toronto Area.
            </p>
            <a
              href="https://www.instagram.com/premierguardservices?igsh=aGRpNHR2ZGcxcHQz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link?.label ?? ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400">
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
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4374459542"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(437) 445-9542</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@premierguardservices.ca"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@premierguardservices.ca</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Serving Toronto & GTA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Premier Guard Services Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
