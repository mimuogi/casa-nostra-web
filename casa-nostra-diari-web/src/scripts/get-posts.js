/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import path from "path";
import fs from "fs";
import { kebabCase } from "./utils/kebabCase.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPathContent = path.join(__dirname, "../content");
const dataDir = path.join(__dirname, "../data");

let postlist = [];

if (!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, { recursive: true });
}

const getPosts = () => {
	fs.readdir(dirPathContent, (err, files) => {
		if (err) {
			return console.log("Failed to list content in content directory: " + err);
		}
		console.log(files);
		files.forEach((file, i) => {
			let post = {};
			let metadataValues = {};
			fs.readFile(`${dirPathContent}/${file}`, "utf-8", (err, fileContent) => {
				if (err) {
					console.log("Error reading the files in content directory: " + err);
				}
				const lines = fileContent.split("\n");

				const getMetadataIndexes = (indexArray, lineContent, index) => {
					if (/^---/.test(lineContent)) {
						indexArray.push(index);
					}
					return indexArray;
				};
				const parseMetadata = ({ metadataIndexes, lines }) => {
					if (metadataIndexes.length > 0) {
						const metadataLines = lines.slice(
							metadataIndexes[0] + 1,
							metadataIndexes[1]
						);
						metadataLines.forEach((line) => {
							metadataValues[line.split(":")[0].trim()] = line
								.split(":")[1]
								.trim();
						});
						return metadataValues;
					}
				};

				const parseContent = ({ metadataIndexes, lines }) => {
					if (metadataIndexes.length > 0) {
						lines = lines.slice(metadataIndexes[1] + 1, lines.length);
					}
					return lines.join("\n");
				};

				const metadataIndexes = lines.reduce(getMetadataIndexes, []);
				const metadata = parseMetadata({ metadataIndexes, lines });
				const content = parseContent({ metadataIndexes, lines });
				const dateStamp = new Date(metadata.date);
				const timeStamp = dateStamp.getTime() / 1000;

				post = {
					timestamp: timeStamp,
					title: metadata.title ? metadata.title : "Post sense títol",
					author: metadata.author ? metadata.author : "Anònim",
					date: metadata.date ? metadata.date : "Atemporal",
					content: content ? content : "",
					id: kebabCase(metadata.title),
				};
				postlist.push(post);
				if (i === files.length - 1) {
					const sortedList = postlist.sort((a, b) => {
						return a.timestamp < b.timestamp ? 1 : -1;
					});

					let contentdata = JSON.stringify(sortedList);
					fs.writeFileSync(path.join(dataDir, "posts.json"), contentdata);
				}
			});
		});
	});
	return;
};

getPosts();
