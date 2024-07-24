import { useLoaderData } from "react-router-dom";
import { PostView } from "../components/post-view/post-view";
import { Layout } from "../components/layout/layout";

export function PostPage() {
	const { post } = useLoaderData();

	return (
		<>
			<Layout>
				<PostView post={post}></PostView>
			</Layout>
		</>
	);
}
