import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { EventListComponent } from './event-list.component';
import { AppReducer } from '../../../store/app.state';

@Component({
    selector: 'ef-event-list-item',
    template: ``
})
class MockEventListItemComponent {
    @Input() event: any;
}

describe('EventListComponent', () => {
    let component: EventListComponent;
    let fixture: ComponentFixture<EventListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventListComponent,
                MockEventListItemComponent
            ],
            imports: [
                StoreModule.provideStore(AppReducer)
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
