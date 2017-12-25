import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {NomenclatorRoutesModule} from "./nomenclator.routes.module";

@NgModule({
    imports: [
        CommonModule,
        NomenclatorRoutesModule
    ],
    declarations: [
        ListComponent
    ]
})
export class NomenclatorModule {
}
