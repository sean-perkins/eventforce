import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationSuccessComponent } from './event-registration-success.component';

describe('EventRegistrationSuccessComponent', () => {
    let component: EventRegistrationSuccessComponent;
    let fixture: ComponentFixture<EventRegistrationSuccessComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventRegistrationSuccessComponent],
            imports: [
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventRegistrationSuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
