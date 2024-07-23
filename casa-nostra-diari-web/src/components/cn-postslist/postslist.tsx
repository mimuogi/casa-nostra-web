import "./cn-postslist.css";
import { Post } from "../cn-post/post";

export function PostList({ title, postlist }) {
	return (
		<div className='postlist'>
			<h1 className='title'>{title}</h1>
			{postlist.length &&
				postlist.map((post, i) => (
					<Post
						key={i}
						post={post}></Post>
				))}
		</div>
	);
}
