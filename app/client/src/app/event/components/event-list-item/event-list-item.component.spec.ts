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

@Pipe({
    name: 'day'
})
class MockDayPipe {
    transform(value: any, args?: any): any {
        return value;
    }
}

@Pipe({
    name: 'month'
})
class MockMonthPipe {
    transform(value: any, args?: any): any {
        return value;
    }
}

describe('EventListItemComponent', () => {
    let component: EventListItemComponent;
    let fixture: ComponentFixture<EventListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventListItemComponent,
                MockEventStatusComponent,
                MockDayPipe,
                MockMonthPipe
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
