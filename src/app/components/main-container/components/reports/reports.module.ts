import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReportsRoutesModule} from "./reports.routes.module";
import {DailyPaymentsModule} from "./daily-payments/daily-payments.module";

@NgModule({
    imports: [
        CommonModule,
        ReportsRoutesModule,
        DailyPaymentsModule
    ]
})
export class ReportsModule {
}
