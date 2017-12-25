import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {UserRoutesModule} from "./user.routes.module";
import {UserService} from "./services/user.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects, UserReducer} from "./redux";
import {MaterialModule} from "../../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        UserRoutesModule,
        StoreModule.forFeature("user", UserReducer),
        EffectsModule.forFeature([UserEffects])
    ],
    declarations: [
        ListComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {
}
