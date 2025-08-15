import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { getAllPosts } from '@/lib/blog'

export const revalidate = 3600 // Revalidate every hour

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Med Spa Marketing Tips & Insights
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your med spa with our expert marketing advice and industry insights.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-start">
            {post.featured_image && (
              <div className="relative w-full">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
            )}
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.created_at} className="text-gray-500">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
