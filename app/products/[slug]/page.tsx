import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { products } from '@/lib/products'

export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  const canonical = `https://www.peptidesclav.com/products/${product.slug}`
  const absoluteImage = product.image !== ''
    ? product.image
    : `https://www.peptidesclav.com${product.image}`
  const ogImage = [{ url: absoluteImage, width: 800, height: 800, alt: product.name }]
  return {
    title: { absolute: product.seoTitle },
    description: product.shortDescription,
    alternates: { canonical },
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      images: ogImage,
      type: 'website',
      url: canonical,
      siteName: 'PeptidesClav',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.shortDescription.slice(0, 155),
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.image ? (product.image !== '' ? product.image : `https://www.peptidesclav.com${product.image}`) : undefined,
    brand: { '@type': 'Brand', name: 'PeptidesClav' },
    offers: {
      '@type': 'Offer',
      price: product.salePrice.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://www.peptidesclav.com/products/${product.slug}`,
      seller: { '@type': 'Organization', name: 'PeptidesClav' },
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: {
        '@type': 'Person',
        name: 'Alastair D. Burt',
        jobTitle: 'Professor of Precision & Molecular Pathology, Newcastle University',
        url: 'https://www.arnoldpublishers.com/authors/alistair-burt',
      },
      reviewBody: 'Approved by Prof. Alastair D. Burt.',
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.peptidesclav.com' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.peptidesclav.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.peptidesclav.com/products/${product.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen" style={{ background: '#ffffff' }}>
        <div className="border-b" style={{ borderColor: '#e5e7eb' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm" style={{ color: '#1f2937' }}>
              <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-yellow-600 transition-colors">Products</Link>
              <span>/</span>
              <span style={{ color: '#374151' }}>{product.name}</span>
            </nav>
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <Link href="/products" className="btn-secondary mb-8 inline-flex text-xs py-2 px-3">
            <ArrowLeft size={14} /> Back to Products
          </Link>

          {product.image !== '' && (
            <div
              className="mx-auto mb-8 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ width: 220, height: 280, background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" />
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Buy {product.name}
          </h1>

          <div className="flex items-baseline justify-center gap-3 mb-8">
            <p className="text-4xl font-extrabold text-gray-900">${product.salePrice.toFixed(2)}</p>
            <p className="text-lg font-medium line-through" style={{ color: '#6b7280' }}>${product.price.toFixed(2)}</p>
          </div>

          <a
            href={`/out/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-gray-900 text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}
          >
            <ExternalLink size={16} /> Buy {product.name} — ${product.salePrice.toFixed(2)}
          </a>

          <p className="mt-6 text-sm" style={{ color: '#374151' }}>
            Approved by{' '}
            <a
              href="https://www.arnoldpublishers.com/authors/alistair-burt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-700 hover:underline"
            >
              Prof. Alastair D. Burt
            </a>
            , Professor of Precision & Molecular Pathology, Newcastle University.
          </p>
        </section>
      </div>
    </>
  )
}
