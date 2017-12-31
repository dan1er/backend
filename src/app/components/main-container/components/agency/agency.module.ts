import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AgencyRoutesModule} from "./agency.routes.module";
import {ListComponent} from "./components/list/list.component";
import {AgencyService} from "./services/agency.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AgencyEffects, AgencyReducer} from "./redux";
import {MaterialModule} from "../../../../material.module";
import {FabListActionsModule} from "../../../../shared/modules/fab-list-actions/fab-list-actions.module";
import {EditComponent} from "./components/edit/edit.component";
import {FormsModule} from "@angular/forms";
import {FormFieldModule} from "../../../../shared/modules/form-field/form-field.module";
import {NomenclatorModule} from "../nomenclator/nomenclator.module";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature("agency", AgencyReducer),
        EffectsModule.forFeature([AgencyEffects]),
        FormsModule,
        FormFieldModule,
        AgencyRoutesModule,
        MaterialModule,
        FabListActionsModule,
        NomenclatorModule
    ],
    declarations: [
        ListComponent,
        EditComponent
    ],
    providers: [
        AgencyService
    ]
})
export class AgencyModule {
}
