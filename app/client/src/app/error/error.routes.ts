import { Routes } from '@angular/router';
// app
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const ErrorRoutes: Routes = [
    {
        path: '404',
        component: PageNotFoundComponent
    }
];
