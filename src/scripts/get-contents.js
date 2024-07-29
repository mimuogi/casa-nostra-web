import path from "path";
import fs from "fs";
import { kebabCase } from "./utils/kebabCase.js";
import { sortNewestPosts } from "./utils/sorts.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPathContent = path.join(__dirname, "../content");
const dataDir = path.join(__dirname, "../data");

if (!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, { recursive: true });
}

const processDirectory = async (dirPath, outputFilename) => {
	try {
		const files = await fs.promises.readdir(dirPath);

		let postlist = [];

		for (const file of files) {
			const filePath = path.join(dirPath, file);
			const fileStat = await fs.promises.stat(filePath);

			// Check if the current item is a file
			if (!fileStat.isFile()) {
				console.log(`Skipping directory or non-file item: ${filePath}`);
				continue;
			}

			const fileContent = await fs.promises.readFile(filePath, "utf-8");
			const lines = fileContent.split("\n");

			const getMetadataIndexes = (indexArray, lineContent, index) => {
				if (/^---/.test(lineContent)) {
					indexArray.push(index);
				}
				return indexArray;
			};

			const parseMetadata = ({ metadataIndexes, lines }) => {
				if (metadataIndexes.length === 2) {
					const metadataLines = lines.slice(
						metadataIndexes[0] + 1,
						metadataIndexes[1]
					);
					const metadataValues = {};
					metadataLines.forEach((line) => {
						const [key, ...rest] = line.split(":");
						if (key && rest.length > 0) {
							metadataValues[key.trim()] = rest.join(":").trim();
						}
					});
					return metadataValues;
				}
				return {};
			};

			const parseContent = ({ metadataIndexes, lines }) => {
				if (metadataIndexes.length === 2) {
					lines = lines.slice(metadataIndexes[1] + 1, lines.length);
				}
				return lines.join("\n");
			};

			const metadataIndexes = lines.reduce(getMetadataIndexes, []);
			const metadata = parseMetadata({ metadataIndexes, lines });
			const content = parseContent({ metadataIndexes, lines });

			const post = {
				title: metadata.title ? metadata.title : "Post sense títol",
				author: metadata.author ? metadata.author : "Anònim",
				date: metadata.date ? metadata.date : "Atemporal",
				content: content ? content : "",
				id: kebabCase(metadata.title),
				tags: metadata.tags
					? metadata.tags.split(",").map((tag) => tag.trim())
					: [], // Tags comma separated
				imageUrl: metadata.imageUrl ? metadata.imageUrl : "",
			};
			postlist.push(post);
		}

		const sortedList = sortNewestPosts(postlist);

		let contentdata = JSON.stringify(sortedList, null, 2);
		fs.writeFileSync(path.join(dataDir, outputFilename), contentdata);
	} catch (err) {
		console.error(`Error processing posts in directory ${dirPath}:`, err);
	}
};

const getContents = async () => {
	try {
		const subfolders = ["altres", "podcast-posts", "posts"];
		for (const subfolder of subfolders) {
			const subfolderPath = path.join(dirPathContent, subfolder);
			await processDirectory(subfolderPath, `${subfolder}.json`);
		}
	} catch (err) {
		console.error("Error processing subfolders:", err);
	}
};

getContents();
