export class Session {

    id: string;

    name: string;

    start: string;

    end: string;

    registrationLimit: number;

    remainingSeats: number;

    constructor(options: Session = <Session>{}) {
        this.id = options.id || null;
        this.name = options.name || null;
        this.start = options.start || null;
        this.end = options.end || null;
        this.remainingSeats = options.remainingSeats || null;
        this.registrationLimit = options.registrationLimit || null;
    }

    get soldout(): boolean {
        return this.registrationLimit && this.remainingSeats < 1;
    }

    get displayedRemainingSeats(): any {
        if (this.registrationLimit && this.registrationLimit !== null) {
            if (this.remainingSeats < 1) {
                return this.registrationLimit;
            }
            return this.remainingSeats;
        }
        return '∞'
    }

}
