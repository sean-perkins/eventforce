import { CustomValidators } from './../../../forms/index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.fb.group({
            sessions: [[], Validators.required],
            firstName: ['', [Validators.required, Validators.maxLength(180)]],
            lastName: ['', [Validators.required, Validators.maxLength(255)]],
            company: ['', Validators.maxLength(255)],
            phone: ['', CustomValidators.validPhone],
            email: ['', [Validators.required, CustomValidators.validEmail]]
        });
    }

    register(event: any, model: any, isValid: boolean) {
        event.preventDefault();
        this.submitted = true;
        console.log('model', model);
        if (isValid) {

        }
    }

}
