'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 })
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
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Request a <span className="text-amber-500">Quote</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-slate-300"
          >
            Tell us about your security needs and we'll provide a customized quote within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-slate-900 p-8 md:p-12 rounded-lg border border-slate-800 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-900/30 border-2 border-green-600 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Quote Request Submitted!</h2>
                <p className="text-lg text-slate-300 mb-2">
                  Thank you for choosing Premier Guard Services.
                </p>
                <p className="text-slate-400 mb-8">
                  We've received your quote request and our team will contact you within 24 hours with a detailed proposal.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-amber-500" />
                    <h2 className="text-3xl font-bold text-white">Quote Request Form</h2>
                  </div>
                  <p className="text-slate-400">
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
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData?.fullName ?? ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">
                        Business/Organization Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData?.businessName ?? ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        placeholder="ABC Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData?.email ?? ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData?.phone ?? ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="border-t border-slate-800 pt-6">
                    <h3 className="text-xl font-bold text-white mb-4">Service Requirements</h3>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-slate-300 mb-2">
                          Type of Service Needed *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData?.serviceType ?? ''}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {serviceTypes?.map?.((type) => (
                            <option key={type ?? ''} value={type ?? ''}>{type ?? ''}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="dateNeeded" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                            <Calendar className="w-4 h-4" />
                            Date(s) Needed
                          </label>
                          <input
                            type="text"
                            id="dateNeeded"
                            name="dateNeeded"
                            value={formData?.dateNeeded ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                            placeholder="e.g., Dec 15, 2024 or ongoing"
                          />
                        </div>

                        <div>
                          <label htmlFor="hoursRequired" className="block text-sm font-medium text-slate-300 mb-2">
                            Hours Required
                          </label>
                          <input
                            type="text"
                            id="hoursRequired"
                            name="hoursRequired"
                            value={formData?.hoursRequired ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                            placeholder="e.g., 6-10pm, 24/7"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="numberOfGuards" className="block text-sm font-medium text-slate-300 mb-2">
                            Number of Guards Needed
                          </label>
                          <input
                            type="text"
                            id="numberOfGuards"
                            name="numberOfGuards"
                            value={formData?.numberOfGuards ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                            placeholder="e.g., 2 guards"
                          />
                        </div>

                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-slate-300 mb-2">
                            Location/Address
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData?.location ?? ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                            placeholder="Toronto, ON"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-slate-300 mb-2">
                          Additional Notes / Special Requirements
                        </label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={formData?.additionalNotes ?? ''}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors resize-none"
                          placeholder="Tell us more about your security needs, special requirements, or any other details that will help us provide an accurate quote..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-slate-400 p-4 bg-slate-950 rounded-lg border border-slate-800">
                    <p className="font-medium text-slate-300 mb-1">Privacy Notice</p>
                    <p>Your information will be kept confidential and used only to provide you with a quote. We will not share your details with third parties.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get My Quote'}
                  </button>

                  <p className="text-sm text-center text-slate-400">
                    Need immediate assistance? Call us at{' '}
                    <a href="tel:4374459542" className="text-amber-500 hover:text-amber-400">  
                      (437) 445-9542
                    </a>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
