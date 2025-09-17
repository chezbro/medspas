'use client'

import { useState } from 'react'
import EmailCaptureForm from '@/components/ui/EmailCaptureForm'

export default function PlaybookPage() {
  const [showDownload, setShowDownload] = useState(false)

  const handleEmailSuccess = () => {
    setShowDownload(true)
  }

  const handleDownload = () => {
    // Create a temporary link to download the file
    const link = document.createElement('a')
    link.href = '/MedSpa-Growth-Playbook.pdf'
    link.download = 'MedSpa-Growth-Playbook.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 sm:pt-28 lg:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free MedSpa Growth Playbook
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the proven strategies that successful medspas use to attract more clients and increase revenue
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What's Inside Your Free Playbook:
            </h2>
            
            <ul className="max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-start justify-center">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-center">Proven marketing strategies for medspas</span>
              </li>
              <li className="flex items-start justify-center">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-center">Client acquisition techniques</span>
              </li>
              <li className="flex items-start justify-center">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-center">Revenue optimization strategies</span>
              </li>
              <li className="flex items-start justify-center">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-center">Operational best practices</span>
              </li>
            </ul>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-blue-800 font-medium">
                🎯 This playbook is based on real results from successful medspas across the country
              </p>
            </div>

            {!showDownload ? (
              <div className="max-w-md mx-auto">
                <EmailCaptureForm onSuccess={handleEmailSuccess} />
                <p className="text-sm text-gray-500 mt-4">
                  We'll send you the playbook instantly after you enter your email
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium text-lg">
                    ✅ Email verified! Your playbook is ready to download.
                  </p>
                </div>
                
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Your Free Playbook
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Thank you! Your download will start automatically.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-2">
            <strong>Already downloaded?</strong> Check out our other resources to help grow your medspa business.
          </p>
          <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
            View Our Services →
          </a>
        </div>
      </div>
    </div>
  )
}
