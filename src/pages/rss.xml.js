import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS feed for blog posts. Drafts excluded; sorted newest first so feed
// readers show the latest at the top. The trailing slash on `link` matches
// Astro's default page-style URLs.
//
// `<language>` and `<lastBuildDate>` are emitted via `customData`; the
// `atom` xmlns is opt-in via `xmlns` and is conventional for feeds that
// may add Atom-style elements (e.g. `<atom:link>`).
export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Ross Blassingame — Writing',
    description: 'Notes from Ross Blassingame, software engineer in Denver.',
    site: context.site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
