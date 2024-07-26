export function copyToClipboard() {
	navigator.clipboard.writeText(window.location.href);
	alert("Enllaç copiat");
}

export function shareOnWhatsapp() {
	const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
		window.location.href
	)}`;
	window.open(whatsappUrl, "_blank");
}

export function shareOnFacebook() {
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		window.location.href
	)}`;
	window.open(facebookUrl, "_blank");
}
