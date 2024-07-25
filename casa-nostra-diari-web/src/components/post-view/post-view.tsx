import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./post-view.css";
import { FaLink, FaXTwitter } from "react-icons/fa6";

export function PostView({ post }) {
	// Function to get image source based on author
	const getAuthorImage = (author) => {
		switch (author) {
			case "Carlos Castillo":
				return "assetsweb/Contingut_Web/1.Targetes_Autor/Carlos250x250.png";
			case "Quique":
				return "assetsweb/Contingut_Web/1.Targetes_Autor/Quique250x250.png";
			default:
				return "/assets/images/casaNostra.jpg";
		}
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		alert("Link copied to clipboard");
	};

	const shareOnWhatsapp = () => {
		const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
			window.location.href
		)}`;
		window.open(whatsappUrl, "_blank");
	};

	const shareOnFacebook = () => {
		const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			window.location.href
		)}`;
		window.open(facebookUrl, "_blank");
	};

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
