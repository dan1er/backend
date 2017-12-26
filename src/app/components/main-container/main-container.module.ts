import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {LoaderModule} from "../../shared/modules/loader/loader.module";
import {StoreModule} from "@ngrx/store";
import {LayoutReducer} from "./redux";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoaderModule,
        StoreModule.forFeature("layout", LayoutReducer)
    ],
    declarations: [MainContainerComponent, MenuComponent]
})
export class MainContainerModule {
}

