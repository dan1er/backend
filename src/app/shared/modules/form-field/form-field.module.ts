import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormFieldComponent} from "./components/form-field/form-field.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../../material.module";
import {PasswordValidatorDirective} from "./validators/password-validator.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        FormFieldComponent,
        PasswordValidatorDirective],
    exports: [
        FormFieldComponent
    ]
})
export class FormFieldModule {
}
