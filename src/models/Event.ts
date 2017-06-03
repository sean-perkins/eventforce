import { Attendee } from './Attendee';
import { Session } from './Session';
import { Status } from './Status';
export class Event {

    static Model = 'Event__c';
    /**
     * Represents the salesforce id
     */
    Id: string;
    /**
     * The name of the Event
     */
    Name: string;
    /**
     * The end date-time of the event
     */
    end: number;
    /**
     * The start date-time of the event
     */
    start: number;
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

    constructor (options: Event  = <Event>{}) {
        this.Id = options.Id;
        this.Name = options.Name;
        this.start = options.start;
        this.end = options.end;
        this.status = options.status;
        this.sessions = Array.isArray(options.sessions) ? options.sessions : [];
        this.attendees = Array.isArray(options.attendees) ? options.attendees : [];
    }

}
