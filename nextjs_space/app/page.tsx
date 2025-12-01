'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Clock, Award, Users, PhoneCall, CheckCircle2, Star, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/f41a7422-4331-46c2-a872-30fbdc85291c.png"
            alt="Premier Guard Services professional security team"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="relative w-96 h-48 md:w-[40rem] md:h-60 mx-auto mb-8">
              <Image
                src="https://cdn.abacus.ai/images/fbb7dfc1-475e-418b-b3ad-bef404ca9384.png"
                alt="Premier Guard Services Corp Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-amber-500 tracking-wide"
          >
            PREMIER GUARD SERVICES
          </motion.h2>

          <motion.h1
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Your Safety, <span className="text-amber-500">Our Priority</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            Luxury professional, licensed security services across Canada. 
            Trusted protection for your events, properties, and peace of mind.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/quote"
              className="group px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg shadow-lg border border-slate-700 hover:border-amber-500 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: 'Licensed Guards', desc: 'Fully licensed and insured' },
              { icon: Clock, title: '24/7 Coverage', desc: 'Round-the-clock protection' },
              { icon: Award, title: 'Fast Response', desc: 'Quick deployment when needed' },
              { icon: Users, title: 'Professional Team', desc: 'Trained and reliable staff' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group"
              >
                <item.icon className="w-12 h-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our <span className="text-amber-500">Services</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: 'Private Event Security',
                desc: 'Professional security for corporate events, weddings, concerts, and private functions',
                image: 'https://cdn.abacus.ai/images/87a0f03f-8198-4431-84dd-8d24db9beb52.png'
              },
              {
                title: 'Retail Security',
                desc: 'Loss prevention and customer safety for retail environments',
                image: 'https://cdn.abacus.ai/images/c0ce5915-fdc0-4364-b7b6-e8faf2a332d2.png'
              },
              {
                title: 'Construction Site Security',
                desc: '24/7 site protection and access control for construction projects',
                image: 'https://cdn.abacus.ai/images/c2fbc862-114f-4e8c-8542-6ac0d8fbb62c.png'
              },
              {
                title: 'Mobile Patrol',
                desc: 'Regular patrol services for multiple locations and properties',
                image: 'https://cdn.abacus.ai/images/ced8e45b-2cd6-45ed-9d6c-ce9bcd4fbf8e.png'
              },
              {
                title: 'Concierge Security',
                desc: 'Professional reception and access control for buildings',
                image: 'https://cdn.abacus.ai/images/f8b93c6f-67ec-4487-ae42-5c03e00ea495.png'
              },
              {
                title: '24/7 Coverage',
                desc: 'Round-the-clock protection services whenever you need them',
                image: 'https://cdn.abacus.ai/images/4031161c-98cd-42f6-ab0e-53a084312d27.png'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-slate-800 hover:border-amber-500"
              >
                <div className="relative aspect-[4/3] bg-slate-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose <span className="text-amber-500">Premier Guard</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the difference of working with a dedicated security partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial="hidden"
              animate={whyUsInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://cdn.abacus.ai/images/721e657d-ab0c-4fe2-8887-5a1b8604223e.png"
                alt="Professional security team"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={whyUsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                'Licensed & Insured Guards',
                'Professionally Trained Personnel',
                'Fast Response Times',
                'Professional Appearance & Conduct',
                'Flexible Contract Terms',
                'Personalized Service',
                'Competitive Pricing'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-lg text-white">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { end: 500, suffix: '+', label: 'Events Secured' },
              { end: 24, suffix: '/7', label: 'Availability' },
              { end: 100, suffix: '%', label: 'Licensed Staff' },
              { end: 98, suffix: '%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  <AnimatedCounter end={stat.end} />{stat.suffix}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Our <span className="text-amber-500">Clients Say</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Event Coordinator',
                company: 'Elite Events Toronto',
                text: 'Premier Guard Services has been our go-to security partner for over two years. Their professionalism and attention to detail are unmatched. Every event runs smoothly thanks to their team.'
              },
              {
                name: 'Michael Chen',
                role: 'Operations Manager',
                company: 'BuildRight Construction',
                text: 'We have used Premier Guard for multiple construction sites across the GTA. Their 24/7 coverage gives us complete peace of mind. Highly recommended for any construction security needs.'
              },
              {
                name: 'Jennifer Rodriguez',
                role: 'Retail Manager',
                company: 'Fashion Forward',
                text: 'The guards are always professional, punctual, and courteous with our customers. Premier Guard has significantly reduced theft and made our store feel safer for everyone.'
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-800 hover:border-amber-500 hover:shadow-amber-500/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-amber-500">{testimonial.role}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your Peace of Mind?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free quote today and experience professional security services you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="tel:4374459542"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              (437) 445-9542
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
