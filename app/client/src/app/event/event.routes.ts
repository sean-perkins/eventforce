import { Routes } from '@angular/router';
// app
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventRegistrationSuccessComponent } from './components/event-registration-success/event-registration-success.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';

export const EventRoutes: Routes = [
    {
        path: 'events',
        pathMatch: 'full',
        component: EventListComponent
    },
    {
        path: 'event/:id',
        component: EventDetailComponent
    },
    {
        path: 'event/:id/register',
        component: EventRegistrationComponent
    },
    {
        path: 'registered',
        component: EventRegistrationSuccessComponent
    }
];
