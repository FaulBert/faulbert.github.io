import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(ctx) {
	const posts = await getCollection('posts');
	return rss({
		title: 'Nazhard\'s Blog',
		description: 'Collection Story of Nazhard',
		site: ctx.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}
