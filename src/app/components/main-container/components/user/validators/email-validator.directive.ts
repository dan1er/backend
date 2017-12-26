import {Directive, forwardRef, Input} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from "@angular/forms";
import {UserService} from "../services/user.service";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";

@Directive({
    selector: "[emailValidator][formControlName], [emailValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => EmailValidatorDirective), multi: true
        }
    ]
})
export class EmailValidatorDirective implements Validator {
    @Input() public emailValidator: string;

    constructor(private userService: UserService) {
    }

    validate(c: AbstractControl): { [key: string]: any; } {
        return this.userService.getAvailability(c.value)
            .first()
            .map((value: boolean) => !value && c.value !== this.emailValidator ? ({emailInUse: true}) : null);
    }

    registerOnValidatorChange(fn: () => void): void {
    }
}
