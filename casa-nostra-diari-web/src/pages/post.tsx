import { useLoaderData } from "react-router-dom";
import { PostView } from "../components/post-view/post-view";
export function PostPage() {
	const { post } = useLoaderData();

	return (
		<div>
			<PostView post={post}></PostView>
		</div>
	);
}
