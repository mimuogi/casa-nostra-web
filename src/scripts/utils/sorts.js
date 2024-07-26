export function sortNewestPosts(posts) {
	const sortedPosts = [...posts].sort((a, b) => {
		const dateA = new Date(a.date.split("/").reverse().join("-"));
		const dateB = new Date(b.date.split("/").reverse().join("-"));

		return dateB - dateA;
	});

	return sortedPosts;
}
