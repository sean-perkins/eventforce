import { Attendee } from './Attendee';
import { Session } from './Session';
import { Status } from './Status';
export class Event {

    static Model = 'Event__c';
    /**
     * Represents the salesforce id
     */
    id: string;
    /**
     * The name of the Event
     */
    name: string;
    /**
     * The end date-time of the event
     */
    end: string;
    /**
     * The start date-time of the event
     */
    start: string;
    /**
     * The maximum number of attendees that can register to the event
     */
    registrationLimit: number;
    /**
     * The event status
     */
    status: Status;
    /**
     * The associated sessions under an event
     */
    sessions: Session[];
    /**
     * The top-level attendees to the event
     */
    attendees: Attendee[];

    constructor (options: any  = <Event>{}) {
        this.id = options.Id;
        this.name = options.Name;
        this.registrationLimit = options.Registration_Limit__c;
        this.start = options.Start__c;
        this.end = options.End__c;
        this.status = options.Status__c;
        this.sessions = Array.isArray(options.Sessions__c) ? options.Sessions__c : [];
        this.attendees = Array.isArray(options.Attendees__c) ? options.Attendees__c : [];
    }

}
