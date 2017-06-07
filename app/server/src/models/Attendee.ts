export class Attendee {

    static Model = 'Attendee__c';
    /**
     * The first name of the attendee
     */
    firstName: string;
    /**
     * The last name of the attendee
     */
    lastName: string;
    /**
     * The email address of the attendee
     */
    email: string;
    /**
     * The phone number of the attendee
     */
    phone: string;
    /**
     * The company name of the attendee (optional)
     */
    company: string;

    constructor(options: Attendee = <Attendee>{}) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.phone = options.phone;
        this.company = options.company;
    }

    /**
     * The full name of the Attendee
     */
    get name(): string {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    payload(eventId: string, sessions: any[]): any {
        return {
            First_Name__c: this.firstName,
            Last_Name__c: this.lastName,
            Email__c: this.email,
            Phone__c: this.phone,
            Event__c: eventId,
            Session__c: sessions.join(', ')
        };
    }

}
