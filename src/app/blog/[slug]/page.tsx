import { notFound } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getPostBySlug } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post
  try {
    post = await getPostBySlug(params.slug)
    if (!post) {
      notFound()
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }

  return (
    <Container className="py-16 sm:py-24">
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
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>

        {post.featured_image && (
          <div className="relative mt-6 sm:mt-8 w-full">
            <Image
              src={post.featured_image}
              alt={post.title}
              width={800}
              height={400}
              className="aspect-[2/1] w-full rounded-2xl bg-gray-100 object-cover"
            />
          </div>
        )}

        <div className="prose prose-sm sm:prose-lg prose-primary mt-6 sm:mt-8 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80" />
              ),
              img: ({ node, ...props }) => {
                if (!props.src) return null;
                return (
                  <Image
                    {...props}
                    src={props.src}
                    alt={props.alt || ''}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                );
              },
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto">
                  <table {...props} className="min-w-full divide-y divide-gray-300" />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th {...props} className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-50" />
              ),
              td: ({ node, ...props }) => (
                <td {...props} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500" />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 sm:mt-16 border-t border-gray-900/10 pt-12 sm:pt-16">
          <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 py-16 sm:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Want More Med Spa Marketing Tips?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
              Book your free lead audit and discover how we can help your med spa generate 20+ qualified leads per month.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
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