import { Component, Input } from '@angular/core';

@Component({
  selector: 'ef-event-status',
  templateUrl: './event-status.component.html',
  styleUrls: ['./event-status.component.scss']
})
export class EventStatusComponent {

    @Input() status: string;

    get statusClass(): string {
        if (this.status) {
            return this.status.replace(' ', '-').toLowerCase();
        }
        return '';
    }

}
