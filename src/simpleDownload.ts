import * as vscode from "vscode"
import * as https from "https";
import * as fs from "fs";
import * as path from "path";

type Config = {
    name: string
    url: string
    target: string
}

export class SimpleDownload {
    configs: Config[]
    constructor() {
        this.configs = this.loadConfig()
    }

    private loadConfig() {
        var config = vscode.workspace.getConfiguration().get("simpleDownload") as Config[]
        return config || []
    }

    async showQuickPick() {
        var items = this.configs.map(x => x.name)
        var result = await vscode.window.showQuickPick(items)
        if (result) {
            var config = this.configs.filter(x => x.name == result)[0]
            this.download(config);
        }
    }

    async download(config: Config) {
        var dir = vscode.workspace.rootPath
        var targetPath = path.join(dir, config.target)
        var targetStream = fs.createWriteStream(targetPath)

        https.get(config.url, res => {
            res.on("data", data => {
                targetStream.write(data)
                targetStream.close()
            })
        })
    }
}