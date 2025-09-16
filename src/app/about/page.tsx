import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Ads for Med Spas | About',
  description: 'Complete AI-powered marketing solutions: video ads, Google Maps optimization, speed-to-lead systems, and paid ads management that fill your calendar with qualified patients.',
}

const testimonials = [
  {
    quote: "Our med spa's bookings increased by 40% in the first month alone. The ROI has been incredible.",
    author: "Dr. Sarah Mitchell",
    role: "Med Spa Owner",
    location: "Los Angeles, CA",
    image: "/results-1.jpg"
  },
  {
    quote: "The quality of leads we're getting is exceptional. These are clients who are ready to invest in our premium treatments.",
    author: "Jennifer Adams",
    role: "Med Spa Director",
    location: "Miami, FL",
    image: "/results-2.jpg"
  },
  {
    quote: "Finally, a marketing agency that truly understands the med spa industry. Our calendar is consistently full now.",
    author: "Michael Cohen",
    role: "Med Spa CEO",
    location: "Austin, TX",
    image: "/results-3.jpg"
  }
]

const team = [
  {
    name: 'Eric Chesbrough',
    role: 'Founder & CEO',
    credentials: '8+ Years Med Spa Marketing',
    bio: 'Former Facebook Ads Manager with deep expertise in aesthetic practice marketing. Has helped med spas scale their patient acquisition through targeted campaigns.',
    image: '/logo.png'
  },
  {
    name: 'Sarah Martinez',
    role: 'Creative Director',
    credentials: 'BFA Design, Certified in Medical Aesthetics',
    bio: 'Specializes in creating compelling visual content that resonates with med spa audiences and drives high-converting campaigns.',
    image: '/logo.png'
  },
  {
    name: 'Abeer Ahmad',
    role: 'Data Analytics Lead',
    credentials: 'MS Data Science, Google Analytics Certified',
    bio: 'Expert in tracking and optimizing med spa marketing performance with advanced attribution modeling and ROI analysis.',
    image: '/logo.png'
  }
]


const certifications = [
  { name: 'Google Ads Certified', icon: '🔍' },
  { name: 'Facebook Blueprint Certified', icon: '📘' },
  { name: 'Google Analytics Certified', icon: '📊' },
  { name: 'Better Business Bureau A+ Rating', icon: '⭐' }
]

export default function About() {
  return (
    <Container className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            The Med Spa Marketing Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're specialists who understand the unique challenges and opportunities in the med spa industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Med Spas Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">$500K+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">250%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src={member.image} alt={member.name} width={40} height={40} className="rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.credentials}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certifications & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-4 text-center">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Process Transparency */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Audit</h3>
              <p className="text-gray-700">We analyze your current ads, Google Maps presence, and identify quick wins for immediate improvement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch Campaign</h3>
              <p className="text-gray-700">New AI-powered creatives and tracking systems go live within 10 days of onboarding.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Optimize</h3>
              <p className="text-gray-700">Weekly creative refreshes, performance optimization, and transparent reporting on your ROI.</p>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Grow Your Med Spa?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join successful med spas who trust us with their marketing. Let's discuss how we can help you book more patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="hover:scale-105 transition-transform duration-300">
              Get Your Free Audit
            </Button>
            <Button href="/results" variant="secondary" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
