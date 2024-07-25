import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import "./cn-post.css";
import { getAuthorImage } from "../../scripts/utils/author-info";

export function Post({ post }) {
	const contentSummary = post.content.split(" ").slice(0, 50).join(" ");
	const authorImage = getAuthorImage(post.author);

	return (
		<Link
			to={`/post/${post.id}`}
			className='post-card-link'>
			<div className='newspaper'>
				<div className='post-card'>
					<h2 className='post-title'> {post.title}</h2>
					<small>
						<img
							src={authorImage}
							alt={`${post.author}'s picture`}
							className='author-image'
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "/assets/images/casaNostra.jpg"; // Fallback image
							}}
						/>{" "}
						{post.author},{" "}
					</small>
					<small>{post.date}</small>
					<hr />
					<ReactMarkdown rehypePlugins={[rehypeRaw]}>
						{contentSummary.concat("", "...")}
					</ReactMarkdown>
					<div className='read-more'>Llig el post complet</div>
				</div>
			</div>
		</Link>
	);
}
