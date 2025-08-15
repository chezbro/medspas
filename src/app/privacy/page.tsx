import Container from '@/components/ui/Container'

export default function Privacy() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-10 prose prose-lg prose-primary max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Introduction</h2>
          <p>
            Med Spa Agency ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our website and services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Business information (med spa name, location)</li>
            <li>Marketing budget and preferences</li>
            <li>Communications with us</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about our services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Analyze and improve our website performance</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with service providers who assist in our operations and are bound by confidentiality obligations.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
            <br />
            Email: privacy@medspapro.agency
            <br />
            Address: Los Angeles, CA
          </p>
        </div>
      </div>
    </Container>
  )
}
