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
              className="relative mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg"
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

              <div className="text-center">
                <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                  Want More Med Spa Leads?
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-lg text-gray-500">
                    Download our free guide:
                  </p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">
                    "5 AI-Powered Strategies to Double Your Med Spa Leads"
                  </p>
                </div>

                <form className="mt-8">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                  <Button className="mt-4 w-full" size="lg">
                    Get Free Guide
                  </Button>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
