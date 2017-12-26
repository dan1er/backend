import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AgencyRoutesModule} from "./agency.routes.module";
import {ListComponent} from "./components/list/list.component";
import {AgencyService} from "./services/agency.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AgencyEffects, AgencyReducer} from "./redux";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature("agency", AgencyReducer),
        EffectsModule.forFeature([AgencyEffects]),
        AgencyRoutesModule
    ],
    declarations: [
        ListComponent
    ],
    providers: [
        AgencyService
    ]
})
export class AgencyModule {
}
