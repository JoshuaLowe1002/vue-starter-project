import { EndpointRequest } from "./endpoint-request";
import { EndpointErrorResponse, EndpointResponse } from "./types";
import { CustomErrorCode, CustomError } from "@/utilities/custom-error";

function createEndpointResponse<T>(): EndpointResponse<T> {
	return {
		data: undefined,
		hasError: false,
		wasSuccessful: false,
		error: {
			code: 0,
			name: "",
			message: ""
		}
	};
}

function getHeaders(): HeadersInit {
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		"fulfilmentcrowd-api-key": process.env.VUE_APP_API_KEY
	};

	return headers;
}

function createRequestInitializer(request: EndpointRequest, method: string): RequestInit {
	const initializer: RequestInit = {
		method,
		headers: getHeaders(),
		body: request.body
	};
	if (request.abortController) { 
		initializer.signal = request.abortController.signal;
	}
	return initializer;
}

export async function endpointFetchAsync<T>(method: string, request: EndpointRequest): Promise<EndpointResponse<T>> {
	const result: EndpointResponse<T> = createEndpointResponse();

	try {
		const fetchInitializer: RequestInit = createRequestInitializer(request, method);
		const response: Response = await fetch(request.url, fetchInitializer); 
		if (!response.ok) {
			result.error.code = response.status;
			const errorResponse: EndpointErrorResponse = await response.json();
			if (errorResponse) {
				result.error.message = errorResponse.error.message;
				result.error.name = errorResponse.error.code.toString();
			}
			else {
				result.error.message = response.statusText;
			}
		}
		else {
			if (request.isBlob) {
				result.data = await response.blob() as unknown as T;	
			}
			else {
				result.data = await response.json() as T;	
			}
			result.wasSuccessful = true;
		}
	}
	catch (e) {
		const error: CustomError = e as CustomError;
		result.hasError = true;
		if (error.code) {
			result.error.code = error.code;
		}
		else {
			result.error.code = CustomErrorCode.FetchEndpointFailure;
		}
		if (error.name) {
			result.error.name = error.name;
		}		
		if (error.message && !result.error.message) {
			result.error.message = error.message;
		}
	}
	return result;
}