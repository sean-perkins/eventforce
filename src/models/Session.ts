import { Attendee } from './Attendee';
import { Status } from './Status';
export class Session {
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

    constructor(options: Session = <Session>{}) {
        this.name = options.name;
        this.end = options.end;
        this.start = options.start;
        this.status = options.status;
        this.attendees = Array.isArray(options.attendees) ? options.attendees : [];
    }
}
