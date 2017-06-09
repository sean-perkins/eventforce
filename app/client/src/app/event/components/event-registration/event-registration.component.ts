import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
    IAppState,
    getEventSessions,
    getEventRegistering,
    getEventsLoading,
    getEventDetail } from './../../../store/app.state';
import { Session, Event } from './../../../common/models/index';
import { CustomValidators } from './../../../forms/index';
import { EventState } from './../../../store/states/event.state';

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

    event$: Observable<Event>;

    saving$: Observable<boolean>;

    loading$: Observable<boolean>;

    constructor(
        private store$: Store<IAppState>,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private actions: Actions,
        private snackBar: MdSnackBar) { }

    ngOnInit() {
        this.eventId = this.route.snapshot.params['id'];
        this.loading$ = this.store$.let(getEventsLoading);

        this.form = this.fb.group({
            id: [this.eventId],
            sessions: [[], Validators.required],
            firstName: ['', [Validators.required, Validators.maxLength(180)]],
            lastName: ['', [Validators.required, Validators.maxLength(255)]],
            company: ['', Validators.maxLength(255)],
            phone: ['', CustomValidators.validPhone],
            email: ['', [Validators.required, CustomValidators.validEmail]],
            event: [null, Validators.required]
        });

        this.event$ = this.store$.let(getEventDetail);
        this.sessions$ = this.store$.let(getEventSessions);
        this.saving$ = this.store$.let(getEventRegistering);
        this.store$.dispatch(new eventActions.FetchEventSessionsAction(this.eventId));
        this.store$.dispatch(new eventActions.FindEventAction(this.eventId));

        this.event$.subscribe(event => {
            if (event !== null) {
                this.form.controls['event'].setValue(event);
            }
        });
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
        else {
            this.snackBar.open('Please correct the issues with your input.', null, {
                duration: 3000,
                politeness: 'assertive'
            });
        }
    }

}
