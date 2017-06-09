import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'md-toolbar',
    template: ``
})
class MockMdToolbarComponent { }

@Component({
    selector: 'md-sidenav-container',
    template: `<ng-content></ng-content>`
})
class MockSideNavContainerComponent {}

@Component({
    selector: 'ef-footer',
    template: ``
})
class MockFooterComponent {}

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockMdToolbarComponent,
                MockSideNavContainerComponent,
                MockFooterComponent
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
