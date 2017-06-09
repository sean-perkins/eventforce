import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { AppReducer } from '../../../store/app.state';
import { Event } from '../../../common/index';
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
class MockInputComponent { }

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

    describe('event status', () => {

        it('should display the event status if it is not `Open`', () => {
            fixture.componentInstance.event$ = Observable.of(
                new Event(<any>{
                    status: 'Sold Out'
                })
            );
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const statusEl = fixture.debugElement.query(By.css('ef-event-status'));
                expect(statusEl.nativeElement).not.toBeNull();
            });
        });

        it('should not display the event status if it is `Open`', () => {
            fixture.componentInstance.event$ = Observable.of(
                new Event(<any>{
                    status: 'Open'
                })
            );
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const statusEl = fixture.debugElement.query(By.css('ef-event-status'));
                expect(statusEl.nativeElement).toBeNull();
            });
        });

    });

    describe('register', () => {

        it('should display the register button if the event is `Open`', () => {
            fixture.componentInstance.event$ = Observable.of(
                new Event(<any>{
                    status: 'Open'
                })
            );
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const buttonEl = fixture.debugElement.query(By.css('.register-btn'));
                expect(buttonEl.nativeElement).not.toBeNull();
            });
        });

        it('should hide the register button if the event is not `Open`', () => {
            fixture.componentInstance.event$ = Observable.of(
                new Event(<any>{
                    status: 'Sold Out'
                })
            );
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const buttonEl = fixture.debugElement.query(By.css('.register-btn'));
                expect(buttonEl.nativeElement).toBeNull();
            });
        });

    });

    describe('loading spinner', () => {

        it('should be visible when loading$ is `true`', () => {
            fixture.componentInstance.loading$ = Observable.of(true);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const loader = fixture.debugElement.query(By.css('ef-loading-spinner'));
                expect(loader.nativeElement).not.toBeNull();
            });
        });

        it('should be hidden when loading$ is `false`', () => {
            fixture.componentInstance.loading$ = Observable.of(false);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                const loader = fixture.debugElement.query(By.css('ef-loading-spinner'));
                expect(loader.nativeElement).toBeNull();
            });
        });

    });
});
