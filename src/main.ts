import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";
import Components from "@/components/index";
import { auth } from "./providers/firebase-provider";
import "@/providers/icon-provider";

let app: ComponentPublicInstance | undefined;

auth.onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App)
			.use(router)
			.use(Components)
			.mount("#app");
	}
});