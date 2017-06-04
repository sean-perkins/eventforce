import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'month'
})
export class MonthPipe implements PipeTransform {

    monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    transform(value: any, args?: any): any {
        const timestamp = Date.parse(value);
        if (isNaN(timestamp)) {
            return '';
        }
        const month = new Date(timestamp).getMonth();
        return month < this.monthNames.length ? this.monthNames[month] : '';
    }

}
