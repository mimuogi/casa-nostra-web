import "./cn-postslist.css";
import { Post } from "../cn-post/post";
import { PostType } from "../../types/Post";

export function PostList({ postlist }: { postlist: PostType[] }) {
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
