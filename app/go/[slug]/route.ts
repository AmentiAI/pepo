import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/products';

const APOLLO_HOME = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (slug === 'shop') {
    return NextResponse.redirect(APOLLO_HOME, { status: 302 });
  }

  const product = products.find((p) => p.slug === slug);
  const destination = product?.affiliateUrl ?? APOLLO_HOME;

  return NextResponse.redirect(destination, { status: 302 });
}
