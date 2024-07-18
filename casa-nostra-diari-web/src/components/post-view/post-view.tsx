import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export function PostView({ post }) {
	return (
		<div className='post-card'>
			<h2> {post.title}</h2>
			<small>
				{" "}
				Publicat en: {post.date} by {post.author}{" "}
			</small>
			<hr />
			<ReactMarkdown children={post.content} />
			<Link to={`/post/${post.id}`}>Llig el post complet</Link>
		</div>
	);
}
