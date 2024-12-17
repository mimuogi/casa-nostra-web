import { getEnvironmentPath } from "../scripts/utils/asset-paths";
import { SocialNetworkSet } from "../types/SocialNetworkSet";

export const AUTHOR_IMAGES: { [key: string]: string } = {
	"Carlos Castillo": "assets/web/targetes-autor-noticies/Carlos250x250.png",
	"Quique Monfort": "assets/web/targetes-autor-noticies/Quique250x250.png",
	"Leire Juan": "assets/web/targetes-autor-noticies/Leire250x250.png",
	"Sibilino" : "assets/web/targetes-autor-noticies/Sibilino250x250.png",
	"Sergi Rodilla Alamà" : "assets/web/targetes-autor-noticies/Sergi250x250.png",
	"Casa Nostra": getEnvironmentPath("/assets/images/casaNostra.jpg"),
};

export const AUTHOR_SOCIALS: { [key: string]: SocialNetworkSet } = {
	"Miguel Alejandro Muñoz Gil": {
		twitter: "https://x.com/Joliverte",
		linkedin: "https://www.linkedin.com/in/miguel-alejandro-mu%C3%B1oz-gil/",
		instagram: "https://www.instagram.com/alejandrito.jolivert/",
	},
	"Sibilino":{
		twitter: "https://x.com/CasaNostraPod",
		tiktok: "https://www.tiktok.com/@casanostra_lliria",
		facebook: "https://www.facebook.com/profile.php?id=61554899325515",
		instagram: "https://www.instagram.com/lliria.casanostra",
		youtube: "https://www.youtube.com/channel/UCokSBFzdENFsuj_dKhcuKnA"
	},
	"Carlos Castillo": {
		instagram:
			"https://www.instagram.com/carloscastiiillo?igsh=MXJlbGR3Z2pscHE1NA%3D%3D",
	},
	"Quique Monfort": {
		instagram: "https://www.instagram.com/q.monfort/",
		linkedin:
			"https://es.linkedin.com/in/enrique-monfort-03ba781bb?trk=people-guest_people_search-card",
		twitter: "https://x.com/q_monfort",
	},
	"Leire Juan": {
		facebook: "https://www.facebook.com/leire.juan.9",
		linkedin: "https://es.linkedin.com/in/leire-juan-292bb1276",
		twitter: "https://x.com/leirejuanch",
		instagram: "https://www.instagram.com/leireetaa/",
	},
	"Sergi Rodilla Alamà":{
		instagram:"https://www.instagram.com/sergirodilla/",
		linkedin: "https://es.linkedin.com/in/sergirodilla",
	},
	"Casa Nostra": {
		spotify:
			"https://open.spotify.com/show/3eBLAu72smJr1GYHHEdanN?si=5ea4ea401d494953&nd=1&dlsi=0f31c92a1bd4490a",
		apple_podcast:
			"https://podcasts.apple.com/us/podcast/casa-nostra/id1724181171?ign-itscg=30200&ign-itsct=lt_p",
		amazon_music:
			"https://music.amazon.es/podcasts/edbda4a8-2813-4f9a-bb6c-53f6fdba13bf/casa-nostra",
		youtube_music:
			"https://music.youtube.com/playlist?list=PLSd-24aOoJHGAsvqxG_SV12geT5TaagdN",
		ivoox: "https://www.ivoox.com/podcast-casa-nostra_sq_f12354445_1.html",
		twitter: "https://x.com/CasaNostraPod",
		tiktok: "https://www.tiktok.com/@casanostra_lliria",
		facebook: "https://www.facebook.com/profile.php?id=61554899325515",
		instagram: "https://www.instagram.com/lliria.casanostra",
		youtube: "https://www.youtube.com/channel/UCokSBFzdENFsuj_dKhcuKnA",
	},
};
