<p align="center">
    <img src="https://github.com/wk-j/vscode-simple-download/blob/master/resource/logo.png?raw=true" />
</p>

#

[![Version](https://vsmarketplacebadge.apphb.com/version/wk-j.vscode-simple-download.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-simple-download) [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/wk-j.vscode-simple-download.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-simple-download)

Download http file into vscode workspace

# Installation

- <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Install Extensions
- Simple downloader

# Usage

Add file url to user or workspace settings (`appsettings.json`)

**Example**

```json
"simpleDownload": [
    {
        "name": "OmniSharp configuration",
        "url": "https://raw.githubusercontent.com/wk-j/configurations/master/omnisharp.json",
        "target": "omnisharp.json"
    }
]
```

**How to download `omnishrap.json` into workspace**

1. <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
2. Select `Download`
3. Select `Omnisharp configuration` in quick pick dialog.
4. File will download and save as `omnisharp.json` into vscode workspace