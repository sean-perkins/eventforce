import { Session } from './../../../common/models/Session';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ef-session-list-item',
    templateUrl: './session-list-item.component.html',
    styleUrls: ['./session-list-item.component.scss']
})
export class SessionListItemComponent {

    @Input() session: Session;

}
