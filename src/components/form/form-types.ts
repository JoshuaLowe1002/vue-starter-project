export interface Form {
	title?: string;
	values: FormValues;
	errors: FormValues;
	valid: boolean;
}

export interface FieldSchema {
	component: string;
	name: string;
	label: string;
	value?: string;
	required?: boolean;
	readonly?: boolean;
	type?: string;
	hidden?: boolean;
	logic?: (dymanicForm: any) => void;
	validation?: any;
}

export interface FormValues {
	[key: string]: any;
}