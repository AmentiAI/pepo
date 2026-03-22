import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { articles, getArticleBySlug } from '@/lib/articles';
import RelatedReading from '@/components/RelatedReading';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags.join(', '),
    alternates: { canonical: `https://www.peptidesclav.com/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `https://www.peptidesclav.com/blog/${article.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: article.title }],
    },
  };
}

// Dynamically import the article content component
import dynamic from 'next/dynamic';

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Dynamically load the article content
  let ArticleContent: React.ComponentType;
  try {
    const mod = await import(`@/app/blog/content/${slug}`);
    ArticleContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Header */}
      <section className="relative pt-14 pb-12 sm:pt-24 sm:pb-16 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-400 transition-colors mb-8">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="badge badge-cyan">{article.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock size={12} /> {article.readTime}
            </span>
            <span className="text-xs text-zinc-600">{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">{article.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {article.tags.map((tag) => (
              <span key={tag} className="tag-chip text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose-peptides">
          <ArticleContent />
        </div>
      </article>

      <div className="glow-divider mx-6" />
      <RelatedReading pageKey="/blog" />
    </div>
  );
}
