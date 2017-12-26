import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {NomenclatorRoutesModule} from "./nomenclator.routes.module";
import {NomenclatorService} from "./services/nomenclator.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {NomenclatorEffects, NomenclatorReducer} from "./redux";
import {MaterialModule} from "../../../../material.module";
import {FabListActionsModule} from "../../../../shared/modules/fab-list-actions/fab-list-actions.module";
import {EditComponent} from "./components/edit/edit.component";
import {FormFieldModule} from "../../../../shared/modules/form-field/form-field.module";
import {AgencyModule} from "../agency/agency.module";
import {MessagesModule} from "../../../../shared/modules/messages/messages.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NomenclatorRoutesModule,
        StoreModule.forFeature("nomenclator", NomenclatorReducer),
        EffectsModule.forFeature([NomenclatorEffects]),
        MessagesModule,
        FabListActionsModule,
        FormFieldModule,
        AgencyModule
    ],
    declarations: [
        ListComponent,
        EditComponent
    ],
    providers: [
        NomenclatorService
    ]
})
export class NomenclatorModule {
}
