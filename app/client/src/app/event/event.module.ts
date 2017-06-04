import { ForceDateModule } from './../date/date.module';
import { EventRoutingModule } from './event-routing.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { EventStatusComponent } from './components/event-status/event-status.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        EventRoutingModule,
        ForceDateModule
    ],
    declarations: [
        EventListComponent,
        EventDetailComponent,
        EventListItemComponent,
        EventStatusComponent
    ]
})
export class EventModule { }
