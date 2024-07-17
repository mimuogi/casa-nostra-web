import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export function Post({ post }) {
	const contentSummary = post.content.split(" ").slice(0, 5).join(" ");

	return (
		<div className='post-card'>
			<h2> {post.title}</h2>
			<small>
				{" "}
				Publicat en: {post.date} by {post.author}{" "}
			</small>
			<hr />
			<ReactMarkdown children={contentSummary} />
			<Link to={`/post/${post.id}`}>Llig el post complet</Link>
		</div>
	);
}
