import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoaderComponent} from "./components/loader/loader.component";
import {LoaderService} from "./services/loader.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {MaterialModule} from "../../../material.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    providers: [
        LoaderService,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
    ]
})
export class LoaderModule {
}
