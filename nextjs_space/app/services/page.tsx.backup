'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Building2, ShoppingBag, HardHat, Car, Shield, Clock, Zap, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const services = [
  {
    icon: Calendar,
    title: 'Private Event Security',
    description: 'Professional security services for corporate events, weddings, concerts, and private functions. Our trained guards ensure smooth operations and guest safety throughout your event.',
    details: [
      'Access control and guest management',
      'Crowd control and monitoring',
      'Emergency response protocols',
      'Professional appearance and conduct'
    ],
    image: 'https://cdn.abacus.ai/images/6fec69ff-a487-440c-a0d4-be33803c68eb.png'
  },
  {
    icon: ShoppingBag,
    title: 'Retail Security',
    description: 'Comprehensive loss prevention and customer safety solutions for retail environments. We help create a secure shopping atmosphere while maintaining a welcoming environment.',
    details: [
      'Loss prevention monitoring',
      'Customer service and assistance',
      'Theft deterrence and detection',
      'Incident documentation and reporting'
    ],
    image: 'https://cdn.abacus.ai/images/69cf0aa9-cc82-48d0-aa7b-4fde2536de49.png'
  },
  {
    icon: HardHat,
    title: 'Construction Site Security',
    description: '24/7 site protection and access control for construction projects. Protect your valuable equipment, materials, and work in progress from theft and vandalism.',
    details: [
      'Round-the-clock site monitoring',
      'Access control and sign-in procedures',
      'Equipment and material protection',
      'Regular patrol and inspection'
    ],
    image: 'https://cdn.abacus.ai/images/3834d5ed-af53-4c6a-9a04-f8551c9337be.png'
  },
  {
    icon: Car,
    title: 'Mobile Patrol Services',
    description: 'Regular patrol services for multiple locations and properties. Our marked patrol vehicles provide visible security presence and rapid response capabilities.',
    details: [
      'Regular scheduled patrols',
      'Incident response and investigation',
      'Property checks and lock-ups',
      'Detailed patrol reports'
    ],
    image: 'https://cdn.abacus.ai/images/da3a2b19-c38b-4e13-b456-66e24bb39c1f.png'
  },
  {
    icon: Building2,
    title: 'Concierge / Front Desk Security',
    description: 'Professional reception and access control services that blend security with hospitality. Perfect for office buildings, condominiums, and corporate facilities.',
    details: [
      'Professional greeting and reception',
      'Visitor management and screening',
      'Package handling and delivery',
      'Building access control'
    ],
    image: 'https://cdn.abacus.ai/images/9af5107f-c8b2-4167-a5e9-ef9dff868473.png'
  },
  {
    icon: Zap,
    title: 'Emergency / Short-Notice Security',
    description: 'Rapid deployment security services for urgent needs. When unexpected situations arise, our team is ready to respond quickly and professionally.',
    details: [
      'Same-day availability (subject to scheduling)',
      'Quick assessment and deployment',
      'Flexible duration options',
      'Crisis management support'
    ],
    image: 'https://cdn.abacus.ai/images/1a82b039-ca63-407a-9862-3669d5e5c609.png'
  },
  {
    icon: Clock,
    title: '24/7 Security Coverage',
    description: 'Round-the-clock protection services for properties and facilities that need constant monitoring. We provide reliable coverage every hour of every day.',
    details: [
      'Continuous security presence',
      'Day and night shift coverage',
      'Holiday and weekend availability',
      'Consistent quality across all shifts'
    ],
    image: 'https://cdn.abacus.ai/images/fdc4a72d-cf61-4528-9600-2e08c2dfcdbb.png'
  }
]

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/221138cf-fd6b-43b2-94ad-8e4d362bde63.png"
            alt="Security patrol vehicle"
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
            Our <span className="text-amber-500">Security Services</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive luxury security solutions tailored to meet your specific needs across Canada
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-16"
          >
            {services?.map?.((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-600 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service?.title ?? ''}</h2>
                  </div>
                  <p className="text-lg text-slate-300 mb-6">
                    {service?.description ?? ''}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service?.details?.map?.((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400">{detail ?? ''}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-slate-800">
                    <Image
                      src={service?.image ?? ''}
                      alt={service?.title ?? ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              What Makes Our Services <span className="text-amber-500">Different</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Customized Solutions',
                desc: 'Every client has unique needs. We work with you to design security plans that perfectly fit your specific requirements and budget.'
              },
              {
                title: 'Licensed Professionals',
                desc: 'All our guards hold valid Ontario Security Licenses, are fully insured, and undergo comprehensive background checks before joining our team.'
              },
              {
                title: 'Detailed Reporting',
                desc: 'Receive comprehensive reports on all security activities, incidents, and observations to keep you fully informed and in control.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{feature?.title ?? ''}</h3>
                <p className="text-slate-400">{feature?.desc ?? ''}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Need Security Services?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a customized quote for your specific security needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:4374459542"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 transition-all duration-300"
            >
              Call (437) 445-9542
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
