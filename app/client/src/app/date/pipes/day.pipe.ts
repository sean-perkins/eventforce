import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'day'
})
export class DayPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        const timestamp = Date.parse(value);
        if (isNaN(timestamp)) {
            return '';
        }
        const day = new Date(timestamp).getDate();
        return day < 10 ? `0${day}` : day;
    }

}
