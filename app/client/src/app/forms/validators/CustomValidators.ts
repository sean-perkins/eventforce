import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static validEmail(control: AbstractControl): { [key: string]: any} {
        const EMAIL_REGEXP: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return {
                validEmail: false
            };
        }
        return null;
    }

    static validPhone(control: AbstractControl): { [key: string]: any} {
        const PHONE_REGEXP: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!PHONE_REGEXP.test(control.value)) {
            return {
                validEmail: false
            };
        }
        return null;
    }
}
