import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {AgencyCreators, AgencyTypes} from "./actions";
import Agency from "../../../../../shared/model/agency.model";
import {AgencyService} from "../services/agency.service";
import {Router} from "@angular/router";
import State from "../../../../../shared/redux/state";
import {selected} from "./selectors";

@Injectable()
export default class AgencyEffects {
    constructor(private actions$: Actions,
                private agencyService: AgencyService,
                private router: Router,
                private store: Store<State>) {
    }

    @Effect()
    agency$: Observable<Action> = this.actions$.ofType(AgencyTypes.LOAD_RECORDS_REQUEST)
        .mergeMap(() =>
            this.agencyService.loadRecords()
                .switchMap((records: Agency[]) => of(AgencyCreators.loadRecordsSuccess(records)))
                .catch(() => of(AgencyCreators.loadRecordsFailure()))
        );

    @Effect()
    loadData$: Observable<Action> = this.actions$.ofType(AgencyTypes.LOAD_DATA)
        .mergeMap((action: any) =>
            this.agencyService.find(action.id)
                .switchMap((agency: Agency) => of(AgencyCreators.loadDataSuccess(agency)))
                .catch((error: Error) => of(AgencyCreators.loadDataFailure(error.message)))
        );

    @Effect({dispatch: false})
    goToList$: Observable<Action> = this.actions$.ofType(AgencyTypes.GO_TO_LIST)
        .map((action: any) => action.path)
        .do((path: string[]) => this.router.navigate(path));

    @Effect()
    beforeCreate$: Observable<any> = this.actions$.ofType(AgencyTypes.ADD_COMMAND)
        .mergeMap(() => [AgencyCreators.clearSelected()])
        .do(() => this.router.navigate(["admin", "agencias", "adicionar"]));

    @Effect({dispatch: false})
    beforeEdit$: Observable<any> = this.actions$.ofType(AgencyTypes.EDIT_COMMAND)
        .withLatestFrom(this.store.select(selected))
        .do(([, selectedAgency]) => this.router.navigate(["admin", "agencias", "editar", selectedAgency.id]));

}
