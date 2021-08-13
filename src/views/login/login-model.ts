import { FieldSchema, Form } from "@/components/form/form-types";
import { auth } from "@/providers/firebase-provider";
import router from "@/router";
import * as yup from "yup";
import NProgress from "nprogress";

export class Login {
	public signInWithEmailAndPassword(form: Form): void {
		NProgress.start();
		auth.signInWithEmailAndPassword(form.values["email"], form.values["password"]).then(() => {
			router.push("/");
			NProgress.done();
		}).catch(() => {
			NProgress.done();
			form.errors["email"] = "Email/Password is incorrect";
		});
	}

	public formSchema: Array<FieldSchema> = [
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