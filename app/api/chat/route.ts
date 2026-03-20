import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { products } from '@/lib/products';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PRODUCT_CATALOG = products
  .map((p) => `- ${p.name} (slug: ${p.slug}): ${p.shortDescription} | Price: $${p.price} | Category: ${p.category}`)
  .join('\n');

const SYSTEM_PROMPT = `You are Peak, an expert peptide protocol advisor for PeptidesClav.com. You have deep knowledge of peptides including BPC-157, TB-500, Ipamorelin, CJC-1295, GHK-Cu, Epithalon, IGF-1 LR3, NAD+, SNAP-8, Semaglutide, Tirzepatide, Retatrutide, and others.

Our product catalog:
${PRODUCT_CATALOG}

When users ask about peptides:
- Provide evidence-based information about mechanisms, dosing, and protocols
- Always recommend starting with conservative doses
- Keep responses concise and practical — 2-4 paragraphs maximum
- If asked about dosing, provide specific evidence-based dose ranges
- If asked for recommendations, reference products from our catalog above

At the END of your response, on a NEW LINE, output a JSON line (and ONLY that line) in this exact format:
PRODUCTS:["slug1","slug2"]

Include up to 3 product slugs most relevant to the user's question. Use slugs from our catalog exactly as listed. If no products are relevant, output PRODUCTS:[]

Tone: Knowledgeable, direct, science-forward. Like a well-read friend who has done extensive homework on peptide science.`;

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
