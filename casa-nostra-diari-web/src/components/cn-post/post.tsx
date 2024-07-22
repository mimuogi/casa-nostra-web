import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import "./cn-post.css";

export function Post({ post }) {
	const contentSummary = post.content.split(" ").slice(0, 5).join(" ");

	return (
		<Link
			to={`/post/${post.id}`}
			className='post-card-link'>
			<div className='post-card'>
				<h2> {post.title}</h2>
				<small>
					{post.date} per {post.author}
					<img
						src='/assets/images/casaNostra.jpg'
						alt={`${post.author}'s picture`}
						className='author-image'
					/>
				</small>
				<hr />
				<ReactMarkdown children={contentSummary} />
				<div className='read-more'>Llig el post complet</div>
			</div>
		</Link>
	);
}
