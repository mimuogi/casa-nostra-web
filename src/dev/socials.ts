import { getEnvironmentPath } from "../scripts/utils/asset-paths";
import { SocialNetworkSet } from "../types/SocialNetworkSet";

export const AUTHOR_IMAGES: { [key: string]: string } = {
	"Carlos Castillo":
		"assetsweb/Contingut_Web/1.Targetes_Autor/Carlos250x250.png",
	"Quique Monfort":
		"assetsweb/Contingut_Web/1.Targetes_Autor/Quique250x250.png",
	"Leire Juan Checa":
		"assetsweb/Contingut_Web/1.Targetes_Autor/Leire250x250.png",
	"Casa Nostra": getEnvironmentPath("/assets/images/casaNostra.jpg"),
};

export const AUTHOR_SOCIALS: { [key: string]: SocialNetworkSet } = {
	"Miguel Alejandro Muñoz Gil": {
		twitter: "https://x.com/Joliverte",
		linkedin: "https://www.linkedin.com/in/miguel-alejandro-mu%C3%B1oz-gil/",
		instagram: "https://www.instagram.com/alejandrito.jolivert/",
	},
	"Carlos Castillo": {
		twitter: "https://twitter.com/carloscastillo",
		linkedin: "https://linkedin.com/in/carloscastillo",
	},
	"Quique Monfort": {
		twitter: "https://twitter.com/quique",
		linkedin: "https://linkedin.com/in/quique",
	},
	"Leire Juan Checa": {
		twitter: "https://twitter.com/leire",
		linkedin: "https://linkedin.com/in/leire",
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
