import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {FiltersComponent} from "./components/filters/filters.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "listado",
        pathMatch: "full"
    },
    {
        path: "listado",
        component: ListComponent,
        data: {
            title: "Logs",
            isListView: true,
            isEditingEnabled: false,
            filters: {enabled: true, expanded: false},
        }
    },
    {
        path: "filtros",
        component: FiltersComponent,
        data: {
            title: "Filtros"
        },
        outlet: "right"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogRoutesModule {
}
