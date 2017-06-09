
const dateFormat = require('dateformat');

export class DateFormat {

    static format(date: string) {
        return dateFormat(date, 'mm/dd/yyyy h:MM TT');
    }

}
