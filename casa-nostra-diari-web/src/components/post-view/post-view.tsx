import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeRaw from "rehype-raw";

export function PostView({ post }) {
	return (
		<div className='post-read'>
			<h1> {post.title}</h1>
			<small>
				{" "}
				Publicat en: {post.date} per {post.author}{" "}
			</small>
			<hr />
			<ReactMarkdown
				rehypePlugins={[rehypeRaw]}
				children={post.content}
			/>
		</div>
	);
}
