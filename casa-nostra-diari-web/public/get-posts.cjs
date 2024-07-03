/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');

const dirPathContent = path.join(__dirname, "../src/content")
let postlist = []

const getPosts = () => {
     fs.readdir(dirPathContent, (err, files) => {
        //console.log(files.length)
        if(err){
            return console.log("Failed to list content in comtent directory: " + err)
        }
        console.log(files)
        files.forEach((file, i) => {
            let post = {}
            let metadataValues = {}
            fs.readFile(`${dirPathContent}/${file}`, "utf-8", (err, fileContent) => {
                if(err){
                    console.log("Error reading the files in content directory: " + err)
                }
                //console.log(content)
                const lines = fileContent.split("\n")

                const getMetadataIndexes = (indexArray, lineContent, index) =>{
                    if(/^---/.test(lineContent)){
                        indexArray.push(index)
                    }
                    return indexArray
                }
                const parseMetadata = ({metadataIndexes, lines}) => {
                    if ( metadataIndexes.length > 0 ) {
                        const metadataLines = lines.slice(metadataIndexes[0]+1, metadataIndexes[1])
                        metadataLines.forEach(line =>{
                            metadataValues[line.split(":")[0]] = line.split(":")[1]
                        })
                        //console.log(metadataValues)
                        return metadataValues
                    }

                }

                const parseContent = ({metadataIndexes, lines}) => {
                    
                    if( metadataIndexes.length > 0 ) {
                       lines = lines.slice(metadataIndexes[1]+1, lines.length)
                    }
                    return lines.join("\n")
                }

                //console.log(lines)
                const metadataIndexes = lines.reduce(getMetadataIndexes, [])
                //console.log(metadataIndexes)
                const metadata = parseMetadata({metadataIndexes, lines })
                const content = parseContent({metadataIndexes, lines})
                const dateStamp = new Date(metadata.date)
                const timeStamp = dateStamp.getTime() / 1000

                post = {
                    id: i+1,
                    timestamp: timeStamp,
                    title: metadata.title ? metadata.title : "Post sense títol",
                    author: metadata.author ? metadata.author : "Anònim",
                    date: metadata.date ? metadata.date : "Atemporal",
                    content: content ? content : ""

                }
                postlist.push(post)
                if (i === files.length-1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.timestamp < b.timestamp ? 1 : -1
                    })

                    let contentdata = JSON.stringify(sortedList)
                    fs.writeFileSync("src/data/posts.json", contentdata)
                }
               
            })
        })

    })
    //setTimeout(()=>{console.log(postlist)}, 500)
    return
}

getPosts()
