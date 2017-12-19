import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutesModule} from "./app.routes";
import {LoginModule} from "./components/login/login.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutesModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
