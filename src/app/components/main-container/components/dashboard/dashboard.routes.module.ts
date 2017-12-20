import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        data: {
            title: "Dashboard"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutesModule {
}
