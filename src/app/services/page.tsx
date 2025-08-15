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

const pricingFeatures = [
  'AI-powered Facebook & Instagram ad management',
  'Google Maps optimization',
  'Directory submission & management',
  'Custom landing pages',
  'Lead tracking dashboard',
  'Weekly strategy calls',
  'Monthly performance reports',
  'Dedicated account manager',
  '24/7 email support',
  'Performance guarantee',
]

export default function Services() {
  return (
    <>
      {/* Services Overview */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Med Spa Marketing Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive marketing package is designed specifically for med spas looking to attract more high-value clients and grow their business.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{service.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 text-sm">
                      <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              One comprehensive package that includes everything you need to grow your med spa.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">All-Inclusive Marketing Package</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Get everything you need to generate 20+ qualified leads per month for your med spa.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">What&apos;s included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Monthly Investment</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$2,500</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/month</span>
                  </p>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    No long-term contracts. Cancel anytime.
                  </p>
                  <Button href="/contact" className="mt-10 w-full" size="lg">
                    Book Free Lead Audit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Guarantee */}
          <div className="mt-24 rounded-3xl bg-white p-8 shadow-lg sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Performance Guarantee</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We&apos;re so confident in our ability to deliver results that we offer a performance guarantee. If we don&apos;t deliver at least 20 qualified leads in your first 30 days, you don&apos;t pay a dime. No questions asked.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline" size="lg">
                Schedule Your Free Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Ad Creative Examples */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sample Ad Creatives</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some examples of high-converting ad creatives our AI has generated for med spas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for ad creative examples */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="aspect-[4/5] rounded-2xl bg-gray-100 p-8 flex items-center justify-center"
            >
              <p className="text-gray-400">Ad Creative Example {index}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
