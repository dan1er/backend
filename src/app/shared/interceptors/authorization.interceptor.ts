import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.token}`
            }
        });
        return next.handle(request);
    }
}
