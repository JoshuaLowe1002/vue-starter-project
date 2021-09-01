import { endpointFetchAsync } from "../endpoint/endpoint";
import { EndpointRequest } from "../endpoint/endpoint-request";
import { EndpointResponse } from "../endpoint/types";

export interface Orders {
	paging_info: PagingInfo;
	data: Array<OrderModel>
}

export interface PagingInfo {
	fetched: number;
	limit: number;
	offset: number;
	total: number;
}

export interface OrderModel {
	id: number;
	reference: string;
	imported_reference: string;
	alternative_reference: string;
	status_id: number;
	status_key: string;
	date_created: string;
	transaction_date: string;
	date_sent_to_warehouse: string;
	date_dispatched: string;
	date_cancelled: string;
	total_order_value: number;
	currency_id: number;
	delivery_address_id: number;
	delivery_address_contact_id: number;
	delivery_address_contact_name: string;
	delivery_address_country_id: number;
	delivery_address_line1: string;
	delivery_address_line2: string;
	delivery_address_line3: string;
	delivery_address_line4: string;
	delivery_address_line5: string;
	delivery_address_subdivision_id: number;
	delivery_address_post_code: string;
	delivery_address_organisation_name: string;
	store_id: number;
	carrier_id: number;
	carrier_service_id: number;
	channel_id: number;
	hold_reason_id: number;
	carrier_service_level_id: number;
	consignment_failure_reason_id: number;
	part_ship: boolean;
	cancelled_by: string;
	quantity: number;
	reserved_quantity: number;
	cancellation_requested: boolean;
}

export async function getOrdersAsync(status_key?: string): Promise<EndpointResponse<Orders>> {
	return endpointFetchAsync("GET", new EndpointRequest(`orders?${status_key ? `status_key=${status_key}` : ""}`));
}