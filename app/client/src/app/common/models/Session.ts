export class Session {

    id: string;

    name: string;

    start: string;

    end: string;

    registrationLimit: number;

    constructor(options: Session = <Session>{}) {
        this.id = options.id || null;
        this.name = options.name || null;
        this.start = options.start || null;
        this.end = options.end || null;
        this.registrationLimit = options.registrationLimit || null;
    }

}
