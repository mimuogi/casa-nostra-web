import React from "react";
import "./pages.css";
import { Layout } from "../components/layout/layout";
import { PostList } from "../components/cn-postslist/postslist";
import postlist from "../data/posts.json";

export function Home() {
	return (
		<div>
			<Layout>
				<PostList postlist={postlist}></PostList>
			</Layout>
		</div>
	);
}
