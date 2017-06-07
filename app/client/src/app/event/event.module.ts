import { SessionModule } from './../session/session.module';
import { MaterialModule } from '@angular/material';
import { EventRoutingModule } from './event-routing.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ForceFormsModule } from '../forms/forms.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';
import { EventStatusComponent } from './components/event-status/event-status.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';
import { EventRegistrationSuccessComponent } from './components/event-registration-success/event-registration-success.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        EventRoutingModule,
        SessionModule,
        ForceFormsModule,
    ],
    declarations: [
        EventListComponent,
        EventDetailComponent,
        EventListItemComponent,
        EventStatusComponent,
        EventRegistrationComponent,
        EventRegistrationSuccessComponent
    ]
})
export class EventModule { }
