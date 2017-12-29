import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {VariableService} from "../services/variable.service";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {VariableCreators, VariableTypes} from "./actions";
import {Router} from "@angular/router";
import State from "../../../../../shared/redux/state";
import {Variable} from "../../../../../shared/model/variable.model";
import {VariableConstants} from "../variable.constants";
import {VariableAdapter} from "../adapters/variable.adapter";
import {LayoutCreators} from "../../../redux";

@Injectable()
export default class VariableEffects {
    constructor(private actions$: Actions,
                private variableService: VariableService,
                private router: Router,
                private store: Store<State>,
                private variableConstants: VariableConstants,
                private variableAdapter: VariableAdapter) {
    }

    @Effect()
    variable$: Observable<Action> = this.actions$.ofType(VariableTypes.LOAD_VARIABLES_REQUEST)
        .mergeMap(() =>
            this.variableService.current()
                .switchMap((variables: Variable[]) => {
                    const first = variables && variables[0];
                    return [
                        VariableCreators.loadVariablesSuccess(this.variableAdapter.mapDescriptionFromType(variables)),
                        VariableCreators.select(first)
                    ];
                })
                .catch((error: Error) => {
                    return of(VariableCreators.loadVariablesFailure(error.message));
                })
        );

    @Effect()
    select$: Observable<Action> = this.actions$.ofType(VariableTypes.SELECT)
        .mergeMap((action: any) => of(VariableCreators.loadHistoricData(action.selected.type)));

    @Effect()
    historicData$: Observable<Action> = this.actions$.ofType(VariableTypes.LOAD_HISTORIC_DATA)
        .mergeMap((action: any) =>
            this.variableService.loadHistoricData(action.variableType)
                .switchMap((variables: Variable[]) =>
                    of(VariableCreators.loadHistoricDataSuccess(this.variableAdapter.mapDescriptionFromType(variables))))
                .catch((error: Error) => {
                    return of(VariableCreators.loadHistoricDataFailure(error.message));
                })
        );

    @Effect()
    create$: Observable<Action> = this.actions$.ofType(VariableTypes.CREATE)
        .mergeMap((action: any) =>
            this.variableService.create(action.record)
                .switchMap(() => [
                    VariableCreators.loadVariablesRequest(),
                    LayoutCreators.showMessage(this.variableConstants.CREATED_MESSAGE)
                ])
                .catch((error: Error) => of(VariableCreators.createFailure(error.message)))
        );

    /*@Effect()


    @Effect()
    update$: Observable<Action> = this.actions$.ofType(VariableTypes.EDIT)
        .mergeMap((action: any) =>
            this.variableService.update(action.record)
                .switchMap((variable: Variable) => [
                    VariableCreators.editSuccess(variable),
                    VariableCreators.goToList(["admin", "nomencladores"]),
                    LayoutCreators.showMessage(this.variableConstants.EDITED_MESSAGE)
                ])
                .catch((error: Error) => of(VariableCreators.editFailure(error.message)))
        );

    @Effect()
    remove$: Observable<Action> = this.actions$.ofType(VariableTypes.REMOVE)
        .mergeMap((action: any) =>
            this.variableService.remove(action.variablename)
                .switchMap((variable: Variable) => [
                    VariableCreators.removeSuccess(variable),
                    VariableCreators.loadVariablesRequest(),
                    LayoutCreators.showMessage(this.variableConstants.REMOVED_MESSAGE)
                ])
                .catch((error: Error) => of(VariableCreators.removeFailure(error.message)))
        );

    @Effect({dispatch: false})
    goToList$: Observable<Action> = this.actions$.ofType(VariableTypes.GO_TO_LIST)
        .map((action: any) => action.path)
        .do((path: string[]) => this.router.navigate(path));

    @Effect()
    loadHistoricData$: Observable<Action> = this.actions$.ofType(VariableTypes.GO_TO_LIST)
        .map((action: any) => action.path)
        .do((path: string[]) => this.router.navigate(path));*/
}
