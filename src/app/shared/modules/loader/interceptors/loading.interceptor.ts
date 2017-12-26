import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../services/auth.service";
import {LoaderService} from "../services/loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private loaderService: LoaderService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoading();

        return next.handle(request).do(((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loaderService.hideLoading();
                }
            }),
            () => {
                this.loaderService.hideLoading();
            });
    }
}
