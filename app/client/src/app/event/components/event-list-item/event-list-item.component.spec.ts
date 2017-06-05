import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Pipe, Input } from '@angular/core';
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
            ],
            imports: [
                RouterTestingModule
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
