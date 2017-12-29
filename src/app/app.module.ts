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
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreService} from "./shared/services/store.service";
import {OverlayModule} from "@angular/cdk/overlay";
import {SharedConstantsService} from "./shared/services/shared-constants.service";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {FormatService} from "./shared/services/format.service";
import {DatePipe} from "@angular/common";

const reducers = {};

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
        OverlayModule,
        AppRoutesModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({maxAge: 50}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule,
        LoginModule,
        MainContainerModule
    ],
    providers: [
        AuthService,
        StoreService,
        SharedConstantsService,
        FormatService,
        DatePipe,
        {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
