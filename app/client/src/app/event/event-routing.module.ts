import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { EventRoutes } from './event.routes';

@NgModule({
    imports: [
        RouterModule.forChild(EventRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EventRoutingModule { }
