import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import {
	FaInstagram,
	FaLink,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";
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
import { PostType } from "../../types/Post";

export function PostView({ post }: { post: PostType }) {
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
								const target = e.target as HTMLImageElement;
								target.onerror = null;
								target.src = "/assets/images/casaNostra.jpg"; // Fallback image
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
						{authorSocials.tiktok && (
							<a
								href={authorSocials.tiktok}
								target='_blank'
								rel='noopener noreferrer'>
								<FaTiktok />
							</a>
						)}
						{authorSocials.facebook && (
							<a
								href={authorSocials.facebook}
								target='_blank'
								rel='noopener noreferrer'>
								<FaFacebook />
							</a>
						)}
						{authorSocials.instagram && (
							<a
								href={authorSocials.instagram}
								target='_blank'
								rel='noopener noreferrer'>
								<FaInstagram />
							</a>
						)}
						{authorSocials.youtube && (
							<a
								href={authorSocials.youtube}
								target='_blank'
								rel='noopener noreferrer'>
								<FaYoutube />
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
