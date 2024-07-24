import "./cn-postslist.css";
import { Post } from "../cn-post/post";

export function PostList({ postlist }) {
	return (
		<div className='postlist'>
			{postlist.length &&
				postlist.map((post) => (
					<Post
						key={post.title}
						post={post}></Post>
				))}
		</div>
	);
}
