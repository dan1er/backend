import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {AgencyCreators, AgencyTypes} from "./agency.actions";
import Agency from "../../../../../shared/model/agency.model";
import {AgencyService} from "../services/agency.service";

@Injectable()
export default class AgencyEffects {
    constructor(private actions$: Actions,
                private agencyService: AgencyService) {
    }

    @Effect()
    agency$: Observable<Action> = this.actions$.ofType(AgencyTypes.LOAD_RECORDS_REQUEST)
        .mergeMap(() =>
            this.agencyService.loadRecords()
                .switchMap((records: Agency[]) => of(AgencyCreators.loadRecordsSuccess(records)))
                .catch(() => of(AgencyCreators.loadRecordsFailure()))
        );
}
