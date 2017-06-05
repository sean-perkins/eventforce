import { Event } from './../../../common/index';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ef-event-list-item',
    templateUrl: './event-list-item.component.html',
    styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent {

    @Input() event: Event;

}
