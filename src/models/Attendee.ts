export class Attendee {
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

}
