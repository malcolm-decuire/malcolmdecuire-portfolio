// 20250701 UPDATE FOR PUBLIC REPO
import assert from 'assert';
import * as cheerio from 'cheerio';
import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  console.log('NEXT_PUBLIC_SITE_URL:', siteUrl);

  if (!siteUrl) throw new Error('Missing NEXT_PUBLIC_SITE_URL environment variable');

  const author = {
    name: 'Malcolm Decuire',
    email: 'malcolm@reapi.com',
  };

  const feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  // ✅ Replace require.context with filesystem read
  const articlesPath = path.join(process.cwd(), 'src', 'app', 'articles');
  const articleDirs = fs
    .readdirSync(articlesPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const id of articleDirs) {
    const publicUrl = `${siteUrl}/articles/${id}`;
    const articleUrl = req?.url
      ? new URL(`/articles/${id}`, req.url).toString()
      : publicUrl;

    console.log(`Generated URL for article ${id}:`, articleUrl);

    const html = await (await fetch(articleUrl)).text();
    const $ = cheerio.load(html);

    const article = $('article').first();
    const title = article.find('h1').first().text();
    const date = article.find('time').first().attr('datetime');
    const content = article.find('[data-mdx-content]').first().html();

    assert(typeof title === 'string');
    assert(typeof date === 'string');
    assert(typeof content === 'string');

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  });
}
