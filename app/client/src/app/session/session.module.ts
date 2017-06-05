import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListItemComponent } from './components/session-list-item/session-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [
        SessionListItemComponent
    ],
    exports: [
        SessionListItemComponent
    ]
})
export class SessionModule { }
