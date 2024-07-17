/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const fs = require("fs");

const dirPathPages = path.join(__dirname, "../pages/content");

let pagelist = [];

const getPages = () => {
	fs.readdir(dirPathPages, (err, files) => {
		if (err) {
			return console.log("Failed to list content in content directory: " + err);
		}
		console.log(files);
		files.forEach((file) => {
			let page = {};
			fs.readFile(`${dirPathPages}/${file}`, "utf-8", (err, fileContent) => {
				if (err) {
					console.log("Error reading the files in content directory: " + err);
				}
				page = {
					title: file,
					content: fileContent,
				};
				pagelist.push(page);
				let contentdata = JSON.stringify(pagelist);
				fs.writeFileSync("src/data/pages.json", contentdata);
			});
		});
	});
	return;
};

getPages();
