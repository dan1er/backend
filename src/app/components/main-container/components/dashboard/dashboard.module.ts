import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardRoutesModule} from "./dashboard.routes.module";
import {MaterialModule} from "../../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutesModule,
        MaterialModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
