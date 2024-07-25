import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import {
	copyToClipboard,
	shareOnWhatsapp,
	shareOnFacebook,
} from "../../scripts/utils/shares";
import {
	getAuthorImage,
	getAuthorSocials,
} from "../../scripts/utils/author-info";
import "./post-view.css";

export function PostView({ post }) {
	const authorSocials = getAuthorSocials(post.author);

	return (
		<div className='post-read'>
			<h1>{post.title}</h1>
			<small>
				<div className='author-info'>
					<span>
						{post.date}, {post.author}{" "}
						<img
							src={getAuthorImage(post.author)}
							alt={post.author}
							className='author-image'
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "/assets/images/casaNostra.jpg"; // Fallback image
							}}
						/>
					</span>
					<div className='author-socials'>
						{authorSocials.twitter && (
							<a
								href={authorSocials.twitter}
								target='_blank'
								rel='noopener noreferrer'>
								<FaXTwitter />
							</a>
						)}
						{authorSocials.linkedin && (
							<a
								href={authorSocials.linkedin}
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</a>
						)}
					</div>
				</div>
				<div className='share-buttons'>
					<button onClick={copyToClipboard}>
						<FaLink />
					</button>
					<button onClick={shareOnWhatsapp}>
						<FaWhatsapp />
					</button>
					<button onClick={shareOnFacebook}>
						<FaFacebook />
					</button>
				</div>
			</small>
			<hr />
			<ReactMarkdown
				rehypePlugins={[rehypeRaw]}
				className='markdown-content'>
				{post.content}
			</ReactMarkdown>
		</div>
	);
}
