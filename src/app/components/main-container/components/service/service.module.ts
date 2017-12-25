import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./components/list/list.component";
import {ServiceRoutesModule} from "./service.routes.module";

@NgModule({
    imports: [
        CommonModule,
        ServiceRoutesModule
    ],
    declarations: [
        ListComponent
    ]
})
export class ServiceModule {
}
