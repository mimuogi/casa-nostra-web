import React from "react";
import "./cn-footer.css";
import {
	FaInstagram,
	FaSquareFacebook,
	FaSquareXTwitter,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa6";
import {
	SiAmazonmusic,
	SiApplepodcasts,
	SiSpotify,
	SiYoutubemusic,
} from "react-icons/si";
import { CASA_NOSTRA_SOCIALS } from "../../dev/constants.js";

export function FooterCN() {
	return (
		<footer className='footer'>
			<hr />
			<div className='footer-content'>
				<div className='social-icons'>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.SPOTIFY}
						target='_blank'
						rel='noopener noreferrer'>
						<SiSpotify />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.APPLE_PODCAST}
						target='_blank'
						rel='noopener noreferrer'>
						<SiApplepodcasts />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.AMAZON_MUSIC}
						target='_blank'
						rel='noopener noreferrer'>
						<SiAmazonmusic />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.YOUTUBE_MUSIC}
						target='_blank'
						rel='noopener noreferrer'>
						<SiYoutubemusic />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.IVOOX}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src='/assets/social-icons/ivoox.svg'
							alt='Ivoox'
							className='ivoox-icon'
						/>
					</a>
				</div>
				<p>&copy; mimuogi {new Date().getFullYear()}</p>
				<div className='social-icons'>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.TWITTER}
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareXTwitter />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.TIKTOK}
						target='_blank'
						rel='noopener noreferrer'>
						<FaTiktok />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.FACEBOOK}
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareFacebook />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.INSTAGRAM}
						target='_blank'
						rel='noopener noreferrer'>
						<FaInstagram />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.YOUTUBE}
						target='_blank'
						rel='noopener noreferrer'>
						<FaYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
}
