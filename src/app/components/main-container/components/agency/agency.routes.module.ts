import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        data: {
            title: "Agencias",
            isListView: true,
            filters: {enabled: false, expanded: false},
            isEditingEnabled: true,
        }
    },
    {
        path: "adicionar",
        component: EditComponent,
        data: {
            title: "Adicionar agencia"
        }
    },
    {
        path: "editar/:id",
        component: EditComponent,
        data: {
            title: "Editar agencia"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgencyRoutesModule {
}
