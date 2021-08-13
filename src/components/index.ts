import { App } from "vue";
import { ComponentName } from "./constants";

import Input from "@/components/input/input.vue";
import Button from "@/components/button/button.vue";
import Icon from "@/components/icon/icon.vue";
import Form from "@/components/form/form.vue";

export default {
	install(app: App): void {
		app.component(ComponentName.Input, Input);
		app.component(ComponentName.Button, Button);
		app.component(ComponentName.Icon, Icon);
		app.component(ComponentName.Form, Form);
	}
};