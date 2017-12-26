import {Component, forwardRef, Input, OnInit} from "@angular/core";
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SharedConstantsService} from "../../../../services/shared-constants.service";

export const FORM_FIELD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormFieldComponent),
    multi: true
};

@Component({
    selector: "app-form-field",
    templateUrl: "./form-field.component.html",
    providers: [FORM_FIELD_VALUE_ACCESSOR]
})
export class FormFieldComponent implements OnInit, ControlValueAccessor {
    @Input() public required: boolean;
    @Input() public pattern: string;
    @Input() public placeholder: string;
    @Input() public readonly: boolean;
    @Input() public disabled: boolean;
    @Input() public showErrors: boolean;
    @Input() public type: string;
    @Input() public matchValue: AbstractControl;

    public model: any;
    public onChange: Function;
    public onTouched: Function;

    constructor(public sharedConstants: SharedConstantsService) {
    }

    public ngOnInit(): void {
        this.showErrors = true;
        if (!this.type) {
            this.type = "text";
        }
    }

    public writeValue(obj: any): void {
        this.model = obj;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
    }
}
