import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {VariableRoutesModule} from "./variable.routes.module";

@NgModule({
    imports: [
        CommonModule,
        VariableRoutesModule
    ],
    declarations: [ListComponent]
})
export class VariableModule {
}
