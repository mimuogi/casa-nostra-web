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
import { AUTHOR_SOCIALS } from "../../dev/socials";

export function FooterCN() {
	const CASA_NOSTRA_SOCIALS = AUTHOR_SOCIALS["Casa Nostra"];

	return (
		<footer className='footer'>
			<hr />
			<div className='footer-content'>
				<div className='social-icons'>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.spotify}
						target='_blank'
						rel='noopener noreferrer'>
						<SiSpotify />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.apple_podcast}
						target='_blank'
						rel='noopener noreferrer'>
						<SiApplepodcasts />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.amazon_music}
						target='_blank'
						rel='noopener noreferrer'>
						<SiAmazonmusic />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.youtube_music}
						target='_blank'
						rel='noopener noreferrer'>
						<SiYoutubemusic />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.ivoox}
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
						href={CASA_NOSTRA_SOCIALS.twitter}
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareXTwitter />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.tiktok}
						target='_blank'
						rel='noopener noreferrer'>
						<FaTiktok />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.facebook}
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareFacebook />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.instagram}
						target='_blank'
						rel='noopener noreferrer'>
						<FaInstagram />
					</a>
					<a
						className='social-a'
						href={CASA_NOSTRA_SOCIALS.youtube}
						target='_blank'
						rel='noopener noreferrer'>
						<FaYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
}
