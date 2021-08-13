<template>
	<div>
		<label
			:for="name"
			class="block text-sm font-medium text-gray-700"
		>
			{{ label }}
		</label>
		<div class="relative mt-1 rounded-md shadow-sm">
			<input
				:id="name"
				:type="type"
				:name="name"
				:class="error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'"
				class="block w-full rounded-md shadow-sm sm:text-sm"
				:placeholder="placeholder"
				@input="this.$emit('update:modelValue', $event.target.value)"
			>
			<Icon
				v-if="error"
				class="absolute right-0 flex items-center pr-3 text-3xl text-red-500 pointer-events-none inset-y-1"
				:icon="['fas', 'exclamation-circle']"
			/>
		</div>
		<p
			v-if="error"
			class="mt-2 text-sm text-red-600"
		>
			{{ error }}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ComponentName } from "@/components/constants";

export default defineComponent({
	name: ComponentName.Input,
	props: {
		name: {
			type: String
		},
		type: {
			type: String
		},
		placeholder: {
			type: String
		},
		label: {
			type: String
		},
		value: {
			type: String
		},
		modelValue: {
			type: String
		},
		error: {
			type: String
		},
	},
	emits: ["update:modelValue"]
});
</script>
