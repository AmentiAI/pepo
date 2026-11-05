import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product?.shopUrl) {
    return NextResponse.redirect(new URL('/products', request.url), 302);
  }

  const response = NextResponse.redirect(product.shopUrl, 302);
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}
