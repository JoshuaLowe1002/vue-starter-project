import { auth } from "@/providers/firebase-provider";
import router from "@/router";
import { reactive } from "vue";
import { HomeState } from "./home-state";

export class Home {
	// Define state for home page
	public state: HomeState = reactive(new HomeState);

	// Initialise home page
	public init(): void {
		this.state.title = "Welcome! 👋";
	}

	// Sign User Out
	public signOut(): void {
		auth.signOut().then(() => {
			router.push("/login");
		});
	}
}