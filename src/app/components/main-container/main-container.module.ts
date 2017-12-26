import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {LoaderModule} from "../../shared/modules/loader/loader.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoaderModule
    ],
    declarations: [MainContainerComponent, MenuComponent]
})
export class MainContainerModule {
}

