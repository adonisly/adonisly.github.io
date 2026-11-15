import type { APIContext } from 'astro';
import { getPosts } from '../data/posts';

export async function GET({ site }: APIContext) {
  const posts = await getPosts();
  const tags = [...new Set(posts.flatMap(post => post.data.tags))];
  const paths = ['/', '/projects/', '/about/', '/blog/', '/blog/archive/',
    ...posts.map(post => `/blog/${post.id}/`), ...tags.map(tag => `/tags/${encodeURIComponent(tag)}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
