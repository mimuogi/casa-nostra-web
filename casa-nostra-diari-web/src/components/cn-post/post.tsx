import ReactMarkdown from "react-markdown";

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
			<small>Llig el post complet</small>
		</div>
	);
}
