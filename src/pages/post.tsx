import { useLoaderData } from "react-router-dom";
import { PostView } from "../components/post-view/post-view";
import { PostType } from "../types/Post";
import { useEffect } from "react";
export function PostPage() {
	const { post } = useLoaderData() as { post: PostType };

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [post.id]);

	return (
		<div>
			<PostView post={post}></PostView>
		</div>
	);
}
