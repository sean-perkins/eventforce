import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Pipe } from '@angular/core';
import { EventListComponent } from './event-list.component';
import { AppReducer } from '../../../store/app.state';

@Component({
    selector: 'ef-event-list-item',
    template: ``
})
class MockEventListItemComponent {
    @Input() event: any;
}

@Component({
    selector: 'md-input-container',
    template: `<ng-content></ng-content>`
})
class MockInputContainerComponent {}

@Pipe({
    name: 'eventSearch'
})
class MockEventSearchPipe {
    transform(value: any[], args?: any): any {
        return value;
    }
}

describe('EventListComponent', () => {
    let component: EventListComponent;
    let fixture: ComponentFixture<EventListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventListComponent,
                MockEventListItemComponent,
                MockInputContainerComponent,
                MockEventSearchPipe
            ],
            imports: [
                StoreModule.provideStore(AppReducer),
                RouterTestingModule
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
