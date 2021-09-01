import { EndpointResponse } from "@/data/endpoint/types";
import { getOrdersAsync, Orders } from "@/data/providers/orders-provider";
import { getLocalizedText } from "@/utilities/localization";
import { reactive } from "vue";
import { OrdersState } from "./orders-state";

export class OrdersModel {
	// Define state for orders page
	public state: OrdersState = reactive(new OrdersState);

	// Get Translated text
	public getText(key: string): string {
		return getLocalizedText("orders", key);
	}

	// Initialise orders page
	public init(): void {
		this.getOrdersFromAPI();
	}

	// Get list of order from API
	public getOrdersFromAPI(): void {
		getOrdersAsync("dispatched_orders").then((response: EndpointResponse<Orders>) => {
			if (response.data && response.wasSuccessful) {
				this.state.orders = response.data;
			}
		});
	}
}