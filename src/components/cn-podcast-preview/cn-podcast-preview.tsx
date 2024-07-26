import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import "./cn-podcast-preview.css";
import rehypeRaw from "rehype-raw";
import { PostType } from "../../types/Post";
import { getEnvironmentPath } from "../../scripts/utils/asset-paths";

export function PodcastPreviewCard({ post }: { post: PostType }) {
	const trimedTitle = post.title.split("|")[0].trim();
	const contentSummary = post.content.split(" ").slice(0, 30).join(" ");

	return (
		<Link
			to={`/post/${post.id}`}
			className='podcast-preview-card-link'>
			<div className='podcast-preview-card'>
				{post.imageUrl && (
					<div className='image-container'>
						<img
							src={post.imageUrl}
							alt={`${trimedTitle} preview`}
							className='podcast-preview-image'
						/>
					</div>
				)}
				<h2 className='podcast-preview-title'>{trimedTitle}</h2>
				<small>
					<img
						src={getEnvironmentPath("/assets/images/casaNostra.jpg")}
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
