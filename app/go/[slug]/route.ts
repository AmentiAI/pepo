import { NextRequest, NextResponse } from 'next/server';

const AFFILIATE_URL = 'https://phiogen.is/?ref=PEPS';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  await params; // slug is unused — all clicks go through the affiliate landing page
  return NextResponse.redirect(AFFILIATE_URL, { status: 302 });
}
