'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2 } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response?.ok) {
        throw new Error('Failed to submit')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-elegant mb-4 text-white tracking-wide"
          >
            PREMIER GUARD SERVICES
          </motion.h2>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-elegant mb-6 text-white"
          >
            Get in <span className="text-white">Touch</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-white/80"
          >
            We're here to answer your questions and discuss your security needs
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-elegant mb-6 text-white font-elegant">
                  Contact <span className="text-white">Information</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Reach out to Premier Guard Services for all your security needs. We're available 24/7 to serve you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-black rounded-lg border-[1.5px] border-white">
                  <div className="p-3 bg-white rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-elegant text-white mb-1">Phone</h3>
                    <a
                      href="tel:4374459542"
                      className="text-white hover:text-gray-300 transition-colors text-lg"
                    >
                      (437) 445-9542
                    </a>
                    <p className="text-sm text-white/70 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-black rounded-lg border-[1.5px] border-white">
                  <div className="p-3 bg-white rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-elegant text-white mb-1">Email</h3>
                    <a
                      href="mailto:Premierguardservicescorp@gmail.com"
                      className="text-white hover:text-gray-300 transition-colors break-all"
                    >
                      Premierguardservicescorp@gmail.com
                    </a>
                    <p className="text-sm text-white/70 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-black rounded-lg border-[1.5px] border-white">
                  <div className="p-3 bg-white rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-elegant text-white mb-1">Service Area</h3>
                    <p className="text-white/80">Serving in Canada</p>
                    <p className="text-sm text-white/70 mt-1">Luxury security services nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-black rounded-lg border-[1.5px] border-white">
                  <div className="p-3 bg-white rounded-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-elegant text-white mb-1">Social Media</h3>
                    <a
                      href="https://www.instagram.com/premierguardservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      @premierguardservices
                    </a>
                    <p className="text-sm text-white/70 mt-1">Follow us for updates</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/20 to-gray-800/20 border border-white/30 rounded-lg">
                <h3 className="font-elegant text-white mb-2">Business Hours</h3>
                <p className="text-white/80">24/7 Emergency Response</p>
                <p className="text-sm text-white/70 mt-2">
                  Office: Monday - Friday, 9:00 AM - 6:00 PM<br />
                  After-hours calls welcome for emergencies
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-black p-8 rounded-lg border-[1.5px] border-white shadow-2xl">
                <h2 className="text-3xl font-elegant mb-6 text-white font-elegant">
                  Send us a <span className="text-white">Message</span>
                </h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-300">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-600/50 rounded-lg">
                    <p className="text-red-300">Sorry, there was an error sending your message. Please try again or call us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData?.name ?? ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData?.email ?? ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData?.phone ?? ''}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData?.message ?? ''}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <div className="text-sm text-white/70">
                    <p>* Required fields</p>
                    <p className="mt-1">Your information will be kept confidential and used only to respond to your inquiry.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-white disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-full-lg hover:shadow-white/10 transition-all duration-300"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
