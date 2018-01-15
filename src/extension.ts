'use strict';
import * as vscode from 'vscode';
import { SimpleDownload } from './simpleDownload';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "vscode-simple-download" is now active!');

    var download = new SimpleDownload();

    let disposable = vscode.commands.registerCommand('extension.simpleDownload.showQuickPick', () => {
        download.showQuickPick();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}