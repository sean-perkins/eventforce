import { ErrorRoutingModule } from './error-routing.module';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ErrorRoutingModule
    ],
    declarations: [PageNotFoundComponent]
})
export class ErrorModule { }
