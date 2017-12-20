import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {UserRoutesModule} from "./user.routes.module";

@NgModule({
    imports: [
        CommonModule,
        UserRoutesModule
    ],
    declarations: [ListComponent]
})
export class UserModule {
}
