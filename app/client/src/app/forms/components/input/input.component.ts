import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ef-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() label = '';

    @Input() submitted = false;
    @Input() control: FormControl;

    isRequired = false;

    ngOnInit() {
        if (this.control) {
            if (this.control.errors) {
                this.isRequired = this.control.errors['required'];
            }
        }
    }

    get title(): string {
        if (this.label && this.isRequired) {
            return `${this.label} *`;
        }
        return this.label;
    }

}
