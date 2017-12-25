import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {UserService} from "../services/user.service";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {UserCreators, UserTypes} from "./user.actions";
import {User} from "../../../../../shared/model/user.model";

@Injectable()
export default class UserEffects {
    constructor(private actions$: Actions,
                private userService: UserService) {
    }

    @Effect()
    user$: Observable<Action> = this.actions$.ofType(UserTypes.LOAD_USERS_REQUEST)
        .mergeMap(() =>
            this.userService.loadUsers()
                .switchMap((users: User[]) => of(UserCreators.loadUsersSuccess(users)))
                .catch(() => of(UserCreators.loadUsersFailure()))
        );
}
