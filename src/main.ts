import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";
import Components from "@/components/index";
import "@/data/providers/icon-provider";
import { loadPreferredLanguageAsync } from "./utilities/localization";

export const preferredLanguage: string = "en";

loadPreferredLanguageAsync().then(() => {
	createApp(App)
		.use(router)
		.use(Components)
		.mount("#app");
});