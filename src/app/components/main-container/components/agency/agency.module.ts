import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AgencyRoutesModule} from "./agency.routes.module";
import {ListComponent} from "./components/list/list.component";

@NgModule({
    imports: [
        CommonModule,
        AgencyRoutesModule
    ],
    declarations: [
        ListComponent
    ]
})
export class AgencyModule {
}
