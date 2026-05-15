import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS feed for blog posts. Drafts excluded; sorted newest first so feed
// readers show the latest at the top. The trailing slash on `link` matches
// Astro's default page-style URLs.
export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Ross Blassingame',
    description: 'Notes from Ross Blassingame, software engineer in Denver.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
