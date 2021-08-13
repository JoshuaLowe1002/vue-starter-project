<template>
	<font-awesome-icon :icon="icon" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ComponentName } from "@/components/constants";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
	name: ComponentName.Button,
	components: {
		FontAwesomeIcon
	},
	props: {
		icon: {
			type: Array
		}
	}
});
</script>
