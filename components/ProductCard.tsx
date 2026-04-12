import Link from 'next/link';
import { ArrowRight, Star, ExternalLink, FlaskConical } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  showAffiliateButton?: boolean;
}

const categoryGradient: Record<string, string> = {
  'Healing & Recovery':       'from-yellow-100 via-amber-100 to-yellow-50',
  'Anti-Aging & Skin':        'from-rose-100 via-pink-50 to-amber-50',
  'Anti-Aging & Longevity':   'from-amber-100 via-yellow-100 to-amber-50',
  'Body Composition':         'from-sky-100 via-blue-50 to-cyan-50',
  'Cognitive Enhancement':    'from-indigo-100 via-blue-100 to-indigo-50',
  'Sexual Health':            'from-red-100 via-rose-100 to-red-50',
  'Growth Hormone':           'from-emerald-100 via-teal-100 to-green-50',
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
  const gradient = categoryGradient[product.category] ?? 'from-yellow-100 via-amber-100 to-yellow-50';
  const symbol   = categorySymbol[product.category] ?? 'PEP';

  return (
    <div className="card flex flex-col group overflow-hidden">
      {/* Product image */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden h-64 sm:h-72 bg-gray-50">
        {product.image !== '' ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/60 backdrop-blur-sm">
                <FlaskConical size={22} className="text-gray-600" />
              </div>
              <p className="text-gray-800 font-black text-xl tracking-tight text-center leading-tight">{product.name}</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{symbol}</p>
            </div>
          </>
        )}
        {product.popularityRank <= 5 && (
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
            style={{ background: 'rgba(234,179,8,0.9)', color: '#0a0a0a', backdropFilter: 'blur(4px)' }}
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
                className={i < product.researchRating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-200'}
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">Evidence</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-3 flex-1 line-clamp-3">
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
            <p className="text-xs text-gray-400">HPLC Verified</p>
            <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/products/${product.slug}`} className="btn-secondary py-2 px-3 text-xs">
              Protocol <ArrowRight size={13} />
            </Link>
            {showAffiliateButton && (
              <a
                href={`/out/${product.slug}`}
                target="_blank"
                rel="noopener noreferrer"
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
