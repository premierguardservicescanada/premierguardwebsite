'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const blogPosts = [
  {
    slug: 'essential-security-considerations',
    title: '5 Essential Security Considerations for Your Next Corporate Event',
    excerpt: 'Planning a corporate event? Discover the critical security factors that will ensure your event runs smoothly and safely.',
    author: 'Premier Guard Team',
    date: 'December 1, 2024',
    category: 'Event Security',
    image: 'https://cdn.abacus.ai/images/87a0f03f-8198-4431-84dd-8d24db9beb52.png',
    readTime: '8 min read'
  }
]

export default function BlogPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Security <span className="text-amber-500">Insights</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="text-xl text-slate-300"
          >
            Expert tips, industry insights, and security best practices from the Premier Guard team
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={postsRef} className="bg-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {blogPosts?.map?.((post, idx) => (
              <motion.article
                key={idx}
                initial="hidden"
                animate={postsInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="group bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-amber-500 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative aspect-video md:aspect-[4/3] bg-slate-800">
                    <Image
                      src={post?.image ?? ''}
                      alt={post?.title ?? ''}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                      <span className="px-3 py-1 bg-amber-600/20 text-amber-500 rounded-full border border-amber-600/30">
                        {post?.category ?? ''}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post?.date ?? ''}</span>
                      </div>
                      <span>{post?.readTime ?? ''}</span>
                    </div>

                    <Link href={`/blog/${post?.slug ?? ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-amber-500 transition-colors">
                        {post?.title ?? ''}
                      </h2>
                    </Link>

                    <p className="text-slate-400 mb-6 line-clamp-2">
                      {post?.excerpt ?? ''}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <User className="w-4 h-4" />
                        <span>{post?.author ?? ''}</span>
                      </div>

                      <Link
                        href={`/blog/${post?.slug ?? ''}`}
                        className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More posts coming soon message */}
          <motion.div
            initial="hidden"
            animate={postsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mt-12 text-center p-8 bg-slate-900 rounded-lg border border-slate-800"
          >
            <p className="text-slate-400 text-lg">
              More security insights and tips coming soon. Follow us on{' '}
              <a
                href="https://www.instagram.com/premierguardservices?igsh=aGRpNHR2ZGcxcHQz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Instagram
              </a>
              {' '}for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
