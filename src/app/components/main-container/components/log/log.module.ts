import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {LogRoutesModule} from "./log.routes.module";
import {LogService} from "./services/log.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {LogEffects, LogReducer} from "./redux";
import {MaterialModule} from "../../../../material.module";
import {FabListActionsModule} from "../../../../shared/modules/fab-list-actions/fab-list-actions.module";
import {FormFieldModule} from "../../../../shared/modules/form-field/form-field.module";
import {MessagesModule} from "../../../../shared/modules/messages/messages.module";
import {FiltersComponent} from "./components/filters/filters.component";
import {LogConstants} from "./log.constants";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        LogRoutesModule,
        StoreModule.forFeature("log", LogReducer),
        EffectsModule.forFeature([LogEffects]),
        MessagesModule,
        FabListActionsModule,
        FormFieldModule
    ],
    declarations: [
        ListComponent,
        FiltersComponent
    ],
    providers: [
        LogService,
        LogConstants
    ]
})
export class LogModule {
}
