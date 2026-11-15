import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../data/posts';

export async function GET(context: APIContext) {
  return rss({
    title: 'Inklinks · Chris Wang',
    description: '技术、阅读与路上的文字。',
    site: context.site!,
    items: (await getPosts()).map(post => ({
      title: post.data.title, description: post.data.description,
      pubDate: post.data.date, link: `/blog/${post.id}/`, categories: post.data.tags,
    })),
    customData: '<language>zh-CN</language>',
  });
}
