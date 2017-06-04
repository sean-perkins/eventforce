import { ForceStoreModule } from './store/store.module';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { EventModule } from './event/event.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppReducer } from './store/app.state';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        ForceStoreModule,
        StoreModule.provideStore(AppReducer),
        EventModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
