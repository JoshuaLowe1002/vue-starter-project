import { getLocalizedText } from "@/utilities/localization";
import { reactive } from "vue";
import { HomeState } from "./home-state";

export class HomeModel {
	// Define state for home page
	public state: HomeState = reactive(new HomeState);

	// Get Translated text
	public getText(key: string): string {
		return getLocalizedText("home", key);
	}

	// Initialise home page
	public init(): void {
		this.changeTitle(`${this.getText("welcome")} 👋`);
	}

	// Change title text
	public changeTitle(text: string): void {
		this.state.title = text;
	}
}