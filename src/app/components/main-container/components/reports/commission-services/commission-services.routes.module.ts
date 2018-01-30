import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommissionServicesFiltersComponent} from "./components/commission-services-filters/commission-services-filters.component";
import {CommissionServicesComponent} from "./components/commission-services/commission-services.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "comision-servicios",
        pathMatch: "full"
    },
    {
        path: "comision-servicios",
        component: CommissionServicesComponent,
        data: {
            title: "Comisión de servicios",
            isListView: true,
            filters: {enabled: true, expanded: true},
            isEditingEnabled: false
        }
    },
    {
        path: "filtros",
        component: CommissionServicesFiltersComponent,
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
export class CommissionServicesRoutesModule {
}
