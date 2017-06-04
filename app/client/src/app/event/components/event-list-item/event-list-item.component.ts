import { Event } from './../../../common/index';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ef-event-list-item',
    templateUrl: './event-list-item.component.html',
    styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

    @Input() event: Event

    constructor() { }

    ngOnInit() {
    }

}
