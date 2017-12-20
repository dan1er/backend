import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {MaterialModule} from "../../material.module";
import {LoginService} from "./services/login.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {
}

