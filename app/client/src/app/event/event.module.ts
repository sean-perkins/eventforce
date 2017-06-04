import { EventRoutingModule } from './event-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
    imports: [
        CommonModule,
        EventRoutingModule
    ],
    declarations: [EventListComponent, EventDetailComponent]
})
export class EventModule { }
