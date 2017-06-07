import { EventState } from './../../../store/states/event.state';
import { Actions } from '@ngrx/effects';
import { IAppState, getEventSessions, getEventRegistering } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Session } from './../../../common/models/Session';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from './../../../forms/index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as eventActions from './../../../store/actions/event.action';

@Component({
    selector: 'ef-event-registration',
    templateUrl: './event-registration.component.html',
    styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

    form: FormGroup;
    /**
     * The submitted state of the form
     */
    submitted = false;
    /**
     * The salesforce event ID
     */
    eventId: string;

    sessions$: Observable<Session[]>;

    saving$: Observable<boolean>;

    constructor(
        private store$: Store<IAppState>,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private actions: Actions) { }

    ngOnInit() {
        this.eventId = this.route.snapshot.params['id'];

        this.form = this.fb.group({
            id: [this.eventId],
            sessions: [[], Validators.required],
            firstName: ['', [Validators.required, Validators.maxLength(180)]],
            lastName: ['', [Validators.required, Validators.maxLength(255)]],
            company: ['', Validators.maxLength(255)],
            phone: ['', CustomValidators.validPhone],
            email: ['', [Validators.required, CustomValidators.validEmail]]
        });

        this.sessions$ = this.store$.let(getEventSessions);
        this.saving$ = this.store$.let(getEventRegistering);
        this.store$.dispatch(new eventActions.FetchEventSessionsAction(this.eventId));
    }

    register(event: any, model: any, isValid: boolean) {
        event.preventDefault();
        this.submitted = true;
        if (isValid) {
            this.store$.dispatch(new eventActions.RegisterAction(model));

            this.actions.ofType(EventState.ActionTypes.REGISTER_COMPLETE)
                .do(() => {
                    this.router.navigate(['/registered']);
                }).subscribe();

            this.actions.ofType(EventState.ActionTypes.REGISTER_FAILED)
                .do(() => {
                    console.error('There was an issue! :(');
                }).subscribe();
        }
    }

}
