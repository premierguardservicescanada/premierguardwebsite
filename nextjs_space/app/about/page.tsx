'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Heart, Target, Users, Award, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/721e657d-ab0c-4fe2-8887-5a1b8604223e.png"
            alt="Professional security team"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.h2
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-4 text-amber-500 tracking-wide"
          >
            PREMIER GUARD SERVICES
          </motion.h2>
          <motion.h1
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            About <span className="text-amber-500">Our Company</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Dedicated to providing luxury professional, reliable, and affordable security services across Canada
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our <span className="text-amber-500">Mission</span>
              </h2>
              <p className="text-lg text-slate-300 mb-4">
                At Premier Guard Services Corp., our mission is simple yet powerful: to deliver exceptional security services that protect what matters most to our clients.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                We understand that safety and security are not just services—they're fundamental needs. That's why we've built our company on a foundation of professionalism, reliability, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-slate-300">
                As a locally-operated company serving across Canada, we take pride in being accessible, responsive, and personally invested in every client's security needs.
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
                alt="Professional concierge security"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
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
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our <span className="text-amber-500">Story</span>
              </h2>
              <p className="text-lg text-slate-300 mb-4">
                Premier Guard Services Corp. was founded with a clear vision: to fill the gap in the Canadian security market for a luxury company that combines professional excellence with personalized service.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                Our team brings years of experience in security operations, law enforcement, and customer service. We've seen firsthand what works—and what doesn't—in the security industry.
              </p>
              <p className="text-lg text-slate-300">
                Today, we're proud to serve a diverse range of clients across Canada, from small businesses to large corporate events, construction sites to retail establishments. Every client receives the same commitment to excellence and personalized attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Core <span className="text-amber-500">Values</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
                className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 text-center group"
              >
                <value.icon className="w-16 h-16 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section ref={whyRef} className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Clients <span className="text-amber-500">Trust Us</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the Premier Guard difference
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {[
              {
                icon: Award,
                title: 'Licensed & Certified',
                desc: 'All our guards hold valid Ontario Security Licenses and undergo rigorous background checks. We maintain full insurance coverage for your complete peace of mind.'
              },
              {
                icon: Users,
                title: 'Professionally Trained',
                desc: 'Our team receives comprehensive training in security protocols, customer service, conflict resolution, and emergency response. Continuous education keeps skills sharp.'
              },
              {
                icon: Clock,
                title: 'Fast & Flexible',
                desc: 'Need security on short notice? We specialize in rapid deployment and flexible scheduling. Whether it\'s an emergency or planned event, we\'re ready when you need us.'
              },
              {
                icon: Shield,
                title: 'Personalized Service',
                desc: 'As a locally-operated company, we provide the personal attention and customized solutions that larger corporations simply can\'t match. Every client is a priority.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="w-12 h-12 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-slate-950 p-8 rounded-lg border border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Licenses & <span className="text-amber-500">Certifications</span>
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
                  className="flex flex-col items-center gap-2 p-4 bg-slate-900 rounded-lg border border-slate-700"
                >
                  <CheckCircle2 className="w-8 h-8 text-amber-500" />
                  <span className="text-sm text-center text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Work with a Security Partner You Can Trust?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's discuss your security needs and create a customized solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
