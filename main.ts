import {ItemView, MarkdownView, Plugin} from 'obsidian';

export default class MoreKeysPlugin extends Plugin {
	async onload() {
		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'focus-tasks-panel',
			name: 'Focus tasks panel',
			callback: () => {
				// @ts-ignore
				this.app.workspace.containerEl.querySelector('.workspace-tab-header[aria-label="tasks"]').click()
			}
		});

		// thanks, @cmoskvitin !
		this.addCommand({
			id: 'maximize',
			name: 'Maximize',
			checkCallback: (checking: boolean) => {
				const leaf = this.app.workspace.getActiveViewOfType(ItemView)?.leaf;
				if (!leaf) return false;

				// Don't trigger fullscreen mode when current leaf is empty.
				if (leaf.view.getViewType() === "empty") return false;

				if (!checking) {
					// @ts-ignore
					const containerEl = leaf.containerEl;

					if (!document.fullscreenElement) {
						containerEl.requestFullscreen();
					} else {
						document.exitFullscreen();
					}
				}

				return true;
			}
		})
	}
}
