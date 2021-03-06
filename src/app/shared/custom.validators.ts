import { AbstractControl } from "@angular/forms";

export class customValidators {
    static emailDomain(domainName: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email: string = control.value;
            const domain = email.substring(email.lastIndexOf('@' + 1));
            if (email === '' || domain.toLocaleLowerCase() === domainName.toLowerCase()) {
                return null;
            } else {
                return { 'emailDomain': true };
            }
        };
    }
}