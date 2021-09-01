import { CustomError } from "@/utilities/custom-error";

export interface EndpointResponse<T> {
	data: T | undefined;
	error: CustomError;
	hasError: boolean;
	wasSuccessful: boolean;
}

export interface EndpointErrorResponse {
	error: CustomError;
}

export enum EndpointRequestStatus {
	Pending,
	InProgress,
	Completed,
	Failed,
	Aborting,
	Aborted
}
