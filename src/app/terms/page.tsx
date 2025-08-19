import Container from '@/components/ui/Container'

export default function Terms() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <div className="mt-6 sm:mt-10 prose prose-sm sm:prose-lg prose-primary max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
          </p>

          <h2>2. Description of Services</h2>
          <p>
          Ads for MedSpas provides digital marketing services including but not limited to:
          </p>
          <ul>
            <li>AI-powered Facebook and Instagram advertising</li>
            <li>Google Maps optimization</li>
            <li>Directory submissions and management</li>
            <li>Marketing strategy consulting</li>
          </ul>

          <h2>3. Performance Guarantee</h2>
          <p>
            Our &quot;20+ Leads or You Don&apos;t Pay&quot; guarantee is subject to the following conditions:
          </p>
          <ul>
            <li>Minimum 3-month commitment</li>
            <li>Adherence to our recommended strategies</li>
            <li>Timely approval of ad creatives and content</li>
            <li>Maintenance of required marketing budget</li>
            <li>Proper tracking implementation</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Services are billed monthly at $2,500 per month. Payment is due in advance of services. We accept major credit cards and bank transfers.
          </p>

          <h2>5. Cancellation Policy</h2>
          <p>
            You may cancel services at any time with 30 days written notice. No refunds will be issued for partially used service periods.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on our website belong to Ads for MedSpas. You may not use our intellectual property without express written permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            We strive to provide the best service possible but cannot guarantee specific results. Our liability is limited to the amount paid for services.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Ads for MedSpas from any claims arising from your use of our services or violation of these terms.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Los Angeles County.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about these terms, please contact us at:
            <br />
            Email: legal@medspapro.agency
            <br />
            Address: Los Angeles, CA
          </p>
        </div>
      </div>
    </Container>
  )
}
