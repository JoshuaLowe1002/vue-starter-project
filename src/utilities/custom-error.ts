export enum CustomErrorCode {
	None = 0,
	HttpNotFound = 404,
	FetchEndpointFailure = 10001000
}

export interface CustomError {
	code: number;
	name: string;
	message: string;
}
