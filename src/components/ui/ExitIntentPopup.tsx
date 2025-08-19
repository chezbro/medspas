'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // User's mouse has moved above the top of the viewport
        !hasShown && // Popup hasn't been shown before
        !sessionStorage.getItem('exitIntentShown') // Not shown in this session
      ) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative mx-auto max-w-4xl rounded-2xl bg-white p-6 md:p-10 shadow-2xl"
            >
              <div className="absolute right-4 top-4">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 max-w-2xl">
                <div className="flex-1 space-y-6">
                  <div>
                    <Dialog.Title as="h3" className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                      Want More Med Spa Leads?
                    </Dialog.Title>
                    <div className="mt-3 space-y-2">
                      <p className="text-lg text-gray-600 font-medium">
                        Download our free guide:
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-primary-600">
                        &quot;5 AI-Powered Strategies to Double Your Med Spa Leads&quot;
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Proven AI strategies for lead generation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Step-by-step implementation guide
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Real case studies & results
                    </li>
                  </ul>

                  <form className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-lg border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 text-base"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Get Your Free Guide Now
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}