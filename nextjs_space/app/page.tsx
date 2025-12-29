'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneCall, ArrowRight, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function HomePage() {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const mobileVideos = [
    '/hero-mobile.mp4',
    '/hero-mobile-alt1.mp4',
    '/hero-mobile-alt2.mp4'
  ]

  // Handle video end to cycle to next video
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % mobileVideos.length)
  }

  // Update video source when index changes
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      video.load()
      
      // Wait for video to be ready before playing
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing:', mobileVideos[currentVideoIndex])
          })
          .catch((error) => {
            console.error('Video autoplay failed:', error)
            // Retry playing after a short delay
            setTimeout(() => {
              video.play().catch(e => console.error('Retry failed:', e))
            }, 100)
          })
      }
    }
  }, [currentVideoIndex, mobileVideos])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="overflow-x-hidden bg-black">
      {/* Hero Section - Video for Mobile, Image for Desktop */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Desktop Image - Hidden on Mobile */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/f41a7422-4331-46c2-a872-30fbdc85291c.png"
            alt="Premier Guard Services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Video Carousel - Hidden on Desktop */}
        <div className="md:hidden absolute inset-0">
          <video
            key={currentVideoIndex}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            poster="https://cdn.abacus.ai/images/f41a7422-4331-46c2-a872-30fbdc85291c.png"
          >
            <source src={mobileVideos[currentVideoIndex]} type="video/mp4" />
            {/* Fallback to image if video doesn't load */}
            <Image
              src="https://cdn.abacus.ai/images/f41a7422-4331-46c2-a872-30fbdc85291c.png"
              alt="Premier Guard Services"
              fill
              className="object-cover"
            />
          </video>
        </div>
      </section>

      {/* Services - Horizontal Scroll with Arrows */}
      <section ref={servicesRef} className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-elegant text-white tracking-wide mb-3">
              OUR SERVICES
            </h2>
            <p className="text-sm text-white/50 tracking-widest uppercase">
              Luxury Security Solutions
            </p>
          </motion.div>

          {/* Horizontal Scrolling Container with Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 px-12 py-4 scrollbar-hide snap-x snap-mandatory"
            >
              {[
                {
                  title: 'Private Event Security',
                  desc: 'Professional security for events',
                  image: '/event-security.jpg'
                },
                {
                  title: 'Retail Security',
                  desc: 'Loss prevention & customer safety',
                  image: '/retail-security.jpg'
                },
                {
                  title: 'Construction Site Security',
                  desc: '24/7 site protection',
                  image: '/construction-security.jpg'
                },
                {
                  title: 'Mobile Patrol',
                  desc: 'Regular patrol services',
                  image: '/mobile-patrol.jpg'
                },
                {
                  title: 'Concierge Security',
                  desc: 'Professional reception services',
                  image: '/concierge-security.jpg'
                },
                {
                  title: '24/7 Coverage',
                  desc: 'Round-the-clock protection',
                  image: '/24-7-coverage.jpg'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex-none w-64 snap-center group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden border border-white/20">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-elegant text-white mb-2 tracking-wide uppercase">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
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
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-10 py-3 border border-white text-white font-elegant text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="bg-black py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-elegant text-white tracking-wide mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-white/60 mb-12 tracking-wider">
            READY TO SECURE YOUR PEACE OF MIND?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/quote"
              className="px-12 py-4 border-[1.5px] border-white text-white font-elegant text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              REQUEST A QUOTE
            </Link>
            <Link
              href="tel:4374459542"
              className="flex items-center justify-center gap-3 px-12 py-4 bg-white text-black font-elegant text-sm tracking-wider hover:bg-white-light transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              (437) 445-9542
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-white/60">
            <a 
              href="mailto:Premierguardservicescorp@gmail.com" 
              className="hover:text-white transition-colors tracking-wide"
            >
              Premierguardservicescorp@gmail.com
            </a>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="tracking-wider">SERVING IN CANADA</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/premierguardservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-[1.5px] border-white/30 hover:border-white flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
