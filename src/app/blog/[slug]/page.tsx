import { notFound } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getPostBySlug } from '@/lib/blog'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }

  return (
    <Container className="py-24 sm:py-32">
      <article className="mx-auto max-w-2xl">
        <header>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.created_at} className="text-gray-500">
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>

        {post.featured_image && (
          <div className="relative mt-8 w-full">
            <Image
              src={post.featured_image}
              alt={post.title}
              width={800}
              height={400}
              className="aspect-[2/1] w-full rounded-2xl bg-gray-100 object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg prose-primary mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 border-t border-gray-900/10 pt-16">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white">
              Want More Med Spa Marketing Tips?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book your free lead audit and discover how we can help your med spa generate 20+ qualified leads per month.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="secondary" size="lg">
                Book Your Free Lead Audit
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Container>
  )
}