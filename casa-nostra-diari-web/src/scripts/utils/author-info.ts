import { AUTHOR_IMAGES, AUTHOR_SOCIALS } from "../../dev/socials";
import { SocialNetworkSet } from "../../types/SocialNetworkSet";

export function getAuthorImage(author: string): string {
	return AUTHOR_IMAGES[author] || AUTHOR_IMAGES["Casa Nostra"];
}

export function getAuthorSocials(author: string): SocialNetworkSet {
	return AUTHOR_SOCIALS[author] || {};
}
