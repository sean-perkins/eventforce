import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { EventListItemComponent } from './event-list-item.component';

@Component({
    selector: 'ef-event-status',
    template: ``
})
class MockEventStatusComponent {
    @Input() status: string;
}

describe('EventListItemComponent', () => {
    let component: EventListItemComponent;
    let fixture: ComponentFixture<EventListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventListItemComponent,
                MockEventStatusComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
