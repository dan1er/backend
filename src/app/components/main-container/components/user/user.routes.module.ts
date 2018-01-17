import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        data: {
            title: "Usuarios",
            isListView: true,
            isFilteringEnabled: false,
            isEditingEnabled: true,
        }
    },
    {
        path: "adicionar",
        component: EditComponent,
        data: {
            title: "Adicionar usuario"
        }
    },
    {
        path: "editar/:username",
        component: EditComponent,
        data: {
            title: "Editar usuario"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutesModule {
}
