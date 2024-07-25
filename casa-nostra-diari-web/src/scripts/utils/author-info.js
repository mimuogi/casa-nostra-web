export function getAuthorImage(author) {
	switch (author) {
		case "Carlos Castillo":
			return "assetsweb/Contingut_Web/1.Targetes_Autor/Carlos250x250.png";
		case "Quique":
			return "assetsweb/Contingut_Web/1.Targetes_Autor/Quique250x250.png";
		default:
			return "/assets/images/casaNostra.jpg";
	}
}
