import { Session } from './../../../common/models/Session';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ef-session-list-item',
    templateUrl: './session-list-item.component.html',
    styleUrls: ['./session-list-item.component.scss']
})
export class SessionListItemComponent {

    @Input() session: Session;

    @Input() control: any;

    /**
     * Toggles the selection of a session
     */
    toggleSession(): void {
        if (this.control) {
            const sessions = this.control.value;
            if (sessions.indexOf(this.session.id) === -1) {
                sessions.push(this.session.id);
            }
            else {
                sessions.splice(sessions.indexOf(this.session.id), 1);
            }
            this.control.setValue(sessions);
        }
    }

}
