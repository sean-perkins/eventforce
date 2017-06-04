
export class Event {

    id: string;

    name: string;

    status: string;

    registrationLimit: number;

    start: string;

    end: string;


    sessions: any[];

    constructor(options: Event = <Event>{}) {
        this.id = options.id || null;
        this.name = options.name || null;
        this.status = options.status || null;
        this.registrationLimit = options.registrationLimit || null;
        this.start = options.start || null;
        this.end = options.end || null;
        this.sessions = Array.isArray(options.sessions) ? options.sessions : [];
    }
}
