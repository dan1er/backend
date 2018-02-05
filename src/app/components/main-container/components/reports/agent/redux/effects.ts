import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {AgentCreators, AgentTypes} from "./actions";
import {AgentService} from "../services/agent.service";
import {AgentAdapter} from "../adapters/agent.adapter";
import {AgencyService} from "../../../agency/services/agency.service";

@Injectable()
export default class AgentEffects {
    constructor(private actions$: Actions,
                private agentService: AgentService,
                private agentAdapter: AgentAdapter,
                private agencyService: AgencyService) {
    }

    @Effect()
    records$: Observable<Action> = this.actions$.ofType(AgentTypes.GET_RECORDS)
        .mergeMap((action: any) =>
            this.agentService.loadRecords(action.agency, action.from, action.to)
                .map((data: any) => AgentCreators.getRecordsSuccess(this.agentAdapter.adaptRecordsResponseToTableFormat(data)))
                .catch((error: Error) => {
                    return of(AgentCreators.getRecordsFailure(error.message));
                })
        );

    @Effect()
    agencies$: Observable<Action> = this.actions$.ofType(AgentTypes.GET_AGENCIES)
        .mergeMap(() =>
            this.agencyService.loadRecords()
                .map((data: any) => AgentCreators.getAgenciesSuccess(this.agentAdapter.adaptAgencyData(data)))
                .catch((error: Error) => {
                    return of(AgentCreators.getAgenciesFailure(error.message));
                })
        );

    @Effect()
    emailCurrentReport$: Observable<Action> = this.actions$.ofType(AgentTypes.EMAIL_CURRENT_REPORT)
        .mergeMap((action: any) => {
                const {cc, agency, startDate, endDate} = action;
                return this.agentService.emailCurrentReport(cc, agency, startDate, endDate)
                    .map(() => AgentCreators.emailCurrentReportSuccess())
                    .catch((error: Error) => {
                        return of(AgentCreators.emailCurrentReportFailure(error.message));
                    });
            }
        );

    @Effect()
    emailLastMonthReport$: Observable<Action> = this.actions$.ofType(AgentTypes.EMAIL_LAST_MONTH_REPORT)
        .mergeMap((action: any) => {
                const {cc, agency} = action;
                return this.agentService.emailLastMonthReport(cc, agency)
                    .map(() => AgentCreators.emailLastMonthReportSuccess())
                    .catch((error: Error) => {
                        return of(AgentCreators.emailLastMonthReportFailure(error.message));
                    });
            }
        );
}
