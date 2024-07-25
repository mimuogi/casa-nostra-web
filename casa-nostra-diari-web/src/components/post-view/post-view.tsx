import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./post-view.css";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import {
	copyToClipboard,
	shareOnWhatsapp,
	shareOnFacebook,
} from "../../scripts/utils/shares.js";

import { getAuthorImage } from "../../scripts/utils/author-info.js";

export function PostView({ post }) {
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
						<a
							href={`https://twitter.com/intent/tweet?text=Check this out! ${window.location.href}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaXTwitter />
						</a>
						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaLinkedin />
						</a>
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
