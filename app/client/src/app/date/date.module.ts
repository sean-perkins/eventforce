import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayPipe } from './pipes/day.pipe';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DayPipe, MonthPipe],
    exports: [DayPipe, MonthPipe]
})
export class ForceDateModule { }
