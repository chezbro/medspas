'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'

export default function Contact() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Book Your Free Lead Audit
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
            Ready to transform your med spa's marketing? Schedule a 30-minute consultation 
            and discover how we can help you generate 20+ qualified leads per month.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 sm:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Schedule Your Consultation
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Choose a time that works best for you
              </p>
            </div>
            
            <div className="calendly-inline-widget" 
                 data-url="https://calendly.com/adsformedspas/30min" 
                 style={{ minWidth: '320px', height: '700px' }}>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Can't find a time that works? <a href="mailto:hello@adsformedspas.com" className="text-primary-600 hover:text-primary-700 font-medium">Email us</a> and we'll find a time that fits your schedule.
          </p>
        </div>
      </div>
    </Container>
  )
}