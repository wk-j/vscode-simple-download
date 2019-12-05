import * as https from "https"
import * as fs from "fs"

var targetPath = "out/pom.xml"
var url = "https://raw.githubusercontent.com/wk-j/configurations/master/pom.xml";

var targetStream = fs.createWriteStream(targetPath)

https.get(url, res => {
    res.on("data", data => {
        targetStream.write(data)
    })
    res.on('end', () => {
        targetStream.close()
    });
})