'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2, Calendar } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const serviceTypes = [
  'Private Event Security',
  'Retail Security',
  'Construction Site Security',
  'Mobile Patrol',
  'Concierge / Front Desk Security',
  'Emergency / Short-Notice Security',
  '24/7 Security Coverage',
  'Other / Custom Requirements'
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceType: '',
    dateNeeded: '',
    hoursRequired: '',
    numberOfGuards: '',
    location: '',
    additionalNotes: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response?.ok) {
        throw new Error('Failed to submit')
      }

      setStatus('success')
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        serviceType: '',
        dateNeeded: '',
        hoursRequired: '',
        numberOfGuards: '',
        location: '',
        additionalNotes: ''
      })
      
      setTimeout(() => setStatus('idle'), 10000)
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            Request a <span className="text-white">Quote</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-white/80"
          >
            Tell us about your security needs and we'll provide a customized quote within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-black p-8 md:p-12 rounded-lg border-[1.5px] border-white shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-900/30 border-2 border-green-600 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-elegant mb-4 text-white font-elegant">Quote Request Submitted!</h2>
                <p className="text-lg text-white/80 mb-2">
                  Thank you for choosing Premier Guard Services.
                </p>
                <p className="text-white/70 mb-8">
                  We've received your quote request and our team will contact you within 24 hours with a detailed proposal.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white hover:bg-white text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-elegant text-white font-elegant">Quote Request Form</h2>
                  </div>
                  <p className="text-white/70">
                    Fill out the form below with as much detail as possible to help us provide an accurate quote.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-600/50 rounded-lg">
                    <p className="text-red-300">Sorry, there was an error submitting your request. Please try again or call us directly at (437) 445-9542.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData?.fullName ?? ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-white/80 mb-2">
                        Business/Organization Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData?.businessName ?? ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                        placeholder="ABC Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData?.phone ?? ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl font-elegant text-white mb-4">Service Requirements</h3>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-white/80 mb-2">
                          Type of Service Needed *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData?.serviceType ?? ''}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {serviceTypes?.map?.((type) => (
                            <option key={type ?? ''} value={type ?? ''}>{type ?? ''}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="dateNeeded" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-2">
                            <Calendar className="w-4 h-4" />
                            Date(s) Needed
                          </label>
                          <input
                            type="text"
                            id="dateNeeded"
                            name="dateNeeded"
                            value={formData?.dateNeeded ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                            placeholder="e.g., Dec 15, 2024 or ongoing"
                          />
                        </div>

                        <div>
                          <label htmlFor="hoursRequired" className="block text-sm font-medium text-white/80 mb-2">
                            Hours Required
                          </label>
                          <input
                            type="text"
                            id="hoursRequired"
                            name="hoursRequired"
                            value={formData?.hoursRequired ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                            placeholder="e.g., 6-10pm, 24/7"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="numberOfGuards" className="block text-sm font-medium text-white/80 mb-2">
                            Number of Guards Needed
                          </label>
                          <input
                            type="text"
                            id="numberOfGuards"
                            name="numberOfGuards"
                            value={formData?.numberOfGuards ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                            placeholder="e.g., 2 guards"
                          />
                        </div>

                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-white/80 mb-2">
                            Location/Address
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData?.location ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                            placeholder="Toronto, ON"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-white/80 mb-2">
                          Additional Notes / Special Requirements
                        </label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={formData?.additionalNotes ?? ''}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-black border border-white/30 rounded-lg text-white placeholder-slate-500 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                          placeholder="Tell us more about your security needs, special requirements, or any other details that will help us provide an accurate quote..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-white/70 p-4 bg-black rounded-lg border-[1.5px] border-white">
                    <p className="font-medium text-white/80 mb-1">Privacy Notice</p>
                    <p>Your information will be kept confidential and used only to provide you with a quote. We will not share your details with third parties.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-4 bg-white hover:bg-white disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-lg font-semibold rounded-full-lg hover:shadow-white/10 transition-all duration-300"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get My Quote'}
                  </button>

                  <p className="text-sm text-center text-white/70">
                    Need immediate assistance? Call us at{' '}
                    <a href="tel:4374459542" className="text-white hover:text-gray-300">  
                      (437) 445-9542
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
