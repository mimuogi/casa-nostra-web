import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import "./cn-post.css";
import rehypeRaw from "rehype-raw";

export function Post({ post }) {
	const contentSummary = post.content.split(" ").slice(0, 50).join(" ");

	return (
		<Link
			to={`/post/${post.id}`}
			className='post-card-link'>
			<div className='post-card'>
				<h2> {post.title}</h2>
				<small>
					<img
						src='/assets/images/casaNostra.jpg'
						alt={`${post.author}'s picture`}
						className='author-image'
					/>{" "}
					{post.author},{" "}
				</small>
				<small>{post.date}</small>
				<hr />
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					children={contentSummary.concat("", "...")}
				/>
				<div className='read-more'>Llig el post complet</div>
			</div>
		</Link>
	);
}

//<img src='assetsweb/Contingut_Web/4.Logo_Noticies/logodiari320x320.png' />
