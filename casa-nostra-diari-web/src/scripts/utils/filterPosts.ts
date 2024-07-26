import { PostType } from "../../types/Post";

export function filterPosts(
	posts: PostType[],
	excludeTag: string,
	includeTag = ""
) {
	return posts.filter(
		(post) =>
			!post.tags.includes(excludeTag) &&
			(includeTag ? post.tags.includes(includeTag) : true)
	);
}
