import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {MaterialModule} from "../../material.module";
import {LoginService} from "./services/login.service";
import {StoreModule} from "@ngrx/store";
import {LoginEffects, LoginReducer} from "./redux";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        StoreModule.forFeature("login", LoginReducer),
        EffectsModule.forFeature([LoginEffects])
    ],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {
}
