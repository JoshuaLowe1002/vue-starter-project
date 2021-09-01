<template>
	<div class="flex items-center justify-center w-screen h-screen">
		<div class="flex flex-col justify-center space-y-4 text-center">
			<h1 class="text-5xl font-bold text-gray-900">
				{{ view.state.title }}
			</h1>
			<Button
				:text="view.getText('click-me')"
				@click="view.changeTitle(view.getText('clicked'))"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { View } from "@/views/constants";
import { HomeModel } from "./home-model";

export default defineComponent({
	name: View.Home,
	setup() {
		const view: HomeModel = new HomeModel();

		onMounted(() => {
			view.init();
		});

		return { view };
	}
});
</script>
