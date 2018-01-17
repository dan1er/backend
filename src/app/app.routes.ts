import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/components/login/login.component";
import {MainContainerComponent} from "./components/main-container/components/main-container/main-container.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "admin",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent,
        data: {
            title: "Login"
        }
    },
    {
        path: "admin",
        component: MainContainerComponent,
        data: {
            title: "Admin"
        },
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                loadChildren: "./components/main-container/components/dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "usuarios",
                loadChildren: "./components/main-container/components/user/user.module#UserModule"
            },
            {
                path: "agencias",
                loadChildren: "./components/main-container/components/agency/agency.module#AgencyModule"
            },
            {
                path: "servicios",
                loadChildren: "./components/main-container/components/service/service.module#ServiceModule"
            },
            {
                path: "nomencladores",
                loadChildren: "./components/main-container/components/nomenclator/nomenclator.module#NomenclatorModule"
            },
            {
                path: "variables",
                loadChildren: "./components/main-container/components/variable/variable.module#VariableModule"
            },
            {
                path: "logs",
                loadChildren: "./components/main-container/components/log/log.module#LogModule"
            }
        ]
    },
    {path: "**", redirectTo: "login"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}
