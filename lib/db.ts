import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export { sql };

export async function searchProducts(query: string) {
  const results = await sql`
    SELECT slug, name, category, short_description, price
    FROM products
    WHERE
      name ILIKE ${'%' + query + '%'} OR
      short_description ILIKE ${'%' + query + '%'} OR
      category ILIKE ${'%' + query + '%'}
    LIMIT 10
  `;
  return results;
}

export async function getProductFromDB(slug: string) {
  const results = await sql`
    SELECT * FROM products WHERE slug = ${slug} LIMIT 1
  `;
  return results[0] || null;
}
