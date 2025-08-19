'use client'

import { motion } from 'framer-motion'
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
    icon: '🤖',
  },
  {
    name: 'Optimize Google Maps',
    description: 'We optimize your Google Business Profile to appear for high-intent local searches.',
    icon: '🗺️',
  },
  {
    name: 'Fill Your Calendar',
    description: 'Watch as qualified leads book consultations directly into your calendar.',
    icon: '📅',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-100 to-primary-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-x-4 text-xs"
              >
                <span className="flex items-center gap-x-1.5 rounded-full bg-primary-100 px-3 py-1.5 font-medium text-primary-600">
                  <svg className="h-1.5 w-1.5 fill-primary-600" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                  Guaranteed Results
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 sm:mt-10 max-w-xl text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display"
              >
                20+ New Med Spa Leads in 30 Days
                <span className="mt-2 sm:mt-4 block text-primary-600">or you don&apos;t pay</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
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
              <div className="relative mx-auto w-full max-w-lg">
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
                    className="w-full h-auto object-none"
                  />
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
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {process.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                  className="relative group bg-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all hover-card-rise"
                >
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-primary-600 group-hover:bg-primary-500 transition-colors">
                      <span className="text-xl sm:text-2xl text-white">{step.icon}</span>
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-primary-100">{step.description}</dd>
                </motion.div>
              ))}
            </dl>
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
    </>
  )
}