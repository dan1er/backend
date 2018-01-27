import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DailyPaymentsComponent} from "./components/daily-payments/daily-payments.component";
import {DailyPaymentsFiltersComponent} from "./components/daily-payments-filters/daily-payments-filters.component";
import {MaterialModule} from "../../../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [DailyPaymentsComponent, DailyPaymentsFiltersComponent]
})
export class DailyPaymentsModule {
}
