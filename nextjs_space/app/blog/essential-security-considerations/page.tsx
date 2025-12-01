'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function BlogPostPage() {
  const [shareStatus, setShareStatus] = useState('')

  const handleShare = async () => {
    try {
      if (navigator?.share) {
        await navigator.share({
          title: '5 Essential Security Considerations for Your Next Corporate Event',
          text: 'Check out this article from Premier Guard Services',
          url: window?.location?.href ?? ''
        })
        setShareStatus('Thanks for sharing!')
      } else {
        // Fallback: copy to clipboard
        await navigator?.clipboard?.writeText(window?.location?.href ?? '')
        setShareStatus('Link copied to clipboard!')
      }
      setTimeout(() => setShareStatus(''), 3000)
    } catch (error) {
      console.error('Share error:', error)
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* Back Navigation */}
      <section className="bg-slate-900 py-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-500 rounded-full border border-amber-600/30 text-sm mb-6">
              Event Security
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              5 Essential Security Considerations for Your Next Corporate Event
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Premier Guard Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>December 1, 2024</span>
              </div>
              <span>8 min read</span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                {shareStatus || 'Share'}
              </button>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/87a0f03f-8198-4431-84dd-8d24db9beb52.png"
                alt="Professional security at corporate event"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="prose prose-invert prose-amber max-w-none"
          >
            <div className="text-lg text-slate-300 space-y-6">
              <p className="text-xl leading-relaxed">
                Planning a corporate event involves countless details, from venue selection to catering arrangements. 
                However, one critical aspect that often doesn't get the attention it deserves until it's too late is security. 
                Whether you're organizing a product launch, annual gala, or executive retreat, proper security planning can 
                make the difference between a successful event and a potential disaster.
              </p>

              <p>
                At Premier Guard Services, we've secured hundreds of corporate events across Toronto and the GTA. 
                Based on our experience, here are five essential security considerations every event organizer should address.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Conduct a Comprehensive Risk Assessment</h2>
              
              <p>
                Before you can develop an effective security plan, you need to understand the potential risks specific to your event. 
                A thorough risk assessment considers multiple factors:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Event size and attendee profile:</strong> A 50-person executive dinner requires different security than a 500-person product launch</li>
                <li><strong className="text-white">Venue characteristics:</strong> Multiple entry points, parking areas, and building layout all impact security needs</li>
                <li><strong className="text-white">VIP attendance:</strong> High-profile guests may require additional protection measures</li>
                <li><strong className="text-white">Asset protection:</strong> Valuable equipment, products, or displays need specific security protocols</li>
                <li><strong className="text-white">Time and location:</strong> Evening events in busy urban areas present different challenges than daytime suburban gatherings</li>
              </ul>

              <p>
                Work with your security provider to walk through the venue and identify potential vulnerabilities. 
                This assessment forms the foundation of your security plan.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Implement Effective Access Control</h2>
              
              <p>
                Controlling who enters your event is fundamental to security. A professional access control system serves multiple purposes: 
                it prevents unauthorized entry, helps manage capacity, and creates a guest database for safety purposes.
              </p>

              <p>
                Modern access control goes beyond simple guest list checking. Consider these elements:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Multiple credential options:</strong> QR codes, RFID badges, or biometric systems depending on your security needs</li>
                <li><strong className="text-white">Security checkpoints:</strong> Strategically placed entry points with trained personnel</li>
                <li><strong className="text-white">Guest verification process:</strong> Clear procedures for checking identification against invitation lists</li>
                <li><strong className="text-white">VIP separation:</strong> Dedicated entry points for executives or special guests when appropriate</li>
                <li><strong className="text-white">Late arrival protocols:</strong> Procedures for handling guests who arrive after initial check-in</li>
              </ul>

              <p>
                Professional security guards trained in customer service can perform access control efficiently while maintaining 
                a welcoming atmosphere that reflects well on your organization.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Plan for Emergency Response</h2>
              
              <p>
                Hope for the best, but prepare for the worst. Every corporate event needs a comprehensive emergency response plan 
                that addresses various scenarios from medical emergencies to evacuation needs.
              </p>

              <p>
                Your emergency response plan should include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Clear chain of command:</strong> Everyone knows who's in charge during an emergency</li>
                <li><strong className="text-white">Communication systems:</strong> Reliable methods for security team coordination (radios, mobile apps, etc.)</li>
                <li><strong className="text-white">Evacuation routes:</strong> Clearly marked exits and designated assembly points</li>
                <li><strong className="text-white">First aid capabilities:</strong> On-site personnel with appropriate medical training and equipment</li>
                <li><strong className="text-white">Emergency contacts:</strong> Quick access to local police, fire, and medical services</li>
                <li><strong className="text-white">Incident documentation:</strong> Procedures for recording and reporting any security events</li>
              </ul>

              <p>
                Conduct a pre-event briefing with your security team and key staff members to ensure everyone understands their 
                role in case of an emergency. This preparation can save crucial seconds when time matters most.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Maintain Visible Security Presence</h2>
              
              <p>
                The presence of professional security personnel serves two important functions: active threat prevention and 
                psychological reassurance. When attendees see uniformed guards, they feel safer, and potential troublemakers 
                think twice.
              </p>

              <p>
                Effective visible security involves strategic positioning:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Entry and exit coverage:</strong> Guards at all access points throughout the event</li>
                <li><strong className="text-white">Roving patrols:</strong> Regular circulation through event spaces, parking areas, and perimeter zones</li>
                <li><strong className="text-white">Strategic observation points:</strong> Positions that provide clear sightlines across gathering areas</li>
                <li><strong className="text-white">Asset protection:</strong> Dedicated guards for valuable equipment, displays, or restricted areas</li>
              </ul>

              <p>
                The key is finding the right balance. Security should be visible enough to deter problems and provide reassurance, 
                but not so overwhelming that it makes guests feel uncomfortable or changes the event atmosphere.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Coordinate with Venue and Vendors</h2>
              
              <p>
                Security doesn't operate in isolation. Successful event security requires coordination with your venue, catering 
                staff, AV technicians, and other vendors. Everyone should understand security protocols and how they fit into the 
                overall event plan.
              </p>

              <p>
                Key coordination points include:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Vendor access:</strong> Clear procedures for delivery personnel and service providers entering the event space</li>
                <li><strong className="text-white">Load-in/load-out security:</strong> Protection during setup and breakdown when equipment is vulnerable</li>
                <li><strong className="text-white">Venue liaison:</strong> Direct contact with venue security or management for facility-specific concerns</li>
                <li><strong className="text-white">Communication channels:</strong> Shared methods for different teams to report issues or request assistance</li>
                <li><strong className="text-white">Timeline synchronization:</strong> Security staffing levels adjusted to match event flow and vendor schedules</li>
              </ul>

              <p>
                Schedule a pre-event coordination meeting with all major vendors and venue staff. Walk through the security plan 
                and address any questions or concerns. This collaboration ensures everyone works together smoothly during the event.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Putting It All Together</h2>
              
              <p>
                These five considerations form the foundation of effective corporate event security. However, remember that every 
                event is unique, and your security plan should be customized to address your specific needs, venue, and attendee profile.
              </p>

              <p>
                The best approach is to work with an experienced security provider who can help you assess risks, develop appropriate 
                protocols, and provide trained personnel who understand corporate event dynamics. At Premier Guard Services, we specialize 
                in creating security solutions that protect your event while maintaining a professional, welcoming atmosphere.
              </p>

              <p className="text-xl font-semibold text-white mt-8">
                Planning your next corporate event? Contact Premier Guard Services to discuss your security needs and receive a 
                customized quote. Our experienced team is ready to help ensure your event is both successful and secure.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-12 p-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Security for Your Corporate Event?
            </h3>
            <p className="text-amber-100 mb-6">
              Get a customized security plan and quote from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
