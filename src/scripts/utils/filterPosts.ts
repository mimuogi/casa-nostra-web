import { PostType } from "../../types/Post";

export function filterPosts(
	posts: PostType[],
	excludeTag: string,
	includeTag = ""
) {
	return posts
		.filter(
			(post) =>
				!post.tags.includes(excludeTag) &&
				(includeTag ? post.tags.includes(includeTag) : true)
		)
		.sort((a, b) => {
			// Date from dd/mm/yyyy to yyyy-mm-dd for comparison
			const [dayA, monthA, yearA] = a.date.split("/").map(Number);
			const [dayB, monthB, yearB] = b.date.split("/").map(Number);

			const dateA = new Date(yearA, monthA - 1, dayA); // JS months are 0-indexed
			const dateB = new Date(yearB, monthB - 1, dayB);

			return dateB.getTime() - dateA.getTime();
		});
}

