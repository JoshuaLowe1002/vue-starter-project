<template>
	<div class="flex items-center justify-center w-screen h-screen">
		<div class="flex flex-col justify-center text-center">
			<h1 class="mb-2 text-5xl font-bold text-gray-900">
				{{ view.state.title }}
			</h1>
			<h1 class="mb-1 text-gray-500">
				{{ auth.currentUser?.displayName }}
			</h1>
			<h1 class="mb-8 text-gray-500">
				{{ auth.currentUser?.email }}
			</h1>
			<Button
				text="Sign Out"
				@click="view.signOut()"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { View } from "@/views/constants";
import { Home } from "./home-model";
import { auth } from "@/providers/firebase-provider";

export default defineComponent({
	name: View.Home,
	setup() {
		const view: Home = new Home();

		onMounted(() => {
			view.init();
		});

		return { view, auth };
	}
});
</script>
