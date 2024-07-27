export function copyToClipboard() {
	const url = encodeURI(window.location.href);
	navigator.clipboard.writeText(url);
	alert("Enllaç copiat");
}

export function shareOnWhatsapp() {
	const url = encodeURI(window.location.href);
	const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
		url
	)}`;
	window.open(whatsappUrl, "_blank");
}

export function shareOnFacebook() {
	const url = encodeURI(window.location.href);
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		url
	)}`;
	window.open(facebookUrl, "_blank");
}
