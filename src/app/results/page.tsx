import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Ads for Med Spas | Results',
  description: 'AI-powered ad creative and local visibility that books more patients. See plans: Basic, Standard, Custom.',
}

const caseStudies = [
  {
    name: 'Los Angeles Med Spa',
    location: 'Los Angeles, CA',
    results: {
      leads: '28+',
      leadsLabel: 'leads per month',
      conversion: '24%',
      conversionLabel: 'consultation rate',
      roi: '285%',
      roiLabel: 'return on ad spend',
    },
    testimonial: "Our Botox and filler treatments bookings increased dramatically after implementing their targeted social media strategy. The quality of leads has been exceptional.",
    author: 'Dr. Elizabeth',
    role: 'Medical Director',
    image: '/results-1.jpg'
  },
  {
    name: 'Orange County Med Spa',
    location: 'Orange County, CA',
    results: {
      leads: '32+',
      leadsLabel: 'leads per month',
      conversion: '26%',
      conversionLabel: 'consultation rate',
      roi: '310%',
      roiLabel: 'return on ad spend',
    },
    testimonial: "The AI-driven campaign specifically targeting our body contouring services has transformed our business. Our treatment rooms are consistently booked.",
    author: 'Dr. James',
    role: 'Owner',
    image: '/results-2.jpg'
  },
  {
    name: 'West LA Med Spa',
    location: 'Westside LA, CA',
    results: {
      leads: '25+',
      leadsLabel: 'leads per month',
      conversion: '22%',
      conversionLabel: 'consultation rate',
      roi: '275%',
      roiLabel: 'return on ad spend',
    },
    testimonial: "Their marketing strategy helped us showcase our advanced facial treatments and brought in exactly the type of clients we were looking for.",
    author: 'Dr. Rachel',
    role: 'Clinical Director',
    image: '/results-3.jpg'
  }
]

const keyMetrics = [
  {
    icon: '📈',
    title: 'Lead Generation',
    value: '+28%',
    description: 'Average increase in qualified leads',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: '💰',
    title: 'Cost Per Lead',
    value: '-22%',
    description: 'Reduction in cost per acquisition',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: '⚡',
    title: 'Response Time',
    value: '<4hrs',
    description: 'Average lead response time',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: '📊',
    title: 'ROI',
    value: '285%',
    description: 'Average return on ad spend',
    color: 'from-secondary-500 to-secondary-600'
  }
]

export default function Results() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <Container className="py-20 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-8">
              <span className="mr-2">📊</span>
              Real Results from Real Med Spas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Proven Results in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> 30-60 Days</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See exactly what med spas achieve with our AI-powered marketing system. 
              Real case studies, real numbers, real growth.
            </p>
          </div>
        </Container>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the average improvements our med spa clients see within the first 60 days
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Case Studies Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
                <span className="mr-2">🏆</span>
                Success Stories
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Real Med Spas, Real Results
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how we've helped med spas across California transform their patient acquisition 
                with AI-powered marketing strategies
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {caseStudies.map((study, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                    {/* Header with image and basic info */}
                    <div className="relative p-8 pb-6">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <Image 
                            src={study.image} 
                            alt={study.author}
                            width={60}
                            height={60}
                            className="rounded-2xl object-cover"
                          />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                          <p className="text-sm text-gray-600">{study.location}</p>
                        </div>
                      </div>
                      
                      {/* Results metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                          <div className="text-2xl font-bold text-primary-600 mb-1">{study.results.leads}</div>
                          <div className="text-xs text-primary-700 font-medium">{study.results.leadsLabel}</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl">
                          <div className="text-2xl font-bold text-secondary-600 mb-1">{study.results.conversion}</div>
                          <div className="text-xs text-secondary-700 font-medium">{study.results.conversionLabel}</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                          <div className="text-2xl font-bold text-primary-600 mb-1">{study.results.roi}</div>
                          <div className="text-xs text-primary-700 font-medium">{study.results.roiLabel}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="px-8 pb-8">
                      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                        <blockquote className="text-gray-700 italic text-base leading-relaxed mb-4">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-8 h-px bg-primary-300 mr-3"></div>
                          <p className="text-sm font-semibold text-gray-900">{study.author}</p>
                          <span className="text-gray-500 mx-2">•</span>
                          <p className="text-sm text-gray-600">{study.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Summary */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4">Industry-Leading Performance</h3>
                  <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                    Our clients consistently outperform industry averages with our proven AI marketing system
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">28%</div>
                    <div className="text-sm text-primary-100 font-medium">Average Lead Increase</div>
                    <div className="text-xs text-primary-200 mt-1">vs. 8% industry avg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">24%</div>
                    <div className="text-sm text-primary-100 font-medium">Conversion Rate</div>
                    <div className="text-xs text-primary-200 mt-1">vs. 12% industry avg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">285%</div>
                    <div className="text-sm text-primary-100 font-medium">Average ROI</div>
                    <div className="text-xs text-primary-200 mt-1">vs. 150% industry avg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">30</div>
                    <div className="text-sm text-primary-100 font-medium">Days to Results</div>
                    <div className="text-xs text-primary-200 mt-1">vs. 60+ days typical</div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </Container>
      </div>

      {/* What You'll Get Section */}
      <div className="bg-white py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
                <span className="mr-2">🎯</span>
                Complete Solution
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive system includes everything from AI-powered ad creation to detailed performance tracking
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 mb-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    📊
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Dashboard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Real-time metrics, ROI tracking, and comprehensive analytics to monitor your success
                  </p>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 mb-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    📈
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Analytics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Visual progress tracking, trend analysis, and predictive insights for future growth
                  </p>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 mb-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Quality Reports</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Detailed lead source analysis, conversion tracking, and quality scoring for better targeting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32">
        <Container>
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 px-8 sm:px-16 py-16 sm:py-24 text-center shadow-2xl rounded-3xl">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white mb-8">
                <span className="mr-2">🚀</span>
                Ready to Get Started?
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Ready to See These Results for Your Med Spa?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Join the med spas already seeing 28% more leads, 24% higher conversion rates, 
                and 285% ROI with our proven AI marketing system.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Your Free Audit
                </Button>
                <div className="text-white/80 text-sm">
                  <span className="font-semibold">✓</span> No commitment required
                  <span className="mx-2">•</span>
                  <span className="font-semibold">✓</span> Results in 21 days
                </div>
              </div>
              <div className="text-white/70 text-sm">
                Trusted by 50+ med spas across California
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-white/20 to-white/10 opacity-25"></div>
            </div>
            <div className="absolute -bottom-24 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-l from-white/20 to-white/10 opacity-25"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
