import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/products';

const SHOP_HOME = 'https://apollopeptidesciences.com/';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (slug === 'shop') {
    return NextResponse.redirect(SHOP_HOME, { status: 302 });
  }

  const product = products.find((p) => p.slug === slug);
  const destination = product?.shopUrl ?? SHOP_HOME;

  return NextResponse.redirect(destination, { status: 302 });
}
