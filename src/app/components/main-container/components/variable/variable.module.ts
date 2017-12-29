import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {VariableRoutesModule} from "./variable.routes.module";
import {MaterialModule} from "../../../../material.module";
import {FormsModule} from "@angular/forms";
import {CurrentComponent} from "./components/current/current.component";
import {FormFieldModule} from "../../../../shared/modules/form-field/form-field.module";
import {VariableService} from "./services/variable.service";
import {VariableConstants} from "./variable.constants";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {VariableEffects, VariableReducer} from "./redux/index";
import {VariableAdapter} from "./adapters/variable.adapter";
import {HistoryComponent} from "./components/history/history.component";

@NgModule({
    imports: [
        CommonModule,
        VariableRoutesModule,
        MaterialModule,
        FormsModule,
        FormFieldModule,
        StoreModule.forFeature("variable", VariableReducer),
        EffectsModule.forFeature([VariableEffects])
    ],
    declarations: [
        ListComponent,
        CurrentComponent,
        HistoryComponent
    ],
    providers: [
        VariableService,
        VariableConstants,
        VariableAdapter
    ]
})
export class VariableModule {
}
