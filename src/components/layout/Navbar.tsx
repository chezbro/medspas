'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
  { name: 'Book', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Ads for MedSpas</span>
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Ads for MedSpas Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Ads for MedSpas
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Book Free Audit
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">Ads for MedSpas</span>
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Ads for MedSpas Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Ads for MedSpas
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="block rounded-full bg-primary-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors whitespace-nowrap"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Free Audit
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}