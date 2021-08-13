<template>
	<div class="flex min-h-screen bg-white">
		<div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="w-full max-w-sm mx-auto lg:w-96">
				<div>
					<img
						class="w-auto h-12"
						src="/logo.svg"
					>
					<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<p class="mt-2 text-sm text-gray-600">
						Or
						<span
							class="font-medium text-blue-500 cursor-pointer hover:text-blue-400"
							@click="this.$router.push('/register')"
						>
							register for an account
						</span>
					</p>
				</div>

				<div class="mt-8">
					<div class="mt-6">
						<Form
							:schema="view.formSchema"
							submit-text="Sign In"
							@submit="view.signInWithEmailAndPassword"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
			<div
				class="absolute inset-0 object-cover w-full h-full"
				style="background-image: url('https://content.instructables.com/ORIG/FQ1/KKSZ/F3YIJII6/FQ1KKSZF3YIJII6.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=ff1eb6633b49295d0b085ba14273f58a')"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { View } from "@/views/constants";
import { Login } from "./login-model";

export default defineComponent({
	name: View.Login,
	setup() {
		const view: Login = new Login();

		return { view };
	}
});
</script>

