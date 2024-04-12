import { AbstractControl, ValidatorFn } from '@angular/forms';

export function workingExperienceValidator(maxValue: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;

        if (!value || value.length === 0) {
            return null;
        }

        const pattern = /^[0-9]+(?:,[0-9]+)?$/;

        if (!pattern.test(value)) {
            return { 'workingExperience': true };
        }

        const numericValue = parseFloat(value.replace(/,/g, ''));
        const parts = value.split(",");
        if (parts.length > 1 && parts[1].length > maxValue) {
            return { 'workingExperience': true };
        }

        if (isNaN(numericValue)) {
            return { 'workingExperience': true };
        }

        return null;
    };
}
