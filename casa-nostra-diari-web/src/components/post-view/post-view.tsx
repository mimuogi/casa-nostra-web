import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export function PostView({ post }) {
	return (
		<div className='post-read'>
			<h1> {post.title}</h1>
			<small>
				{" "}
				Publicat en: {post.date} per {post.author}{" "}
			</small>
			<hr />
			<ReactMarkdown children={post.content} />
			<Link to={`/post/${post.id}`}>Llig el post complet</Link>
		</div>
	);
}
