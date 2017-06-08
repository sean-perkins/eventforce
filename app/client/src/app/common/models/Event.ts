
export class Event {
    /**
     * The salesforce ID of the event
     */
    id: string;
    /**
     * The name of the event
     */
    name: string;
    /**
     * The description of the event
     */
    description: string;
    /**
     * The current status of the event
     */
    status: string;
    /**
     * The maximum number of attendees allowed to an event
     */
    registrationLimit: number;
    /**
     * The number of available seats open for registration
     */
    remainingSeats: number;
    /**
     * The start date/time of the event
     */
    start: string;
    /**
     * The end date/time of the event
     */
    end: string;
    /**
     * The collection of sessions under an event
     */
    sessions: any[];

    constructor(options: Event = <Event>{}) {
        this.id = options.id || null;
        this.name = options.name || null;
        this.description = options.description || null;
        this.status = options.status || null;
        this.registrationLimit = options.registrationLimit || null;
        this.remainingSeats = options.remainingSeats || null;
        this.start = options.start || null;
        this.end = options.end || null;
        this.sessions = Array.isArray(options.sessions) ? options.sessions : [];
    }

    get displayedRemainingSeats(): any {
        if (this.registrationLimit) {
            if (this.remainingSeats < 1) {
                return this.registrationLimit;
            }
            return this.remainingSeats;
        }
        return '∞'
    }

}
