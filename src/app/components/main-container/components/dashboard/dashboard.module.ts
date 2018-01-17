import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardRoutesModule} from "./dashboard.routes.module";
import {MaterialModule} from "../../../../material.module";
import {FusionChartsModule} from "angular4-fusioncharts";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutesModule,
        MaterialModule,
        FusionChartsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
