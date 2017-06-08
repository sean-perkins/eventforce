import { Attendee } from './Attendee';
import { Status } from './Status';
export class Session {

    static Model = 'Session__c';

    /**
     * Represents the salesforce id
     */
    id: string;
    /**
     * The name of the event session
     */
    name: string;
    /**
     * The end date-time of the session
     */
    end: number;
    /**
     * The start date-time of the session
     */
    start: number;
    /**
     * The current status of the event session
     */
    status: Status;
    /**
     * The maximum number of attendees for the session
     */
    registrationLimit: number;
    /**
     * The number of attendees for the session
     */
    attendees: Attendee[];
    /**
     * The number of remaining seats
     */
    remainingSeats: number;

    constructor(options: any = <Session>{}) {
        this.id = options.Id;
        this.name = options.Name;
        this.end = options.End__c;
        this.start = options.Start__c;
        this.status = options.Status__c;
        this.attendees = Array.isArray(options.attendees) ? options.attendees : [];
        this.remainingSeats = options.Remaining_Seats__c;
        this.registrationLimit = options.Registration_Limit__c;
    }
}
