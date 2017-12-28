import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            },
            (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.router.navigate(["login"]);
                }
            });
    }
}

