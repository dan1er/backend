import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {LogService} from "../services/log.service";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {LogCreators, LogTypes} from "./actions";
import {pageData} from "./selectors";
import {Router} from "@angular/router";
import State from "../../../../../shared/redux/state";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export default class LogEffects {
    constructor(private actions$: Actions,
                private logService: LogService,
                private router: Router,
                private store: Store<State>) {
    }

    @Effect()
    logs$: Observable<Action> = this.actions$.ofType(LogTypes.LOAD_LOGS_REQUEST)
        .withLatestFrom(this.store.select(pageData))
        .mergeMap(([, data]) =>
            this.logService.loadLogs(data)
                .switchMap((response: HttpResponse<any>) => LogCreators.loadLogsSuccess(response))
                .catch((error: Error) => {
                    return of(LogCreators.loadLogsFailure(error.message));
                })
        );
}
