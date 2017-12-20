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
                path: "dashboard",
                loadChildren: "./components/main-container/components/dashboard/dashboard.module#DashboardModule"
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
