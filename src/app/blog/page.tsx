import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getAllPosts } from '@/lib/blog'
import type { BlogPost } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export default async function Blog() {
  let posts: BlogPost[] = []
  try {
    posts = await getAllPosts()
  } catch (error) {
    // If table doesn't exist or there's an error, just show empty state
    console.error('Error fetching blog posts:', error)
  }

  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Med Spa Marketing Blog
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Expert tips and strategies to help you attract more clients and grow your med spa business.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              {post.featured_image && (
                <div className="relative w-full">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="aspect-[16/10] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
              )}
              <div className="max-w-xl">
                <div className="mt-6 sm:mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created_at} className="text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-base sm:text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 sm:mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Coming Soon</h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re working on some great content. Check back soon!
          </p>
          <div className="mt-8 sm:mt-10">
            <Button href="/contact" size="lg">
              Get a Free Marketing Consultation
            </Button>
          </div>
        </div>
      )}
    </Container>
  )
}