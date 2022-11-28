import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MoreKeysPlugin extends Plugin {
	async onload() {
		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-tasks-panel',
			name: 'Open tasks panel',
			callback: () => {
				// @ts-ignore
				this.app.workspace.containerEl.querySelector('.workspace-tab-header[aria-label="tasks"]').click()
			}
		});
	}
}
