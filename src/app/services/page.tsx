import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const services = [
  {
    name: 'AI-Powered Facebook & Instagram Ads',
    description: 'Our proprietary AI algorithms analyze thousands of successful med spa campaigns to create high-converting ad copy and visuals.',
    features: [
      'Custom audience targeting',
      'A/B testing of ad creatives',
      'Dynamic ad optimization',
      'Retargeting campaigns',
      'Weekly performance reports',
    ],
  },
  {
    name: 'Google Maps Optimization',
    description: 'Dominate local search results and attract more clients with our proven Google Business Profile optimization strategies.',
    features: [
      'Keyword-rich business description',
      'Photo optimization',
      'Review management',
      'Local citation building',
      'Competitor analysis',
    ],
  },
  {
    name: 'Directory Submissions',
    description: 'Get listed on all major medical spa directories to boost your online presence and credibility.',
    features: [
      'RealSelf profile optimization',
      'Yelp business optimization',
      'Medical directory listings',
      'Local business directories',
      'Regular listing updates',
    ],
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$1,500',
    description: 'Perfect for new med spas looking to establish their online presence.',
    features: [
      'AI-powered Facebook & Instagram ad management',
      'Google Maps optimization',
      'Directory submission & management',
      'Basic landing page',
      'Lead tracking dashboard',
      'Bi-weekly strategy calls',
      'Monthly performance reports',
      'Email support',
      'Performance guarantee (10+ leads/month)',
    ],
    cta: 'Start Your Free Lead Audit',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$2,500',
    description: 'Our most popular package for established med spas ready to scale.',
    features: [
      'AI-powered Facebook & Instagram ad management',
      'Google Maps optimization',
      'Directory submission & management',
      'Custom landing pages',
      'Advanced lead tracking dashboard',
      'Weekly strategy calls',
      'Monthly performance reports',
      'Dedicated account manager',
      '24/7 email support',
      'Performance guarantee (20+ leads/month)',
      'A/B testing of ad creatives',
      'Retargeting campaigns',
    ],
    cta: 'Start Your Free Lead Audit',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For multi-location med spas and large healthcare groups.',
    features: [
      'Everything in Professional, plus:',
      'Multi-location management',
      'Advanced analytics & reporting',
      'Custom AI model training',
      'Priority phone support',
      'Dedicated success manager',
      'Custom integrations',
      'White-label options',
      'Performance guarantee (50+ leads/month)',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Services() {
  return (
    <>
      {/* Services Overview */}
      <Container className="py-16 sm:py-24">
        {/* Hero Section with Visual Elements */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-100 to-secondary-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              AI-Powered Marketing Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Med Spa Marketing{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Our comprehensive marketing package is designed specifically for med spas looking to attract more high-value clients and grow their business.
            </p>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Qualified Leads/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Performance Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with Enhanced Cards */}
        <div className="mx-auto mt-20 sm:mt-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {services.map((service, index) => (
              <div key={service.name} className="group relative">
                {/* Card with hover effects */}
                <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-primary-200 hover:-translate-y-1">
                  {/* Service icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <svg className="h-6 w-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      {index === 0 && (
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      )}
                      {index === 1 && (
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      )}
                      {index === 2 && (
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-base leading-7 text-gray-600 mb-6">{service.description}</p>
                  
                  <ul role="list" className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 text-sm">
                        <svg className="h-5 w-5 flex-none text-primary-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

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
              {pricingTiers.map((tier) => (
                <div key={tier.name} className={`relative rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 ${tier.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105' : ''}`}>
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="px-6 py-8 sm:px-8 sm:py-12">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {tier.name}
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        {tier.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-gray-200 px-6 py-8 sm:px-8 sm:py-12">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-x-2">
                        <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{tier.price}</span>
                        {tier.price !== 'Custom' && <span className="text-lg font-semibold text-gray-600">/month</span>}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        No long-term contracts. Cancel anytime.
                      </p>
                      <div className="mt-8">
                        <Button 
                          href={tier.name === 'Enterprise' ? '/contact' : '/contact'} 
                          className={`w-full ${tier.popular ? 'bg-primary-600 hover:bg-primary-700' : ''}`} 
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

                  {/* Performance Guarantee */}
                  <div className="border-t border-gray-200 px-6 py-8 sm:px-8 sm:py-12 bg-gray-50 rounded-b-3xl">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Performance Guarantee</h4>
                      <p className="text-sm text-gray-600 mb-6">
                        We&apos;re so confident in our ability to deliver results that we offer a performance guarantee. If we don&apos;t deliver the promised leads in your first 30 days, you don&apos;t pay a dime. No questions asked.
                      </p>
                      <Button href="/contact" variant="outline" size="lg">
                        Schedule Your Free Strategy Call
                      </Button>
                    </div>
                  </div>
                </div>
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
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Performance Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Email Support</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Ad Creative Examples */}
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sample Ad Creatives</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Here are some examples of high-converting ad creatives our AI has generated for med spas.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: '/videos/lips.mp4', title: 'Lip Filler Treatment' },
            { src: '/videos/botox.mp4', title: 'Botox Treatment' },
            { src: '/videos/laser.mp4', title: 'Laser Treatment' },
          ].map((video) => (
            <div
              key={video.src}
              className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden relative"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <p className="text-sm sm:text-base text-white font-semibold">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
