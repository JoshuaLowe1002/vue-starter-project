// Get the API url from environment variable.
const BASE_API_URL: string = process.env.VUE_APP_API_URL;

export class EndpointRequest {
	private _url: string;
	private _body: BodyInit | null | undefined;
	private _abortController: AbortController | undefined;
	private _isBlob: boolean | undefined;

	public getApiPath(resourcePath: string, customURL: boolean | undefined): string {
		let path: string = `${BASE_API_URL}/${resourcePath}`;
		if (customURL) {
			path = resourcePath;
		}
		return path;
	}

	constructor(resourcePath: string, customURL?: boolean, body?: BodyInit | null | undefined, isBlob?: boolean) {
		this._url = this.getApiPath(resourcePath, customURL);
		this._body = body;
		this._isBlob = isBlob;
	}

	public get url(): string {
		return this._url;
	}

	public get body(): BodyInit | null | undefined {
		return this._body;
	}

	public get isBlob(): boolean | undefined {
		return this._isBlob;
	}

	public ensureAbortable(): void {
		if (this._abortController === undefined) {
			this._abortController = new AbortController();
		}
	}

	public get abortController(): AbortController | undefined {
		return this._abortController;
	}

	public abort(): void {
		if (this._abortController !== undefined) {
			this._abortController.abort();
		}
		else {
			console.warn("EndpointRequest", "Cannot abort request without calling ensureAbortable().");
		}
	}
}
