import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

// Get the filename and dirname using ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directories
const dirPathPages = path.join(__dirname, "../pages/content");
const dataPath = path.join(__dirname, "../data/pages.json");

const getPages = async () => {
	try {
		// Read the directory contents
		const files = await fs.readdir(dirPathPages);
		let pagelist = [];

		// Iterate through each file
		for (const file of files) {
			// Read the file content
			const fileContent = await fs.readFile(`${dirPathPages}/${file}`, "utf-8");
			const page = {
				title: file,
				content: fileContent,
			};
			pagelist.push(page);
		}

		// Write the content to the JSON file
		const contentdata = JSON.stringify(pagelist, null, 2);
		await fs.writeFile(dataPath, contentdata);
		console.log(`Data written to ${dataPath}`);
	} catch (err) {
		console.error("Error processing pages:", err);
	}
};

// Run the function to get pages
getPages();
