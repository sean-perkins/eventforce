import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ForceFormsModule { }
