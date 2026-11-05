import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { products } from '@/lib/products';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PRODUCT_CATALOG = products
  .map((p) => `- ${p.name} (slug: ${p.slug}): ${p.shortDescription} | Price: $${p.price} | Category: ${p.category}`)
  .join('\n');

const SYSTEM_PROMPT = `You are the Shark Tides catalog assistant for sharktides.com. You help visitors find research materials in the catalog below. Every compound is for laboratory research only and is not for human consumption.

Our product catalog:
${PRODUCT_CATALOG}

When users ask about a compound:
- Explain what the material is in plain research language
- Point them to the matching catalog slug
- Do not provide human doses, injection instructions, or personal protocols
- If they ask how to take or inject something, say these listings are not for human use and offer the catalog page instead
- Keep replies to 2 short paragraphs

At the END of your response, on a NEW LINE, output a JSON line (and ONLY that line) in this exact format:
PRODUCTS:["slug1","slug2"]

Include up to 3 product slugs from the catalog. If none apply, output PRODUCTS:[]`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-8),
      ],
      max_tokens: 600,
      temperature: 0.7,
    });

    const raw = completion.choices[0]?.message?.content || '';

    // Extract product slugs from the PRODUCTS: line
    const productLineMatch = raw.match(/PRODUCTS:\[([^\]]*)\]/);
    let suggestedSlugs: string[] = [];
    if (productLineMatch) {
      try {
        suggestedSlugs = JSON.parse(`[${productLineMatch[1]}]`);
      } catch { /* ignore parse errors */ }
    }

    // Strip the PRODUCTS line from the visible reply
    const reply = raw.replace(/\nPRODUCTS:\[([^\]]*)\]/g, '').trim() ||
      "Sorry, I couldn't generate a response. Please try again.";

    // Resolve slugs to full product objects
    const suggestedProducts = suggestedSlugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({
        slug: p!.slug,
        name: p!.name,
        tagline: p!.tagline,
        price: p!.price,
        image: p!.image,
        category: p!.category,
      }));

    return NextResponse.json({ reply, suggestedProducts });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
