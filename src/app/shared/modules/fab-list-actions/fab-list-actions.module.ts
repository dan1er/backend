import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FabListActionsComponent} from "./components/fab-list-actions/fab-list-actions.component";
import {MaterialModule} from "../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [FabListActionsComponent],
    exports: [FabListActionsComponent]
})
export class FabListActionsModule {
}
