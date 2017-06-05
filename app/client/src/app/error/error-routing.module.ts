import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { ErrorRoutes } from './error.routes';

@NgModule({
    imports: [
        RouterModule.forChild(ErrorRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ErrorRoutingModule { }
