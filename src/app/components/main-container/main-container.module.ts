import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    declarations: [MainContainerComponent]
})
export class MainContainerModule {
}

