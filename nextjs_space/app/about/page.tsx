'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Heart, Target, Users, Award, Clock, CheckCircle2, ArrowRight, Star } from 'lucide-react'
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

export default function AboutPage() {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Always Visible */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/721e657d-ab0c-4fe2-8887-5a1b8604223e.png"
            alt="Professional security team"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg/70 via-luxury-bg/50 to-luxury-bg" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-elegant mb-4 text-white tracking-wide">
            PREMIER GUARD SERVICES
          </h2>
          <h1 className="text-5xl md:text-6xl font-elegant mb-6 text-white">
            About <span className="text-white">Our Company</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Dedicated to providing luxury professional, reliable, and affordable security services across Canada
          </p>
        </div>
      </section>

      {/* Mission & Story - Consolidated */}
      <section ref={missionRef} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-elegant mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 mb-4">
                To deliver exceptional security services that protect what matters most to our clients. We've built our company on professionalism, reliability, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-white/80">
                As a locally-operated company serving across Canada, we provide the personal attention and customized solutions that larger corporations simply can't match.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://cdn.abacus.ai/images/f8b93c6f-67ec-4487-ae42-5c03e00ea495.png"
                alt="Professional security team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="relative aspect-video rounded-lg overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image
                src="https://cdn.abacus.ai/images/2d3a5191-68db-4c27-8558-d89d576c7fca.png"
                alt="Professional security guard"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-elegant mb-6 text-white">
                Our Experience
              </h2>
              <p className="text-lg text-white/80 mb-4">
                Our team brings years of experience in security operations, law enforcement, and customer service. We understand what works in the security industry.
              </p>
              <p className="text-lg text-white/80">
                Today, we serve a diverse range of clients across Canada—from corporate events and construction sites to retail establishments. Every client receives our full commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-elegant mb-4 text-white font-elegant">
              Our Core <span className="text-white">Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Shield,
                title: 'Trust',
                desc: 'Building lasting relationships through integrity and transparency in every interaction'
              },
              {
                icon: Heart,
                title: 'Safety',
                desc: 'Prioritizing the well-being and security of everyone we serve and protect'
              },
              {
                icon: Target,
                title: 'Accountability',
                desc: 'Taking responsibility for our actions and delivering on every promise we make'
              },
              {
                icon: Users,
                title: 'Reliability',
                desc: 'Consistently providing dependable service you can count on, day or night'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-black p-8 rounded-lg border-[1.5px] border-white hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 text-center group"
              >
                <value.icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-elegant mb-3 text-white font-elegant">{value.title}</h3>
                <p className="text-white/70">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Premier Guard - Consolidated Section */}
      <section ref={whyUsRef} className="bg-black py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-elegant text-white tracking-wide mb-4">
              WHY CHOOSE PREMIER GUARD
            </h2>
            <p className="text-lg text-white/60 tracking-wider">
              PROFESSIONAL EXCELLENCE YOU CAN TRUST
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
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
              className="space-y-5"
            >
              {[
                'Licensed & Insured Guards',
                'Professionally Trained Personnel',
                'Fast Response & Deployment',
                'Professional Appearance',
                'Flexible Contract Terms',
                'Personalized Service',
                'Competitive Pricing'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 bg-white" />
                  <span className="text-white text-lg tracking-wide">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 mb-16"
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
                <div className="text-5xl md:text-6xl font-elegant text-white mb-3">
                  <AnimatedCounter end={stat.end} />{stat.suffix}
                </div>
                <div className="text-white/60 text-sm tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            animate={whyUsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-black p-8 rounded-lg border-[1.5px] border-white"
          >
            <h3 className="text-2xl font-elegant mb-6 text-center text-white">
              LICENSES & CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Ontario Security License',
                'First-Aid Certified',
                'WSIB Compliant',
                'Liability Insurance'
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-4 bg-black rounded-lg border border-white/30"
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                  <span className="text-sm text-center text-white/80">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section ref={testimonialsRef} className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-elegant text-white tracking-wide mb-4">
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
                className="bg-black/40 p-8 border-[1.5px] border-white/20 hover:border-white/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white/70 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/20 pt-6">
                  <div className="font-elegant text-white text-lg tracking-wide">{testimonial.name}</div>
                  <div className="text-sm text-white/60 mt-1">{testimonial.role}</div>
                  <div className="text-sm text-white/40 mt-0.5">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black border-t border-b border-white/20 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-elegant mb-6 text-white font-elegant">
            Ready to Work with a Security Partner You Can Trust?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss your security needs and create a customized solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
