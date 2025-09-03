import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const caseStudies = [
  {
    name: 'Med Spa #1',
    location: 'Beverly Hills',
    results: {
      leads: '52+ leads per month',
      conversion: '38% consultation rate',
      roi: '480% return on ad spend',
    },
    testimonial: {
      content: "Our Botox and filler treatments bookings increased dramatically after implementing their targeted social media strategy. The quality of leads has been exceptional.",
      author: 'Dr. Elizabeth',
      role: 'Medical Director',
    },
  },
  {
    name: 'Med Spa #2',
    location: 'Newport Beach',
    results: {
      leads: '45+ leads per month',
      conversion: '42% consultation rate',
      roi: '520% return on ad spend',
    },
    testimonial: {
      content: "The AI-driven campaign specifically targeting our body contouring services has transformed our business. Our treatment rooms are consistently booked.",
      author: 'Dr. James',
      role: 'Owner',
    },
  },
  {
    name: 'Med Spa #3',
    location: 'Marina Del Rey',
    results: {
      leads: '48+ leads per month',
      conversion: '35% consultation rate',
      roi: '460% return on ad spend',
    },
    testimonial: {
      content: "Their marketing strategy helped us showcase our advanced facial treatments and brought in exactly the type of clients we were looking for.",
      author: 'Dr. Rachel',
      role: 'Clinical Director',
    },
  },
]

const stats = [
  { name: 'Average Monthly Leads', value: '48+' },
  { name: 'Average Consultation Rate', value: '38%' },
  { name: 'Average ROI', value: '485%' },
  { name: 'Client Retention Rate', value: '95%' },
]

export default function Results() {
  return (
    <>
      {/* Hero Section */}
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Real Results for Real Med Spas
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            See how we&apos;ve helped med spas across the country generate more leads and grow their business with our AI-powered marketing solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:ring-primary-200 hover:-translate-y-1 transition-all duration-300">
              <dt className="text-xs sm:text-sm font-semibold leading-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.name}</dt>
              <dd className="order-first text-2xl sm:text-3xl font-bold tracking-tight text-primary-600 group-hover:text-primary-700 transition-colors duration-300">{stat.value}</dd>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </dl>
      </Container>

      {/* Case Studies */}
      <div className="bg-white py-16 sm:py-24">
        <Container>
          {caseStudies.map((study, index) => (
            <div
              key={study.name}
              className={`group ${
                index !== 0 ? 'mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{study.name}</h2>
                  <p className="mt-2 text-base sm:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{study.location}</p>
                  
                  {/* Results */}
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Results Achieved</h3>
                    <ul role="list" className="space-y-3 sm:space-y-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <li key={key} className="flex gap-x-3 group/item">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <figure className="mt-8 sm:mt-10">
                    <blockquote className="text-base sm:text-lg font-semibold leading-7 sm:leading-8 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      <p>&quot;{study.testimonial.content}&quot;</p>
                    </blockquote>
                    <figcaption className="mt-4 sm:mt-6 flex items-center gap-x-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <span className="text-sm sm:text-lg text-primary-700 font-semibold">{study.testimonial.author[0]}</span>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{study.testimonial.author}</div>
                        <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{study.testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary-50/40 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                </div>

                {/* Case Study Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                  <img
                    src={`/results-${index + 1}.jpg`}
                    alt={`${study.name} Results`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-16 sm:py-24">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 py-16 sm:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Similar Results?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Book your free lead audit today and discover how we can help your med spa generate 20+ qualified leads per month.
          </p>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
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
