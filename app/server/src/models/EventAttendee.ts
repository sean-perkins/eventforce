
export class EventAttendee {

    static Model = 'EventAttendee__c';
    /**
     * The salesforce attendee Id
     */
    attendee: string;
    /**
     * The salesforce session Id
     */
    event: string;

    constructor(options: any = <EventAttendee>{}) {
        this.attendee = options.Attendee__c;
        this.event = options.Event__c;
    }
}
