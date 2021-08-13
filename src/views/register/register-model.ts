import { FieldSchema, Form } from "@/components/form/form-types";
import { auth } from "@/providers/firebase-provider";
import router from "@/router";
import * as yup from "yup";
import NProgress from "nprogress";

export class Register {
	public registerWithEmailAndPassword(form: Form): void {
		NProgress.start();
		auth.createUserWithEmailAndPassword(form.values["email"], form.values["password"]).then(async () => {
			await auth.currentUser?.updateProfile({
				displayName: form.values["name"]
			});
			NProgress.done();
			router.push("/");
		}).catch((error: Error) => {
			// eslint-disable-next-line no-console
			console.log(error);
		});
	}

	public formSchema: Array<FieldSchema> = [
		{
			name: "name",
			component: "Input",
			type: "text",
			label: "Name",
			validation: yup.string().required()
		},
		{
			name: "email",
			component: "Input",
			type: "email",
			label: "Email Address",
			validation: yup.string().email().required()
		},
		{
			name: "password",
			component: "Input",
			type: "password",
			label: "Password",
			validation: yup.string().required()
		}
	]
}