import { useLoaderData } from "react-router-dom";
import { PostView } from "../components/post-view/post-view";
import { PostType } from "../types/Post";
export function PostPage() {
	const { post } = useLoaderData() as { post: PostType };

	return (
		<div>
			<PostView post={post}></PostView>
		</div>
	);
}
