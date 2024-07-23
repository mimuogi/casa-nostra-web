import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./post-view.css";

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
