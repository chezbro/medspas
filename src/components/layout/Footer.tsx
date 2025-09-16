import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navigation = {
  main: [
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4 flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Ads for MedSpas Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  Ads for MedSpas
                </span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                AI-powered creative + local visibility that books more med spa patients.
              </p>
              
              {/* Contact info */}
              <div className="space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>Email:</strong> <a href="mailto:eric@adsformedspas.com" className="text-blue-600 hover:text-blue-700">eric@adsformedspas.com</a>
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Book:</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-700">Schedule Audit</Link>
                </p>
              </div>
            </div>

            {/* Navigation links */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
                  <ul className="space-y-3">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ads for MedSpas. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
