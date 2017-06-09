import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'eventSearch'
})
export class EventSearchPipe implements PipeTransform {

    transform(value: any[], args?: any): any {
        return value.filter(item => {
            if (args) {
                return item.name.trim().toLowerCase().indexOf(args.trim().toLowerCase()) !== -1;
            }
            return true;
        });
    }

}
