export function filterPosts(posts, excludeTag, includeTag = "") {
	return posts.filter(
		(post) =>
			!post.tags.includes(excludeTag) &&
			(includeTag ? post.tags.includes(includeTag) : true)
	);
}
