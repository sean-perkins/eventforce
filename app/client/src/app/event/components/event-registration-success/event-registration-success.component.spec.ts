import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { EventRegistrationSuccessComponent } from './event-registration-success.component';

@Component({
    selector: 'md-icon',
    template: ``
})
class MockIconComponent { }

describe('EventRegistrationSuccessComponent', () => {
    let component: EventRegistrationSuccessComponent;
    let fixture: ComponentFixture<EventRegistrationSuccessComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventRegistrationSuccessComponent,
                MockIconComponent
            ],
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
