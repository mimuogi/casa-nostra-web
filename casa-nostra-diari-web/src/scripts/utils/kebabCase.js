export function kebabCase(str) {
	return str
		.toLowerCase() // Convert the string to lowercase
		.replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
		.replace(/[^\w\-]+/g, "") // Remove any non-alphanumeric characters except hyphens
		.replace(/^-+|-+$/g, "") // Remove leading or trailing hyphens
		.replace(/--+/g, "-"); // Replace multiple hyphens with a single hyphen
}
