import "./cn-postslist.css";
import postlist from "../../data/posts.json";
import { Post } from "../cn-post/post";

export function PostList() {
	return (
		<div className='postlist'>
			<h1 className='title'>Els nostres posts</h1>
			{postlist.length &&
				postlist.map((post, i) => (
					<Post
						key={i}
						post={post}></Post>
				))}
		</div>
	);
}
