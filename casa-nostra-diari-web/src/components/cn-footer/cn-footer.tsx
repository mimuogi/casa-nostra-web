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

export function FooterCN() {
	return (
		<footer className='footer'>
			<hr />
			<div className='footer-content'>
				<div className='social-icons'>
					<a
						className='social-a'
						href='https://open.spotify.com/show/3eBLAu72smJr1GYHHEdanN?si=5ea4ea401d494953&nd=1&dlsi=0f31c92a1bd4490a'
						target='_blank'
						rel='noopener noreferrer'>
						<SiSpotify />
					</a>
					<a
						className='social-a'
						href='https://podcasts.apple.com/us/podcast/casa-nostra/id1724181171?ign-itscg=30200&ign-itsct=lt_p'
						target='_blank'
						rel='noopener noreferrer'>
						<SiApplepodcasts />
					</a>
					<a
						className='social-a'
						href='https://music.amazon.es/podcasts/edbda4a8-2813-4f9a-bb6c-53f6fdba13bf/casa-nostra'
						target='_blank'
						rel='noopener noreferrer'>
						<SiAmazonmusic />
					</a>
					<a
						className='social-a'
						href='https://music.youtube.com/playlist?list=PLSd-24aOoJHGAsvqxG_SV12geT5TaagdN'
						target='_blank'
						rel='noopener noreferrer'>
						<SiYoutubemusic />
					</a>
					<a
						className='social-a'
						href='https://www.ivoox.com/podcast-casa-nostra_sq_f12354445_1.html'
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
						href='https://x.com/CasaNostraPod'
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareXTwitter />
					</a>
					<a
						className='social-a'
						href='https://www.tiktok.com/@casanostra_lliria'
						target='_blank'
						rel='noopener noreferrer'>
						<FaTiktok />
					</a>
					<a
						className='social-a'
						href='https://www.facebook.com/profile.php?id=61554899325515'
						target='_blank'
						rel='noopener noreferrer'>
						<FaSquareFacebook />
					</a>
					<a
						className='social-a'
						href='https://www.instagram.com/lliria.casanostra'
						target='_blank'
						rel='noopener noreferrer'>
						<FaInstagram />
					</a>
					<a
						className='social-a'
						href='https://www.youtube.com/channel/UCokSBFzdENFsuj_dKhcuKnA'
						target='_blank'
						rel='noopener noreferrer'>
						<FaYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
}
