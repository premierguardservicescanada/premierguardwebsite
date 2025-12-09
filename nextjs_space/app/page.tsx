'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Clock, Award, Users, PhoneCall, CheckCircle2, Star, ArrowRight, Instagram } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

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
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="overflow-x-hidden bg-luxury-bg">
      {/* Hero Section - Full Width Image Only */}
      <section className="relative h-screen w-full">
        <Image
          src="https://cdn.abacus.ai/images/f41a7422-4331-46c2-a872-30fbdc85291c.png"
          alt="Premier Guard Services"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Services - Horizontal Scroll */}
      <section ref={servicesRef} className="bg-luxury-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-elegant text-luxury-gold tracking-wide mb-4">
              OUR SERVICES
            </h2>
            <p className="text-lg text-white/60 tracking-wider">
              LUXURY SECURITY SOLUTIONS
            </p>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory">
              {[
                {
                  title: 'Private Event Security',
                  desc: 'Professional security for corporate events, weddings, concerts, and private functions',
                  image: 'https://cdn.abacus.ai/images/85bae8af-6026-43b4-9d5e-c9e3134a2319.png'
                },
                {
                  title: 'Retail Security',
                  desc: 'Loss prevention and customer safety for retail environments',
                  image: 'https://cdn.abacus.ai/images/733c7fe2-e931-4b45-9fc6-3cf39f8e4815.png'
                },
                {
                  title: 'Construction Site Security',
                  desc: '24/7 site protection and access control for construction projects',
                  image: 'https://cdn.abacus.ai/images/5fcf3f94-6333-49f6-8cce-ab10f1a495a9.png'
                },
                {
                  title: 'Mobile Patrol',
                  desc: 'Regular patrol services for multiple locations and properties',
                  image: 'https://cdn.abacus.ai/images/7eb30b6c-21fc-4d26-9d7f-894ca98389ee.png'
                },
                {
                  title: 'Concierge Security',
                  desc: 'Professional reception and access control for buildings',
                  image: 'https://cdn.abacus.ai/images/d75a4be0-0a0c-4400-a924-05186f1dec6b.png'
                },
                {
                  title: '24/7 Coverage',
                  desc: 'Round-the-clock protection services whenever you need them',
                  image: 'https://cdn.abacus.ai/images/800a6277-2773-4bc3-9fb9-ab2b65e25236.png'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex-none w-80 snap-center group"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-elegant text-luxury-gold mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-10 py-4 border-[1.5px] border-luxury-gold text-luxury-gold font-elegant text-sm tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300"
            >
              VIEW ALL SERVICES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Premier Guard */}
      <section ref={whyUsRef} className="bg-black py-24 border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-elegant text-luxury-gold tracking-wide mb-4">
              WHY CHOOSE PREMIER GUARD
            </h2>
            <p className="text-lg text-white/60 tracking-wider">
              LUXURY SECURITY, PROFESSIONAL EXCELLENCE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial="hidden"
              animate={whyUsInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="https://cdn.abacus.ai/images/8ff174d6-7a50-463f-99b8-7f2fd58a3614.png"
                alt="Premier Guard Services Team"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={whyUsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-6"
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
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 bg-luxury-gold" />
                  <span className="text-white text-lg tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-luxury-gold/10 py-16"
          >
            {[
              { end: 500, suffix: '+', label: 'EVENTS SECURED' },
              { end: 24, suffix: '/7', label: 'AVAILABILITY' },
              { end: 100, suffix: '%', label: 'LICENSED STAFF' },
              { end: 98, suffix: '%', label: 'SATISFACTION' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-elegant text-luxury-gold mb-3">
                  <AnimatedCounter end={stat.end} />{stat.suffix}
                </div>
                <div className="text-white/60 text-sm tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section ref={testimonialsRef} className="bg-luxury-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-elegant text-luxury-gold tracking-wide mb-4">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-lg text-white/60 tracking-wider">
              TRUSTED BY CANADA'S FINEST
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                className="bg-black/40 p-8 border-[1.5px] border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-white/70 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-luxury-gold/20 pt-6">
                  <div className="font-elegant text-luxury-gold text-lg tracking-wide">{testimonial.name}</div>
                  <div className="text-sm text-white/60 mt-1">{testimonial.role}</div>
                  <div className="text-sm text-white/40 mt-0.5">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="bg-black py-24 border-t border-luxury-gold/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-elegant text-luxury-gold tracking-wide mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-white/60 mb-12 tracking-wider">
            READY TO SECURE YOUR PEACE OF MIND?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/quote"
              className="px-12 py-4 border-[1.5px] border-luxury-gold text-luxury-gold font-elegant text-sm tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300"
            >
              REQUEST A QUOTE
            </Link>
            <Link
              href="tel:4374459542"
              className="flex items-center justify-center gap-3 px-12 py-4 bg-luxury-gold text-black font-elegant text-sm tracking-wider hover:bg-luxury-gold-light transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              (437) 445-9542
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-white/60">
            <a 
              href="mailto:Premierguardservicescorp@gmail.com" 
              className="hover:text-luxury-gold transition-colors tracking-wide"
            >
              Premierguardservicescorp@gmail.com
            </a>
            <span className="hidden sm:block text-luxury-gold/30">|</span>
            <span className="tracking-wider">SERVING IN CANADA</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/premierguardservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-[1.5px] border-luxury-gold/30 hover:border-luxury-gold flex items-center justify-center hover:bg-luxury-gold/10 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-luxury-gold" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
