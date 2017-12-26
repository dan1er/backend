import {Directive, forwardRef, Input} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from "@angular/forms";
import {UserService} from "../services/user.service";

@Directive({
    selector: "[userNameValidator][formControlName], [userNameValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => UserNameValidatorDirective), multi: true
        }
    ]
})
export class UserNameValidatorDirective implements Validator {
    @Input() public userNameValidator: string;

    constructor(private userService: UserService) {
    }

    validate(c: AbstractControl): { [key: string]: any; } {
        return this.userService.getAvailability(c.value)
            .first()
            .map((value: boolean) => !value && c.value !== this.userNameValidator ? ({userNameInUse: true}) : null);
    }

    registerOnValidatorChange(fn: () => void): void {
    }
}
