import Link from 'next/link';
import { ArrowRight, Star, ExternalLink, FlaskConical } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  showAffiliateButton?: boolean;
}

const categoryGradient: Record<string, string> = {
  'Healing & Recovery':       'from-violet-700 via-purple-600 to-violet-500',
  'Anti-Aging & Skin':        'from-rose-700 via-pink-600 to-fuchsia-500',
  'Anti-Aging & Longevity':   'from-amber-600 via-orange-500 to-yellow-400',
  'Body Composition':         'from-cyan-700 via-sky-600 to-cyan-500',
  'Cognitive Enhancement':    'from-indigo-700 via-blue-600 to-indigo-500',
  'Sexual Health':            'from-red-700 via-rose-600 to-red-500',
  'Growth Hormone':           'from-teal-700 via-emerald-600 to-teal-500',
};

const categorySymbol: Record<string, string> = {
  'Healing & Recovery':     'HEAL',
  'Anti-Aging & Skin':      'SKIN',
  'Anti-Aging & Longevity': 'LONG',
  'Body Composition':       'BODY',
  'Cognitive Enhancement':  'COGN',
  'Sexual Health':          'PERF',
  'Growth Hormone':         'GH+',
};

export default function ProductCard({ product, showAffiliateButton = false }: ProductCardProps) {
  const gradient = categoryGradient[product.category] ?? 'from-violet-700 via-purple-600 to-violet-500';
  const symbol   = categorySymbol[product.category] ?? 'PEP';

  return (
    <div className="card flex flex-col group overflow-hidden">
      {/* Product image */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden" style={{ height: '260px', background: '#0a0a14' }}>
        {product.image.startsWith('http') ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)' }}>
                <FlaskConical size={22} className="text-white" />
              </div>
              <p className="text-white font-black text-xl tracking-tight drop-shadow-md text-center leading-tight">{product.name}</p>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{symbol}</p>
            </div>
          </>
        )}
        {product.popularityRank <= 5 && (
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
            style={{ background: 'rgba(0,0,0,0.65)', color: '#fde68a', backdropFilter: 'blur(4px)' }}
          >
            #{product.popularityRank} Popular
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        {/* Category + rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="badge text-[10px]">{product.category}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < product.researchRating ? 'text-violet-400 fill-violet-400' : 'text-zinc-700'}
              />
            ))}
            <span className="text-[10px] text-zinc-600 ml-1">Evidence</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 leading-relaxed mb-3 flex-1 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {/* Price + actions */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div>
            <p className="text-xs text-zinc-600">From Apollo</p>
            <p className="font-bold text-white">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/products/${product.slug}`} className="btn-secondary py-2 px-3 text-xs">
              Protocol <ArrowRight size={13} />
            </Link>
            {showAffiliateButton && (
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary py-2 px-3 text-xs"
              >
                Buy <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
