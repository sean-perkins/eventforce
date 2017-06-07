
export class SessionAttendee {

    static Model = 'SessionAttendee__c';
    /**
     * The salesforce attendee Id
     */
    attendee: string;
    /**
     * The salesforce session Id
     */
    session: string;

    constructor(options: any = <SessionAttendee>{}) {
        this.attendee = options.Attendee__c;
        this.session = options.Session__c;
    }
}
