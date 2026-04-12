import { NextRequest, NextResponse } from 'next/server';

// Legacy route — forward all /go/ clicks into the /out/ handler
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return NextResponse.redirect(
    new URL(`/out/${slug}`, _request.url),
    { status: 308 },
  );
}
