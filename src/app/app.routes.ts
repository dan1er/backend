import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login/login.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent,
        data: {
            title: "Login"
        }
    },
    {path: "**", redirectTo: "login"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}
