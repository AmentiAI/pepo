import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { stacks } from '@/lib/stacks'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const stack = stacks.find((s) => s.id === slug)
  if (!stack) return { title: 'Stack Not Found' }
  const canonical = `https://www.peptidesclav.com/stacks/${stack.id}`
  const title = `Buy ${stack.name}`
  return {
    title: { absolute: title },
    description: stack.shortDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: stack.shortDescription,
      type: 'website',
      url: canonical,
      siteName: 'PeptidesClav',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: stack.shortDescription.slice(0, 155),
    },
  }
}

export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const stack = stacks.find((s) => s.id === slug)
  if (!stack) notFound()

  const stackProducts = stack.products
    .map((sp) => products.find((p) => p.slug === sp.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const totalPrice = stackProducts.reduce((sum, p) => sum + p.salePrice, 0)

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link href="/stacks" className="btn-secondary mb-8 inline-flex text-xs py-2 px-3">
          <ArrowLeft size={14} /> Back to Stacks
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Buy {stack.name}
        </h1>

        <p className="text-2xl font-bold text-gray-900 mb-8">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {stackProducts.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateButton />
          ))}
        </div>
      </section>
    </div>
  )
}
