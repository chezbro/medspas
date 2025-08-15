import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const caseStudies = [
  {
    name: 'Beverly Hills Med Spa',
    location: 'Los Angeles, CA',
    results: {
      leads: '45+ leads per month',
      conversion: '35% consultation rate',
      roi: '450% return on ad spend',
    },
    testimonial: {
      content: "&quot;The AI-powered ads have transformed our business. We&apos;re consistently booked weeks in advance now.&quot;",
      author: 'Dr. Sarah Chen',
      role: 'Owner',
    },
  },
  {
    name: 'Glow Aesthetics',
    location: 'San Diego, CA',
    results: {
      leads: '32+ leads per month',
      conversion: '28% consultation rate',
      roi: '380% return on ad spend',
    },
    testimonial: {
      content: "Their Google Maps optimization strategy helped us dominate local search results. Our bookings have doubled.",
      author: 'Michael Rodriguez',
      role: 'Marketing Director',
    },
  },
  {
    name: 'Pure Beauty Med',
    location: 'Orange County, CA',
    results: {
      leads: '38+ leads per month',
      conversion: '32% consultation rate',
      roi: '410% return on ad spend',
    },
    testimonial: {
      content: "The combination of AI ads and local SEO has been game-changing. We're seeing better quality leads than ever before.",
      author: 'Jennifer Park',
      role: 'Founder',
    },
  },
]

const stats = [
  { name: 'Average Monthly Leads', value: '35+' },
  { name: 'Average Consultation Rate', value: '31%' },
  { name: 'Average ROI', value: '400%' },
  { name: 'Client Retention Rate', value: '92%' },
]

export default function Results() {
  return (
    <>
      {/* Hero Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Real Results for Real Med Spas
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how we&apos;ve helped med spas across the country generate more leads and grow their business with our AI-powered marketing solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary-600">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Case Studies */}
      <div className="bg-white py-24 sm:py-32">
        <Container>
          {caseStudies.map((study, index) => (
            <div
              key={study.name}
              className={`${
                index !== 0 ? 'mt-16 pt-16 border-t border-gray-200' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">{study.name}</h2>
                  <p className="mt-2 text-lg text-gray-600">{study.location}</p>
                  
                  {/* Results */}
                  <div className="mt-8 space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Results Achieved</h3>
                    <ul role="list" className="space-y-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <li key={key} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <figure className="mt-10">
                    <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                      <p>&quot;{study.testimonial.content}&quot;</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-lg text-gray-600">{study.testimonial.author[0]}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{study.testimonial.author}</div>
                        <div className="text-gray-600">{study.testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Placeholder for Loom video/screenshots */}
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400">Case Study Video/Screenshots</p>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Similar Results?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Book your free lead audit today and discover how we can help your med spa generate 20+ qualified leads per month.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/contact" variant="secondary" size="lg">
              Book Your Free Lead Audit
            </Button>
          </div>
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-400 to-primary-600 opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
