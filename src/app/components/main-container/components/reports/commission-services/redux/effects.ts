import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {CommissionServicesCreators, CommissionServicesTypes} from "./actions";
import {ServiceCommissionService} from "../services/service-commission.service";

@Injectable()
export default class CommissionServicesEffects {
    constructor(private actions$: Actions,
                private serviceCommissionService: ServiceCommissionService) {
    }

    @Effect()
    commissionServices$: Observable<Action> = this.actions$.ofType(CommissionServicesTypes.GET_SERVICES)
        .mergeMap((action: any) =>
            this.serviceCommissionService.loadServices(action.from, action.to)
                .map((response: any) => {
                    const services = response && response.serviceCommissionDTOS,
                        totals = response && response.total;
                    return CommissionServicesCreators.getServicesSuccess(services, totals);
                })
                .catch((error: Error) => {
                    return of(CommissionServicesCreators.getServicesFailure(error.message));
                })
        );
}
