import type { APIRoute } from 'astro';
import { padelClubs, clubPath } from '../lib/padelClubs';

const site = 'https://shayaanpadel.co.ke';
const staticPaths = [
  '/blog/',
  '/blog/padel-positioning-partnership/',
  '/blog/starting-padel-in-nairobi/',
  '/blog/category/technique-and-tactics/',
  '/blog/category/getting-started/',
  '/padel-clubs/kenya/',
];

export const GET: APIRoute = () => {
  const paths = [...staticPaths, ...padelClubs.map(clubPath)];
  const urls = paths.map((path) => `  <url><loc>${site}${path}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
