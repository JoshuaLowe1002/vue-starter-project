<template>
	<button
		type="button"
		:class="disabled ? 'opacity-25 cursor-not-allowed' : ''"
		class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
	>
		<h1 class="w-full">
			{{ text }}
		</h1>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ComponentName } from "@/components/constants";

export default defineComponent({
	name: ComponentName.Button,
	props: {
		text: {
			type: String
		},
		color: {
			type: String
		},
		disabled: {
			type: Boolean
		}
	}
});
</script>
