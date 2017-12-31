import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {UserCreators, UserTypes} from "./actions";
import {pageData, selected} from "./selectors";
import {User} from "../../../../../shared/model/user.model";
import {Router} from "@angular/router";
import State from "../../../../../shared/redux/state";
import {HttpResponse} from "@angular/common/http";
import {LayoutCreators} from "../../../redux";
import {UserConstants} from "../user.constants";

@Injectable()
export default class UserEffects {
    constructor(private actions$: Actions,
                private userService: UserService,
                private router: Router,
                private store: Store<State>,
                private userConstants: UserConstants) {
    }

    @Effect()
    user$: Observable<Action> = this.actions$.ofType(UserTypes.LOAD_USERS_REQUEST)
        .withLatestFrom(this.store.select(pageData))
        .mergeMap(([, data]) =>
            this.userService.loadUsers(data)
                .switchMap((response: HttpResponse<any>) => [
                    UserCreators.loadUsersSuccess(response.body),
                    UserCreators.updatePageData({...data, total: response.headers.get("X-Total-Count")})
                ])
                .catch((error: Error) => {
                    return of(UserCreators.loadUsersFailure(error.message));
                })
        );

    @Effect()
    loadData$: Observable<Action> = this.actions$.ofType(UserTypes.LOAD_DATA)
        .mergeMap((action: any) =>
            this.userService.loadData(action.username)
                .switchMap((user: User) => of(UserCreators.loadDataSuccess(user)))
                .catch((error: Error) => of(UserCreators.loadDataFailure(error.message)))
        );

    @Effect()
    create$: Observable<Action> = this.actions$.ofType(UserTypes.CREATE)
        .mergeMap((action: any) =>
            this.userService.create(action.record)
                .switchMap((user: User) => [
                    UserCreators.createSuccess(user),
                    LayoutCreators.showMessage(this.userConstants.CREATED_MESSAGE),
                    UserCreators.goToList(["admin", "usuarios"])
                ])
                .catch((error: Error) => of(UserCreators.createFailure(error.message)))
        );

    @Effect()
    update$: Observable<Action> = this.actions$.ofType(UserTypes.EDIT)
        .mergeMap((action: any) =>
            this.userService.update(action.record)
                .switchMap((user: User) => [
                    UserCreators.editSuccess(user),
                    LayoutCreators.showMessage(this.userConstants.EDITED_MESSAGE),
                    UserCreators.goToList(["admin", "usuarios"])
                ])
                .catch((error: Error) => of(UserCreators.editFailure(error.message)))
        );

    @Effect()
    remove$: Observable<Action> = this.actions$.ofType(UserTypes.REMOVE)
        .mergeMap((action: any) =>
            this.userService.remove(action.username)
                .switchMap((user: User) => [
                    UserCreators.removeSuccess(user),
                    LayoutCreators.showMessage(this.userConstants.REMOVED_MESSAGE),
                    UserCreators.loadUsersRequest()
                ])
                .catch((error: Error) => of(UserCreators.removeFailure(error.message)))
        );

    @Effect({dispatch: false})
    goToList$: Observable<Action> = this.actions$.ofType(UserTypes.GO_TO_LIST)
        .map((action: any) => action.path)
        .do((path: string[]) => this.router.navigate(path));

    @Effect()
    beforeCreate$: Observable<any> = this.actions$.ofType(UserTypes.ADD_COMMAND)
        .mergeMap(() => [UserCreators.clearSelected()])
        .do(() => this.router.navigate(["admin", "usuarios", "adicionar"]));

    @Effect({dispatch: false})
    beforeEdit$: Observable<any> = this.actions$.ofType(UserTypes.EDIT_COMMAND)
        .withLatestFrom(this.store.select(selected))
        .do(([, selectedUser]) => this.router.navigate(["admin", "usuarios", "editar", selectedUser.login]));
}
