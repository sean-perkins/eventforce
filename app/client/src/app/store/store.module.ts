import { EventEffects } from './effects/event.effects';
import { HttpModule } from '@angular/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { EventService } from './services/event.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        EffectsModule.run(EventEffects)
    ],
    providers: [
        EventService
    ]
})
export class ForceStoreModule {
    constructor(@Optional() @SkipSelf() parentModule: ForceStoreModule) {
        if (parentModule) {
            throw new Error('ForceStoreModule already loaded; Import in root module only.');
        }
    }
}
