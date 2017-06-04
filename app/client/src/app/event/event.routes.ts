import { Routes } from '@angular/router';
// app
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

export const EventRoutes: Routes = [
    {
        path: 'events',
        pathMatch: 'full',
        component: EventListComponent
    },
    {
      path: 'event/:id',
      component: EventDetailComponent
    }
];
