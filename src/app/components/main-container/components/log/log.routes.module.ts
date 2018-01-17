import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {FiltersComponent} from "./components/filters/filters.component";

const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        data: {
            title: "Logs",
            isListView: true,
            isEditingEnabled: false,
            isFilteringEnabled: true
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
