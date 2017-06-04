
export class Event {

    Id: string;

    Name: string;

    constructor(options: Event = <Event>{}) {
        this.Id = options.Id || null;
        this.Name = options.Name || null;
    }
}
