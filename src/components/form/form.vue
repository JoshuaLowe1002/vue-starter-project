<template>
	<div class="space-y-6">
		<component
			v-bind="field"
			:is="field.component"
			v-for="field in formSchema"
			:key="field.name"
			v-model="form.values[field.name]"
			:error="form.errors[field.name]"
			@change="validateField(field.name)"
			@input="validateField(field.name)"
			@blur="validateField(field.name)"
		/>

		<Button
			:disabled="!form.valid"
			:text="submitText ? submitText : 'Submit'"
			class="w-full"
			@click="submitForm"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, SetupContext } from "vue";
import { Data } from "@/components/types";
import { FieldSchema, Form } from "./form-types";
import * as yup from "yup";
import { ComponentName } from "../constants";

export default defineComponent({
	name: ComponentName.Form,
	props: {
		schema: {
			type: Array,
			required: true
		},
		submitText: {
			type: String
		}
	},
	emits: ["submit"],
	setup(props: Data, context: SetupContext) {

		const form: Ref<Form> = ref({
			valid: false,
			values: {},
			errors: {}
		});

		const validationSchema: Ref = ref({});
		const formSchema: Ref<Array<FieldSchema>> = ref(props.schema as Array<FieldSchema>);

		function getValidationSchema(): yup.AnyObjectSchema {
			validationSchema.value = {};
			formSchema.value.forEach((field: FieldSchema) => {
				if (field.logic) {
					field.logic(form.value);
				}
				if (!field.hidden) {
					validationSchema.value[field.name] = field.validation;
				}
			});
			return yup.object().shape(validationSchema.value);
		}

		function validateField(field: string): void {
			getValidationSchema()
				.validateAt(field, form.value.values)
				.then(() => {
					delete form.value.errors[field];
				})
				.catch((err: Error) => {
					form.value.errors[field] = err.message;
				});
			isFormValid();
		}

		function validateForm(): void {
			getValidationSchema().validate(form.value.values, { abortEarly: false })
				.then(() => {
					form.value.errors = {};
				})
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.catch((err: any) => {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					err.inner.forEach((error: any) => {
						form.value.errors[error.path] = error.message;
					});
				});
		}

		function isFormValid(): void {
			getValidationSchema().validate(form.value.values, { abortEarly: true })
				.then(() => {
					form.value.valid = true;
				})
				.catch(() => {
					form.value.valid = false;
				});
		}

		isFormValid();

		formSchema.value.forEach((field: FieldSchema) => {
			form.value.values[field.name] = field.value;
		});

		function submitForm(): void {
			context.emit("submit", form.value);
			validateForm();
		}

		return { formSchema, form, validateField, submitForm };
	},
});
</script>
