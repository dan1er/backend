import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DailyPaymentsComponent} from "./components/daily-payments/daily-payments.component";
import {DailyPaymentsFiltersComponent} from "./components/daily-payments-filters/daily-payments-filters.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "cobranza-diaria",
        pathMatch: "full"
    },
    {
        path: "cobranza-diaria",
        component: DailyPaymentsComponent,
        data: {
            title: "Cobranza diaria",
            isListView: true,
            filters: {enabled: true, expanded: true},
            isEditingEnabled: false
        }
    },
    {
        path: "filtros",
        component: DailyPaymentsFiltersComponent,
        data: {
            title: "Filters"
        },
        outlet: "right"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyPaymentsRoutesModule {
}
