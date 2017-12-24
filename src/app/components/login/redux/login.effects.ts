import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {LoginCreators, LoginTypes} from "./login.actions";
import {LoginService} from "../services/login.service";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import {Router} from "@angular/router";
import {StoreService} from "../../../shared/services/store.service";

@Injectable()
export default class LoginEffects {
    constructor(private actions$: Actions,
                private loginService: LoginService,
                private router: Router,
                private storeService: StoreService) {
    }

    @Effect()
    login$: Observable<Action> = this.actions$.ofType(LoginTypes.LOGIN_REQUEST)
        .mergeMap((action: any) =>
            this.loginService.login(action.username, action.password)
                .switchMap((data: Object) => {
                    this.storeService.save("auth-token", data["id_token"]);

                    this.router.navigate(["admin"]);

                    return [LoginCreators.loginSuccess()];
                })
                .catch(() => of(LoginCreators.loginFailure()))
        );
}
