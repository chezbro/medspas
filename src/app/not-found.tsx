import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/" variant="primary" size="lg">
            Go back home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Book Free Audit
          </Button>
        </div>
      </div>
    </Container>
  )
}
