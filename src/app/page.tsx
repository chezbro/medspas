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
    role: "Med Spa Owner",
    location: "Los Angeles, CA",
    image: "/testimonial1.jpg"
  },
  {
    quote: "The quality of leads we're getting is exceptional. These are clients who are ready to invest in our premium treatments.",
    author: "Jennifer Adams",
    role: "Med Spa Director",
    location: "Miami, FL",
    image: "/testimonial2.jpg"
  },
  {
    quote: "Finally, a marketing agency that truly understands the med spa industry. Our calendar is consistently full now.",
    author: "Michael Chen",
    role: "Med Spa CEO",
    location: "Austin, TX",
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
      <div className="relative bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
            {/* Mobile-first layout */}
            <div className="lg:hidden text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-x-4 text-xs mb-6"
              >
                <span className="flex items-center gap-x-1.5 rounded-full bg-primary-100 px-3 py-1.5 font-medium text-primary-700 shadow-sm">
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
                className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6"
              >
                <div className="space-y-1">
                  <div className="text-gray-900">More Qualified Leads.</div>
                  <div className="text-gray-900">Higher Revenue.</div>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg leading-7 text-gray-800 mb-8 max-w-2xl mx-auto"
              >
                AI-powered Facebook & Instagram ads + Google Maps optimization for med spas that want consistent growth.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base leading-6 text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Book a free 15-minute audit to see where your next clients will come from.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-x-6 justify-center"
              >
                <Button href="/contact" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  Book Free Audit
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  See Sample Ads
                </Button>
              </motion.div>
            </div>

            {/* Desktop layout with better proportions */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center">
              {/* Text content - takes up more space */}
              <div className="lg:col-span-7 xl:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-x-4 text-xs mb-8"
                >
                  <span className="flex items-center gap-x-1.5 rounded-full bg-primary-100 px-3 py-1.5 font-medium text-primary-700 shadow-sm">
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
                  className="text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight"
                >
                  <div className="space-y-2">
                    <div className="text-gray-900">More Qualified Leads.</div>
                    <div className="text-gray-900">Higher Revenue.</div>
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl leading-8 text-gray-800 mb-6 max-w-2xl"
                >
                  AI-powered Facebook & Instagram ads + Google Maps optimization for med spas that want consistent growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg leading-7 text-gray-600 mb-10 max-w-2xl"
                >
                  Book a free 15-minute audit to see where your next clients will come from.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-x-6"
                >
                  <Button href="/contact" size="lg" className="shadow-lg hover:shadow-xl transition-shadow text-lg px-8 py-4">
                    Book Free Audit
                  </Button>
                  <Button href="/services" variant="outline" size="lg" className="text-lg px-8 py-4">
                    See Sample Ads
                  </Button>
                </motion.div>
              </div>

              {/* Visual content - takes up less space */}
              <div className="lg:col-span-5 xl:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative mx-auto w-full max-w-xl xl:max-w-2xl space-y-6">
                    {/* Main video container */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-primary-50 to-white shadow-2xl overflow-hidden ring-1 ring-primary-100/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
                      <video
                        src="/videos/beforeafter.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-none relative z-10"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-sm px-4 py-3 text-center">
                        <span className="font-medium">AI-Generated Creative Video</span>
                        <p className="text-xs text-gray-300 mt-1">Example of our platform's capabilities</p>
                      </div>
                    </div>
                    
                    {/* Second video ad creative */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-xl overflow-hidden ring-1 ring-primary-100/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
                      <video
                        src="/videos/easy-botox.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-none relative z-10"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-sm px-4 py-3 text-center">
                        <span className="font-medium">Botox Ad Creative</span>
                        <p className="text-xs text-gray-300 mt-1">High-converting treatment video</p>
                      </div>
                    </div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full shadow-lg animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300 rounded-full shadow-lg animate-pulse animation-delay-2000" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Statistics Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/50 py-16 sm:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Proven Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              Trusted by Med Spas Nationwide
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { 
                number: "500+", 
                label: "Med Spas Served", 
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                )
              },
              { 
                number: "15,000+", 
                label: "Leads Generated", 
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                )
              },
              { 
                number: "98%", 
                label: "Client Satisfaction", 
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                )
              },
              { 
                number: "24/7", 
                label: "Support Available", 
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a6.048 6.048 0 01-1.5 0m1.5-2.383a6.048 6.048 0 00-1.5 0m0 0V9.75m0 0a6.01 6.01 0 00-1.5-.189m1.5.189a6.01 6.01 0 01-1.5-.189" />
                  </svg>
                )
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <stat.icon className="h-4 w-4 text-primary-600" />
                  </div>
                </div>
                <div className="mt-2 text-sm sm:text-base font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Results Showcase Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Real Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              See the Difference Our Marketing Makes
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              Before and after results from actual med spa clients who trusted us with their growth.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                image: "/results-1.jpg",
                title: "40% Increase in Bookings",
                description: "Dr. Sarah's med spa saw a dramatic improvement in client bookings within the first month.",
                location: "Los Angeles, CA"
              },
              {
                image: "/results-2.jpg", 
                title: "Premium Client Acquisition",
                description: "Higher-value clients booking multiple treatments and returning for follow-up services.",
                location: "Miami, FL"
              },
              {
                image: "/results-3.jpg",
                title: "Consistent Calendar Fill",
                description: "Steady stream of qualified leads resulting in fully booked appointment calendars.",
                location: "Austin, TX"
              }
            ].map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={result.image}
                      alt={result.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium text-primary-200">{result.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {result.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Our Services
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Complete Marketing Solutions
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Everything you need to grow your med spa business, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'AI Video & Ad Creative',
                description: 'Weekly refreshes tailored to Botox, fillers, laser.',
                image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                ),
              },
              {
                name: 'Google Maps Optimization',
                description: 'Profile, photos, reviews, citations to lift local visibility.',
                image: 'https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
              },
              {
                name: 'Speed-to-Lead System',
                description: 'SMS/call workflows so inquiries get contacted in minutes.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 013.5 18v-2.25z" />
                  </svg>
                ),
              },
              {
                name: 'Real-Time Dashboard',
                description: 'Leads, booking rate, and CPL—clear and transparent.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl group-hover:bg-white transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              Complete Marketing Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              Everything you need to grow your med spa business, all in one place.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: 'AI-Powered Facebook & Instagram Ads',
                description: 'Our AI algorithms create and optimize high-converting ad campaigns specifically for med spas.',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                ),
              },
              {
                name: 'Google Maps Optimization',
                description: 'Dominate local search results and attract more clients with our proven GMB optimization strategies.',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
              },
              {
                name: 'Directory Submissions',
                description: 'Get listed on all major medical spa directories to boost your online presence and credibility.',
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl mb-6 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

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
                  <div className="relative bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-8 lg:p-10 hover:bg-white hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 transition-all duration-500 ease-out">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-8 mt-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/40 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Video Showcase Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Treatment Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              See Our AI-Generated Content in Action
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              High-converting video content created specifically for med spa treatments that drive bookings.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                video: "/videos/botox.mp4",
                title: "Botox Treatments",
                description: "Professional video content showcasing Botox procedures and results",
                thumbnail: "/cup.png"
              },
              {
                video: "/videos/laser.mp4", 
                title: "Laser Treatments",
                description: "Advanced laser therapy demonstrations and before/after results",
                thumbnail: "/cup.png"
              },
              {
                video: "/videos/lips.mp4",
                title: "Lip Fillers",
                description: "Premium lip enhancement procedures and natural-looking results",
                thumbnail: "/cup.png"
              }
            ].map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="group relative"
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <video
                      src={treatment.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {treatment.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
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
              What Our Clients Say
            </motion.p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="group relative"
              >
                <div className="relative flex flex-col justify-between bg-white shadow-lg ring-1 ring-gray-200 rounded-2xl p-6 sm:p-8 xl:p-10 transition-all duration-500 hover:shadow-2xl hover:ring-primary-200 hover:-translate-y-2">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="h-8 w-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Business visual element */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src="/biz-cards.png"
                      alt="Business"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold leading-7 tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{testimonial.author}</h3>
                    <p className="text-sm leading-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{testimonial.role}</p>
                    <p className="text-xs leading-5 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.location}</p>
                  </div>
                  <blockquote className="text-base sm:text-lg leading-7 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/40 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              Everything You Need to Know
            </motion.p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will I see results?",
                  answer: "Most of our clients see their first qualified leads within 7-14 days of campaign launch. Our AI-powered system is designed to optimize quickly and start generating quality leads immediately."
                },
                {
                  question: "What makes your leads different from other agencies?",
                  answer: "Our leads are pre-qualified and specifically targeted for med spa services. We use advanced AI to identify high-intent prospects who are actively looking for aesthetic treatments and have the budget to invest in premium services."
                },
                {
                  question: "Do you work with med spas in all locations?",
                  answer: "Yes! We work with med spas across the United States. Our digital marketing strategies are location-agnostic and can be customized for any market, from major metropolitan areas to smaller communities."
                },
                {
                  question: "What's included in your guarantee?",
                  answer: "We guarantee at least 20 qualified leads in your first 30 days, or you don't pay anything. This includes leads who book consultations, request quotes, or show genuine interest in your services."
                },
                {
                  question: "How do you ensure lead quality?",
                  answer: "We use advanced targeting, AI-powered ad optimization, and multi-step qualification processes. Every lead is verified for genuine interest and budget qualification before being sent to your practice."
                },
                {
                  question: "Can I cancel if I'm not satisfied?",
                  answer: "Absolutely. We're confident in our results, but if you're not completely satisfied with our service, you can cancel at any time with no long-term contracts or hidden fees."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Trust Indicators Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Trusted & Certified
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
            >
              Industry Recognition & Certifications
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                title: "Google Partner",
                description: "Certified Google Ads Partner with advanced optimization expertise",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                )
              },
              {
                title: "Meta Certified",
                description: "Official Meta Business Partner for Facebook & Instagram advertising",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                )
              },
              {
                title: "HIPAA Compliant",
                description: "Fully compliant with healthcare privacy regulations",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              },
              {
                title: "5-Star Rated",
                description: "Consistently rated 5 stars by our med spa clients",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                )
              }
            ].map((indicator, index) => (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full mx-auto mb-6 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300">
                    <indicator.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {indicator.description}
                  </p>
                </div>
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
                We aim for 20+ qualified inquiries in the first 30 days. If we miss it, we&apos;ll comp our management fee until we hit it.
              </p>
              <p className="text-sm text-primary-200">
                Client responsibilities: maintain agreed ad spend, approve creatives within 48h, use our tracking, and respond to new leads within 5 minutes during business hours.
              </p>
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

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <Container>
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display">
                Ready to Transform Your Med Spa?
              </h2>
              <p className="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">
                Join hundreds of successful med spas who trust us to fill their calendars with high-value clients. 
                Start your free lead audit today and see the difference AI-powered marketing can make.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-900 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-4"
                >
                  Book Free Audit
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4"
                >
                  See Sample Ads
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-primary-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Results in 7-14 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </LazyMotion>
  )
}