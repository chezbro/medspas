'use client'

import { motion, LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import VideoGrid from '@/components/ui/VideoGrid'

const testimonials = [
  {
    quote: "Our med spa's bookings increased by 40% in the first month alone. The ROI has been incredible.",
    author: "Dr. Sarah Mitchell",
    role: "Owner, Luminous Med Spa",
    image: "/testimonial1.jpg"
  },
  {
    quote: "The quality of leads we're getting is exceptional. These are clients who are ready to invest in our premium treatments.",
    author: "Jennifer Adams",
    role: "Director, Pure Aesthetics",
    image: "/testimonial2.jpg"
  },
  {
    quote: "Finally, a marketing agency that truly understands the med spa industry. Our calendar is consistently full now.",
    author: "Michael Chen",
    role: "CEO, Radiance Medical Spa",
    image: "/testimonial3.jpg"
  }
]

const features = [
  {
    name: 'AI-Powered Facebook & Instagram Ads',
    description: 'Our AI algorithms create and optimize high-converting ad campaigns specifically for med spas.',
    icon: '🎯',
  },
  {
    name: 'Google Maps Optimization',
    description: 'Dominate local search results and attract more clients with our proven GMB optimization strategies.',
    icon: '📍',
  },
  {
    name: 'Directory Submissions',
    description: 'Get listed on all major medical spa directories to boost your online presence and credibility.',
    icon: '📊',
  },
]

const process = [
  {
    name: 'Create AI Ads',
    description: 'Our AI analyzes successful med spa campaigns to create high-converting ad copy and visuals.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <Image 
        src="/ai-icon.svg" 
        alt="AI Icon" 
        width={32} 
        height={32} 
        className="w-8 h-8 filter brightness-0 invert"
      />
    ),
  },
  {
    name: 'Optimize Google Maps',
    description: 'We optimize your Google Business Profile to appear for high-intent local searches.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    name: 'Fill Your Calendar',
    description: 'Watch as qualified leads book consultations directly into your calendar.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      {/* Hero Section */}
      <div className="relative bg-white">
        <Container className="relative">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-x-4 text-xs"
              >
                <span className="flex items-center gap-x-1.5 rounded-full bg-primary-100 px-3 py-1.5 font-medium text-primary-700">
                  <svg className="h-1.5 w-1.5 fill-primary-700" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                  Guaranteed Results
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 sm:mt-10 max-w-2xl text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-gray-900">
                    <span className="text-primary-600">20+</span> New Clients
                  </div>
                  <div className="text-gray-900">In Your First Month</div>
                  <div className="text-lg sm:text-xl font-medium text-primary-700 bg-primary-100 px-4 py-2 rounded-full inline-block">
                    Guaranteed or Free
                  </div>
                </div>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-gray-800"
              >
                Experience the power of AI-driven marketing tailored for luxury med spas. Our proven system combines sophisticated Facebook & Instagram ads with strategic Google Maps optimization to consistently fill your calendar with high-value clients.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-x-6"
              >
                <Button href="/contact" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  Book Free Lead Audit
                </Button>
                <Button href="/results" variant="outline" size="lg">
                  See Client Results
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            >
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute inset-0 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 backdrop-blur" />
                <div className="relative rounded-2xl bg-[#FCF9F6] shadow-2xl overflow-hidden">
                  <video
                    src="/videos/beforeafter.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-none"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-2 text-center">
                    Example creative video generated by our AI platform.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Video Showcase Section */}
      <VideoGrid
        videos={[
          {
            src: 'lips.mp4',
            title: 'Advanced Lip Enhancement',
            description: 'Transform your lips with our premium dermal fillers, expertly administered for natural-looking volume and definition.'
          },
          {
            src: 'botox.mp4',
            title: 'Premium Botox Treatment',
            description: 'Experience the gold standard in wrinkle reduction with our precisely targeted Botox treatments.'
          },
          {
            src: 'laser.mp4',
            title: 'Laser Skin Rejuvenation',
            description: 'Achieve radiant, youthful skin with our state-of-the-art laser treatments for various skin concerns.'
          }
        ]}
      />

      {/* Process Section */}
      <div className="relative isolate overflow-hidden bg-primary-900 py-16 sm:py-24">
        <div className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary-100 to-primary-300 opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.3%, 63.1% 29.6%)',
            }}
          />
        </div>
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-200"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
            >
              Simple 3-Step Process
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-primary-100"
            >
              Our proven system consistently delivers qualified leads to med spas across the country.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary-500/25 transition-all duration-300">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary-100 transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-primary-100/90 leading-relaxed text-base lg:text-lg">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/0 to-primary-400/0 group-hover:from-primary-500/5 group-hover:to-primary-400/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="relative isolate bg-white py-16 sm:py-24">
        <div className="absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              Trusted by Leading Med Spas
            </motion.p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="flex flex-col justify-between bg-white shadow-lg ring-1 ring-gray-200 rounded-2xl p-6 sm:p-8 xl:p-10 hover-card-rise"
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold leading-7 tracking-tight text-gray-900">{testimonial.author}</h3>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                </div>
                <blockquote className="text-base sm:text-lg leading-7 text-gray-900">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>


      {/* Guarantee Section */}
      <Container className="py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden bg-gradient-to-r from-primary-900 to-primary-800 px-4 sm:px-6 py-16 sm:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-10" />
          <div className="absolute -z-10 h-full w-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(79,70,229,0.3),transparent)]" />
          <div className="mx-auto max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Our Performance Guarantee
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-primary-100"
            >
              <p className="mb-3 sm:mb-4">
                If we don&apos;t deliver at least 20 qualified leads in your first 30 days, you don&apos;t pay a dime.
              </p>
              <p className="text-sm text-primary-200">No questions asked. No hidden terms.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6"
            >
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Free Lead Audit
              </Button>
            </motion.div>
          </div>
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-400 to-primary-600 opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </motion.div>
      </Container>
    </LazyMotion>
  )
}