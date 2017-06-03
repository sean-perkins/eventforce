export class SalesForceAuthResponse {

    id: string;

    organizationId: string;

    url: string;

    accessToken: string;

    constructor(options: SalesForceAuthResponse = <SalesForceAuthResponse> {}) {
        this.id = options.id;
        this.organizationId = options.organizationId;
        this.url = options.url;
        this.accessToken = options.accessToken;
    }
}
