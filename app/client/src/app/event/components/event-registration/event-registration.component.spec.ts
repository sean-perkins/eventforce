import { Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { AppReducer } from '../../../store/app.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdSnackBarModule } from '@angular/material';
import { EventRegistrationComponent } from './event-registration.component';

@Component({
    selector: 'ef-input',
    template: ``
})
class MockInputComponent {
    @Input() control: any;
    @Input() submitted: boolean;
}

@Component({
    selector: 'md-input-container',
    template: '<ng-content></ng-content>'
})
class MockInputContainerComponent {}

@Component({
    selector: 'ef-session-list-item',
    template: ``
})
class MockSessionListItemComponent {
    @Input() session: any;
    @Input() control: any;
}

describe('EventRegistrationComponent', () => {
    let component: EventRegistrationComponent;
    let fixture: ComponentFixture<EventRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventRegistrationComponent,
                MockInputComponent,
                MockInputContainerComponent,
                MockSessionListItemComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                MdSnackBarModule,
                StoreModule.provideStore(AppReducer),
            ],
            providers: [
                { provide: Actions, useValue: {}}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventRegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
