import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

describe('EventRegistrationComponent', () => {
    let component: EventRegistrationComponent;
    let fixture: ComponentFixture<EventRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventRegistrationComponent,
                MockInputComponent,
                MockInputContainerComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule
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
