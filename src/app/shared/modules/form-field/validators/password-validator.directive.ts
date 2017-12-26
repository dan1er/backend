import {Directive, forwardRef, Input} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from "@angular/forms";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Directive({
    selector: "[passwordValidator][formControlName], [passwordValidator][ngModel]",
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => PasswordValidatorDirective), multi: true
        }
    ]
})
export class PasswordValidatorDirective implements Validator {
    @Input() public passwordValidator: string;

    validate(control: AbstractControl): { [key: string]: any; } {
        return Observable
            .of(this.passwordValidator === control.value)
            .map((result: boolean) => result || !this.passwordValidator ? null : {match: true});
    }

    registerOnValidatorChange(fn: () => void): void {
    }
}
