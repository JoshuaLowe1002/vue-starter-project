<template>
	<div
		v-if="view.state.orders"
		class="flex items-center justify-center w-screen h-screen"
	>
		<div class="w-96 h-[35rem] overflow-y-auto">
			<div
				v-for="order in view.state.orders.data"
				:key="order"
				class="py-4"
			>
				<h1 class="font-bold">
					{{ order.imported_reference ? order.imported_reference : order.reference }}
				</h1>
				<h1 class="text-sm">
					Value: {{ order.total_order_value }}
				</h1>
				<h1 class="text-sm">
					{{ order.delivery_address_contact_name }}
				</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { View } from "@/views/constants";
import { OrdersModel } from "./orders-model";

export default defineComponent({
	name: View.Orders,
	setup() {
		const view: OrdersModel = new OrdersModel();

		onMounted(() => {
			view.init();
		});

		return { view };
	}
});
</script>
