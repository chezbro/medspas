import Link from 'next/link'
import React from 'react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-primary-50" aria-labelledby="footer-heading">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdfa,#ccfbf1)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(45,212,191,0.1),transparent)]" />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-12 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <Link href="/" className="inline-flex items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Ads for MedSpas
              </span>
            </Link>
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
              AI-powered marketing solutions for Med Spas. Generate 20+ qualified leads per month with our proven strategies.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-8 sm:gap-12 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-gray-900">Navigation</h3>
              <ul role="list" className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm sm:text-base leading-6 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm sm:text-base leading-6 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-6 sm:gap-8 border-t border-primary-100/30 pt-6 sm:pt-8 sm:mt-20 lg:mt-24 sm:flex-row">
          <p className="text-xs sm:text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Ads for MedSpas. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200">
              Privacy
            </Link>
            <div className="h-3 sm:h-4 w-px bg-gray-300" />
            <Link href="/terms" className="text-xs sm:text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
