import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutesModule} from "./app.routes";
import {LoginModule} from "./components/login/login.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MainContainerModule} from "./components/main-container/main-container.module";
import {AuthorizationInterceptor} from "./shared/interceptors/authorization.interceptor";
import {ResponseInterceptor} from "./shared/interceptors/response.interceptor";
import {AuthService} from "./shared/services/auth.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutesModule,
        LoginModule,
        MainContainerModule
    ],
    providers: [
        AuthService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
