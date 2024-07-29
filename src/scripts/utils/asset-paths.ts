export function getEnvironmentPath(path: string): string {
	if (import.meta.env.PROD) {
		return path;
	}
	return path;
}
