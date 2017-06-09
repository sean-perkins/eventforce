import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { AppReducer } from '../../../store/app.state';
import { EventDetailComponent } from './event-detail.component';

@Component({
    selector: 'ef-session-list-item',
    template: ``
})
class MockSessionListItemComponent {
    @Input() session: any;
}

@Component({
    selector: 'ef-event-status',
    template: ``
})
class MockEventStatusComponent {
    @Input() status: string;
}

@Component({
    selector: 'md-icon',
    template: ``
})
class MockInputComponent {}

@Component({
    selector: 'ef-loading-spinner',
    template: ``
})
class MockLoadingSpinnerComponent {
    @Input() message: string;
}

describe('EventDetailComponent', () => {
    let component: EventDetailComponent;
    let fixture: ComponentFixture<EventDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EventDetailComponent,
                MockSessionListItemComponent,
                MockEventStatusComponent,
                MockLoadingSpinnerComponent,
                MockInputComponent
            ],
            imports: [
                RouterTestingModule,
                StoreModule.provideStore(AppReducer),
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
