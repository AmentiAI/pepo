import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { products } from '@/lib/products'
import { SITE_URL } from '@/lib/site'
import ProductCard from '@/components/ProductCard'

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
  const canonical = `${SITE_URL}/products/${product.slug}`
  const image = `${SITE_URL}${product.image}`
  return {
    title: { absolute: product.seoTitle },
    description: product.shortDescription,
    alternates: { canonical },
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      images: [{ url: image, width: 800, height: 800, alt: product.name }],
      type: 'website',
      url: canonical,
      siteName: 'Shark Tides',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.shortDescription.slice(0, 155),
      images: [image],
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

  const pageUrl = `${SITE_URL}/products/${product.slug}`
  const image = `${SITE_URL}${product.image}`
  const related = product.synergies
    .map((item) => products.find((entry) => entry.slug === item))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image,
    url: pageUrl,
    brand: { '@type': 'Brand', name: 'Shark Tides' },
    category: product.category,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-700">
              <Link href="/" className="hover:text-sky-700">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-sky-700">Products</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </nav>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-gray-200 bg-black p-6 sm:p-10">
            <img
              src={product.image}
              alt={`${product.name} research vial from the Shark Tides catalog`}
              className="w-full max-h-[520px] object-contain"
            />
          </div>

          <div>
            <Link href="/products" className="btn-secondary mb-6 inline-flex text-xs py-2 px-3">
              <ArrowLeft size={14} /> All products
            </Link>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 mb-2">{product.category}</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.tagline}</p>
            <p className="text-sm text-gray-600 mb-6">Live supplier price. Shown at checkout, not guessed on this page.</p>
            <a
              href={product.shopUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              title="Opens this Apollo vial right after you sign in"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-white text-base bg-sky-700 hover:bg-sky-800"
            >
              <ExternalLink size={16} /> Order {product.name}
            </a>
            <p className="mt-4 text-sm text-gray-600 max-w-xl">
              Research use only. Not for human consumption. Apollo shows this vial only after you sign in. This button keeps that exact product attached, so the listing opens as soon as you log in, with the Shark Tides referral on it. This page stays the indexed URL.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
          {product.fullDescription.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-gray-800 leading-relaxed mb-4">{paragraph}</p>
          ))}
          <ul className="mt-6 space-y-2">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="text-gray-800 text-sm">• {benefit}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">{product.protocol}</p>
        </section>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related research listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} showAffiliateButton />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
