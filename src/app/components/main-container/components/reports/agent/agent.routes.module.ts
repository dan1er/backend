import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AgentFiltersComponent} from "./components/agent-filters/agent-filters.component";
import {AgentComponent} from "./components/agent/agent.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "agentes",
        pathMatch: "full"
    },
    {
        path: "agentes",
        component: AgentComponent,
        data: {
            title: "Reporte de agentes",
            isListView: true,
            filters: {enabled: true, expanded: true},
            isEditingEnabled: false
        }
    },
    {
        path: "filtros",
        component: AgentFiltersComponent,
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
export class AgentRoutesModule {
}
