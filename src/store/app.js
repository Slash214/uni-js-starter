import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => ({
		tapCount: 0,
	}),
	actions: {
		increment() {
			this.tapCount += 1;
		},
	},
});
