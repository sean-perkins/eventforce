import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStatusComponent } from './event-status.component';

describe('EventStatusComponent', () => {
    let component: EventStatusComponent;
    let fixture: ComponentFixture<EventStatusComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventStatusComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Open', () => {

        it('should set the class to open', () => {
            component.status = 'Open';
            const labelEl = fixture.debugElement.query(By.css('.label')).nativeElement;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.statusClass).toBe('open');
                expect(labelEl.classList.contains('open')).toBeTruthy();
            });
        });

    });

    describe('Closed', () => {

        it('should set the class to closed', () => {
            component.status = 'Closed';
            const labelEl = fixture.debugElement.query(By.css('.label')).nativeElement;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.statusClass).toBe('closed');
                expect(labelEl.classList.contains('closed')).toBeTruthy();
            });
        });

    });

    describe('Sold Out', () => {

        it('should set the class to sold-out', () => {
            component.status = 'Sold Out';
            const labelEl = fixture.debugElement.query(By.css('.label')).nativeElement;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.statusClass).toBe('sold-out');
                expect(labelEl.classList.contains('sold-out')).toBeTruthy();
            });
        });

    });


});
