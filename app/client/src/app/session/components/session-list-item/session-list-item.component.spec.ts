import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SessionListItemComponent } from './session-list-item.component';

@Component({
    selector: 'md-checkbox',
    template: ``
})
class MockCheckboxComponent {}

describe('SessionListItemComponent', () => {
    let component: SessionListItemComponent;
    let fixture: ComponentFixture<SessionListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SessionListItemComponent,
                MockCheckboxComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
