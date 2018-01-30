import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CommissionServicesComponent} from "./components/commission-services/commission-services.component";
import {CommissionServicesFiltersComponent} from "./components/commission-services-filters/commission-services-filters.component";
import {MaterialModule} from "../../../../../material.module";
import {CommissionServicesRoutesModule} from "./commission-services.routes.module";
import {ServiceCommissionService} from "./services/service-commission.service";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {CommissionServicesEffects, CommissionServicesReducer} from "./redux";
import {CommissionServicesTotalsComponent} from "./components/commission-services-totals/commission-services-totals.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        CommissionServicesRoutesModule,
        StoreModule.forFeature("serviceCommission", CommissionServicesReducer),
        EffectsModule.forFeature([CommissionServicesEffects])
    ],
    declarations: [
        CommissionServicesComponent,
        CommissionServicesFiltersComponent,
        CommissionServicesTotalsComponent
    ],
    providers: [
        ServiceCommissionService
    ]
})
export class CommissionServicesModule {
}
