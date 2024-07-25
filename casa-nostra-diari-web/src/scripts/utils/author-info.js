import { AUTHOR_NAME, AUTHOR_IMAGES, AUTHOR_SOCIALS } from "../../dev/socials";

export function getAuthorImage(author) {
	return AUTHOR_IMAGES[author] || AUTHOR_IMAGES["Casa Nostra"];
}

export function getAuthorSocials(author) {
	return AUTHOR_SOCIALS[author] || {};
}
