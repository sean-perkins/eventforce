export class SalesForceUser {

    static get Username(): string {
        return process.env.SALESFORCE_USERNAME;
    }

    static get Password(): string {
        return `${process.env.SALESFORCE_PASSWORD}${process.env.SALESFORCE_SECURITY_TOKEN}`;
    }

    static get InstanceUrl(): string {
        return process.env.SALESFORCE_INSTANCE_URL;
    }

}
