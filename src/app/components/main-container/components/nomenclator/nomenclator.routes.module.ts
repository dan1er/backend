import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        data: {
            title: "Nomencladores"
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NomenclatorRoutesModule {
}
