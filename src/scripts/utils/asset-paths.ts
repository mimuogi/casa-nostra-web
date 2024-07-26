export function getEnvironmentPath(path: string): string {
	if (import.meta.env.PROD) {
		return "/casa-nostra-web" + path;
	}
	return path;
}
