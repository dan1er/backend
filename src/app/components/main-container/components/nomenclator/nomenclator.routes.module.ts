import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";
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
            title: "Nomencladores",
            isListView: true,
            filters: { enabled: true, expanded: false },
            isEditingEnabled: true,
        }
    },
    {
        path: "adicionar",
        component: EditComponent,
        data: {
            title: "Adicionar nomenclador"
        }
    },
    {
        path: "editar/:id",
        component: EditComponent,
        data: {
            title: "Editar nomenclador"
        }
    },
    {
        path: "filtros",
        component: FiltersComponent,
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
export class NomenclatorRoutesModule {
}
