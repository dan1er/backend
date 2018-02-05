import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AgentComponent} from "./components/agent/agent.component";
import {AgentFiltersComponent} from "./components/agent-filters/agent-filters.component";
import {MaterialModule} from "../../../../../material.module";
import {AgentRoutesModule} from "./agent.routes.module";
import {AgentService} from "./services/agent.service";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {AgentEffects, AgentReducer} from "./redux";
import {AgentAdapter} from "./adapters/agent.adapter";
import {AgencyService} from "../../agency/services/agency.service";
import {ReportEmailComponent} from "./components/report-email/report-email.component";
import {FormFieldModule} from "../../../../../shared/modules/form-field/form-field.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AgentRoutesModule,
        StoreModule.forFeature("agent", AgentReducer),
        EffectsModule.forFeature([AgentEffects]),
        FormFieldModule,
        FormsModule
    ],
    declarations: [
        AgentComponent,
        AgentFiltersComponent,
        ReportEmailComponent
    ],
    entryComponents: [
        ReportEmailComponent
    ],
    providers: [
        AgentService,
        AgentAdapter,
        AgencyService
    ]
})
export class AgentModule {
}
