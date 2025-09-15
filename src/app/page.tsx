'use client'

import { useState } from 'react'
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
      <div className="relative">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 1-3m-1 3h-2.25M9 12.75l3 3m0 0 3-3m-3 3V9.75" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>
    ),
  },
  {
    name: 'Optimize Google Maps',
    description: 'We optimize your Google Business Profile to appear for high-intent local searches.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <div className="relative">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
      </div>
    ),
  },
  {
    name: 'Fill Your Calendar',
    description: 'Watch as qualified leads book consultations directly into your calendar.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <div className="relative">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
      </div>
    ),
  },
]

export default function Home() {
  const [expandedGuarantee, setExpandedGuarantee] = useState<number | null>(null)

  const toggleGuarantee = (index: number) => {
    setExpandedGuarantee(expandedGuarantee === index ? null : index)
  }

  return (
    <LazyMotion features={domAnimation}>
      {/* AI Announcement Banner */}
      <div className="bg-primary-50 border-b border-primary-100">
        <Container>
          <div className="py-3 text-center">
            <p className="text-sm font-medium text-primary-700 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              New AI-Powered Marketing is now available
            </p>
          </div>
        </Container>
        </div>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <Container className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:py-40">
            {/* Centered layout for modern design */}
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight"
              >
                Turn Scattered Marketing Into
                <br />
                <span className="text-primary-600">Seamless Growth</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl leading-8 text-gray-600 mb-12 max-w-3xl mx-auto"
              >
                AI-powered Facebook & Instagram ads + Google Maps optimization brings qualified leads and revenue together so your Med Spa can focus on growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
              >
                <Button href="/contact" size="lg" className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-4 font-semibold">
                  Book a Free Consultation
                </Button>
                <Button href="/services" size="lg" className="bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-4">
                  Learn More
                </Button>
              </motion.div>

              {/* Disclaimer */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-gray-500 mb-16"
                >
                No credit card required
                </motion.p>

              {/* Main Product Screenshot/Demo */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative mx-auto max-w-5xl"
              >
                <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden ring-1 ring-gray-200/50 hover:shadow-3xl transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                      <video
                        src="/videos/beforeafter.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      className="w-full h-full object-none"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Trusted by Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
            >
              Trusted by thousands of Med Spas
            </motion.h2>
          </div>
          
          {/* Company logos placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {[
              "MedSpa Pro", "Aesthetic Partners", "Beauty Collective", 
              "Wellness Group", "Spa Solutions", "Beauty Network"
            ].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-gray-400 font-medium text-sm"
              >
                {company}
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
                      className="object-none group-hover:scale-105 transition-transform duration-500"
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
                      className="object-none group-hover:scale-105 transition-transform duration-500"
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
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-gray-500 mb-4"
            >
              Our Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Features To Boost Your Productivity
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Everything you need to plan, track, and deliver on all your marketing goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Adaptive Organizer',
                description: 'AI-powered campaign management that automatically optimizes your ad performance and budget allocation.',
                image: '/computer.png'
              },
              {
                name: 'Templates & Workflows',
                description: 'Pre-built campaign templates and automated workflows designed specifically for med spa marketing.',
                image: '/file.svg'
              },
              {
                name: 'Collaboration Made Easy',
                description: 'Seamless team collaboration with real-time updates, shared dashboards, and instant communication.',
                image: '/globe.svg'
              },
              {
                name: 'Progress Tracking',
                description: 'Comprehensive analytics and reporting to track your marketing performance and growth metrics.',
                image: '/window.svg'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Feature Screenshot Placeholder */}
                  <div className="relative mb-6">
                    <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 opacity-60"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* How It Works Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-gray-500 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Get Started in 3 Simple Steps
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Three steps to set up your marketing and get your med spa growing.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.name}
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Step Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl mx-auto flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                      <step.icon className="h-10 w-10 text-primary-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                        {step.name}
                      </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                      className="w-full h-full object-none group-hover:scale-105 transition-transform duration-500"
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

      {/* Success Stories Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-gray-500 mb-4"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Why Teams Love Working With Us
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Real feedback from Med Spas who simplified their marketing with our platform.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Quote */}
                  <blockquote className="text-gray-900 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
                  </div>
                  
      {/* Pricing Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Simple, Transparent Pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect package for your med spa's growth stage and scale as you grow.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  name: 'Essentials',
                  price: '$1,999',
                  description: 'Basic package for med spas just getting started with digital marketing.',
                  features: [
                    'Basic Meta ads setup',
                    'Simple Maps optimization',
                    'Monthly reporting only',
                    'Email support (48hr response)',
                    'Performance guarantee (10+ leads/month)',
                    'Standard ad templates',
                    'No retargeting campaigns',
                    'No creative refreshes',
                  ],
                  cta: 'Schedule Your Strategy Call',
                  popular: false,
                },
                {
                  name: 'Growth',
                  price: '$2,999',
                  description: 'Most Popular - Complete marketing solution with AI optimization and premium support.',
                  features: [
                    'Advanced AI-powered Meta ads management',
                    'Complete Google Maps optimization',
                    'Weekly creative refreshes & A/B testing',
                    'Advanced retargeting campaigns',
                    'Weekly detailed reporting & analytics',
                    'Dedicated account manager',
                    '24/7 priority email support',
                    'Performance guarantee (20+ leads/month)',
                    'Custom landing page creation',
                    'Advanced audience targeting',
                    'Competitor analysis & optimization',
                    'Lead quality scoring & filtering',
                  ],
                  cta: 'Schedule Your Strategy Call',
                  popular: true,
                },
                {
                  name: 'Scale',
                  price: 'Custom',
                  description: 'Enterprise solution for multi-location med spa chains and franchises.',
                  features: [
                    'Everything in Growth, plus:',
                    'Multi-location management (unlimited)',
                    'Advanced analytics & custom reporting',
                    'Custom AI model training',
                    'Priority phone & video support',
                    'Dedicated success manager',
                    'Custom integrations & API access',
                    'White-label reporting & branding',
                    'Performance guarantee (50+ leads/month)',
                    'Custom campaign strategies',
                    'Advanced attribution tracking',
                    'Dedicated onboarding specialist',
                  ],
                  cta: 'Contact Sales',
                  popular: false,
                },
              ].map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-500 hover:shadow-2xl hover:ring-primary-200 hover:-translate-y-2 flex flex-col ${tier.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}>
                    {/* Header */}
                    <div className="px-6 py-8 sm:px-8 sm:py-12">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl group-hover:text-primary-600 transition-colors duration-300">
                          {tier.name}
                        </h3>
                        <p className="mt-4 text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {tier.description}
                        </p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-gray-200 px-6 py-8 sm:px-8 sm:py-12">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-x-2">
                          <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl group-hover:text-primary-600 transition-colors duration-300">{tier.price}</span>
                          {tier.price !== 'Custom' && <span className="text-lg font-semibold text-gray-600">/month</span>}
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                          No long-term contracts. Cancel anytime.
                        </p>
                        <div className="mt-8">
                          <Button 
                            href={tier.name === 'Scale' ? '/contact' : '/contact'} 
                            className={`w-full transition-all duration-300 ${tier.popular ? 'bg-primary-600 hover:bg-primary-700 hover:scale-105' : 'hover:scale-105'}`} 
                            variant={tier.popular ? 'primary' : 'outline'}
                            size="lg"
                          >
                            {tier.cta}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="border-t border-gray-200 px-6 py-8 sm:px-8 sm:py-12">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Everything included:</h4>
                        <ul className="space-y-3">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-x-3">
                              <svg className="h-5 w-5 flex-none text-primary-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Performance Guarantee Dropdown */}
                    <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-3xl mt-auto">
                      <button
                        onClick={() => toggleGuarantee(index)}
                        className="w-full px-6 py-4 text-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <h4 className="text-lg font-semibold text-gray-900">Our Performance Guarantee</h4>
                          <svg
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${expandedGuarantee === index ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {expandedGuarantee === index && (
                        <div className="px-6 pb-6 text-center animate-in slide-in-from-top-2 duration-200">
                          <p className="text-sm text-gray-600 mb-6 text-center">
                            We aim for 20+ qualified inquiries in the first 30 days. If we miss it, we&apos;ll comp our management fee until we hit it. Client responsibilities: maintain agreed ad spend, approve creatives within 48h, use our tracking, and respond to new leads within 5 minutes during business hours.
                          </p>
                          <Button href="/contact" variant="outline" size="md" className="hover:scale-105 transition-transform duration-300 mx-auto">
                            Schedule Your Strategy Call
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/40 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 sm:mt-24 mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
              Trusted by Med Spas Nationwide
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Qualified Leads/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">7-14</div>
                <div className="text-sm text-gray-600">Days to First Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Email Support</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-gray-500 mb-4"
            >
              FAQ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Frequently Asked Questions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Answers to common questions before you get started.
            </motion.p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
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
                },
                {
                  question: "Can't find what you're looking for? Contact Us",
                  answer: ""
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
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
                Book Your Strategy Call
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

      {/* Integrations Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-gray-500 mb-4"
            >
              Integrations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Stay Connected With Your Favorite Apps
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Integrate with the tools your Med Spa already uses.
            </motion.p>
        </div>
          
          {/* Integration Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {[
              "Facebook", "Instagram", "Google Ads", "Google Maps", "Mailchimp", "Calendly",
              "Slack", "Zapier", "HubSpot", "Salesforce", "QuickBooks", "Stripe"
            ].map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-gray-400 font-medium text-sm text-center"
              >
                {app}
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Final CTA Section */}
      <div className="relative bg-primary-600 py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to Supercharge Your Med Spa's Growth?
              </h2>
              <p className="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">
                Start today and see how easy marketing can be with our AI-powered platform.
              </p>
              
                <Button
                  href="/contact"
                  size="lg"
                className="bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-4"
                >
                Get Started
                </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </LazyMotion>
  )
}