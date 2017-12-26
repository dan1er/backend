import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {UserRoutesModule} from "./user.routes.module";
import {UserService} from "./services/user.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects, UserReducer} from "./redux";
import {MaterialModule} from "../../../../material.module";
import {FabListActionsModule} from "../../../../shared/modules/fab-list-actions/fab-list-actions.module";
import {EditComponent} from "./components/edit/edit.component";
import {FormFieldModule} from "../../../../shared/modules/form-field/form-field.module";
import {AgencyModule} from "../agency/agency.module";
import {EmailValidatorDirective} from "./validators/email-validator.directive";
import {UserNameValidatorDirective} from "./validators/user-name-validator.directive";
import {MessagesModule} from "../../../../shared/modules/messages/messages.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        UserRoutesModule,
        StoreModule.forFeature("user", UserReducer),
        EffectsModule.forFeature([UserEffects]),
        MessagesModule,
        FabListActionsModule,
        FormFieldModule,
        AgencyModule
    ],
    declarations: [
        ListComponent,
        EditComponent,
        EmailValidatorDirective,
        UserNameValidatorDirective
    ],
    providers: [
        UserService
    ]
})
export class UserModule {
}
