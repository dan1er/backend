import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {NomenclatorService} from "../services/nomenclator.service";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {of} from "rxjs/observable/of";
import {NomenclatorCreators, NomenclatorTypes} from "./actions";
import {filters, pageData} from "./selectors";
import {Router} from "@angular/router";
import State from "../../../../../shared/redux/state";
import {HttpResponse} from "@angular/common/http";
import Nomenclator from "../../../../../shared/model/nomenclator";
import {NomenclatorType} from "../../../../../shared/model/nomenclator-type.model";
import {selected} from "../../nomenclator/redux/selectors";
import {NomenclatorConstants} from "../nomenclator.constants";
import {LayoutCreators} from "../../../redux";

@Injectable()
export default class NomenclatorEffects {
    constructor(private actions$: Actions,
                private nomenclatorService: NomenclatorService,
                private router: Router,
                private store: Store<State>,
                private nomenclatorConstants: NomenclatorConstants) {
    }

    @Effect()
    nomenclator$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_NOMENCLATORS_REQUEST)
        .withLatestFrom(this.store.select(pageData))
        .withLatestFrom(this.store.select(filters))
        .mergeMap(([[, data], appliedFilters]) =>
            this.nomenclatorService.loadNomenclators(data)
                .switchMap((response: HttpResponse<any>) => {
                    const nomenclators = (appliedFilters && appliedFilters.length)
                        ? response.body
                            .filter((item: Nomenclator) => !!appliedFilters.find((filter: NomenclatorType) => filter === item.type))
                        : response.body;

                    return [
                        NomenclatorCreators.loadNomenclatorsSuccess(nomenclators)
                    ];
                })
                .catch((error: Error) => {
                    return of(NomenclatorCreators.loadNomenclatorsFailure(error.message));
                })
        );

    @Effect()
    loadData$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_DATA)
        .mergeMap((action: any) =>
            this.nomenclatorService.loadData(action.nomenclatorname)
                .switchMap((nomenclator: Nomenclator) => of(NomenclatorCreators.loadDataSuccess(nomenclator)))
                .catch((error: Error) => of(NomenclatorCreators.loadDataFailure(error.message)))
        );

    @Effect()
    loadBanks$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_BANKS)
        .mergeMap(() =>
            this.nomenclatorService.loadAllByType(NomenclatorType.Bank)
                .switchMap((types: Nomenclator[]) => of(NomenclatorCreators.loadBanksSuccess(types)))
                .catch((error: Error) => of(NomenclatorCreators.loadBanksFailure(error.message)))
        );

    @Effect()
    loadDepartments$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_DEPARTMENTS)
        .mergeMap(() =>
            this.nomenclatorService.loadAllByType(NomenclatorType.Department)
                .switchMap((departments: Nomenclator[]) => of(NomenclatorCreators.loadDepartmentsSuccess(departments)))
                .catch((error: Error) => of(NomenclatorCreators.loadDepartmentsFailure(error.message)))
        );

    @Effect()
    loadPolicyCompanies$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_POLICY_COMPANIES)
        .mergeMap(() =>
            this.nomenclatorService.loadAllByType(NomenclatorType.PolicyCompany)
                .switchMap((companies: Nomenclator[]) => of(NomenclatorCreators.loadPolicyCompaniesSuccess(companies)))
                .catch((error: Error) => of(NomenclatorCreators.loadPolicyCompaniesFailure(error.message)))
        );

    @Effect()
    loadBankAccountTypes$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.LOAD_ACCOUNT_TYPES)
        .mergeMap(() =>
            this.nomenclatorService.loadAllByType(NomenclatorType.BankAccountType)
                .switchMap((types: Nomenclator[]) => of(NomenclatorCreators.loadAccountTypesSuccess(types)))
                .catch((error: Error) => of(NomenclatorCreators.loadAccountTypesFailure(error.message)))
        );

    @Effect()
    create$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.CREATE)
        .mergeMap((action: any) =>
            this.nomenclatorService.create(action.record)
                .switchMap((nomenclator: Nomenclator) => [
                    NomenclatorCreators.createSuccess(nomenclator),
                    NomenclatorCreators.goToList(["admin", "nomencladores"]),
                    LayoutCreators.showMessage(this.nomenclatorConstants.CREATED_MESSAGE)
                ])
                .catch((error: Error) => of(NomenclatorCreators.createFailure(error.message)))
        );

    @Effect()
    update$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.EDIT)
        .mergeMap((action: any) =>
            this.nomenclatorService.update(action.record)
                .switchMap((nomenclator: Nomenclator) => [
                    NomenclatorCreators.editSuccess(nomenclator),
                    NomenclatorCreators.goToList(["admin", "nomencladores"]),
                    LayoutCreators.showMessage(this.nomenclatorConstants.EDITED_MESSAGE)
                ])
                .catch((error: Error) => of(NomenclatorCreators.editFailure(error.message)))
        );

    @Effect()
    remove$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.REMOVE)
        .mergeMap((action: any) =>
            this.nomenclatorService.remove(action.nomenclatorname)
                .switchMap((nomenclator: Nomenclator) => [
                    NomenclatorCreators.removeSuccess(nomenclator),
                    NomenclatorCreators.loadNomenclatorsRequest(),
                    LayoutCreators.showMessage(this.nomenclatorConstants.REMOVED_MESSAGE)
                ])
                .catch((error: Error) => of(NomenclatorCreators.removeFailure(error.message)))
        );

    @Effect({dispatch: false})
    goToList$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.GO_TO_LIST)
        .map((action: any) => action.path)
        .do((path: string[]) => this.router.navigate(path));

    @Effect()
    filtersApplies$: Observable<Action> = this.actions$.ofType(NomenclatorTypes.UPDATE_APPLIED_FILTERS)
        .mergeMap(() => of(NomenclatorCreators.loadNomenclatorsRequest()));

    @Effect()
    beforeCreate$: Observable<any> = this.actions$.ofType(NomenclatorTypes.ADD_COMMAND)
        .mergeMap(() => [NomenclatorCreators.clearSelected()])
        .do(() => this.router.navigate(["admin", "nomencladores", "adicionar"]));

    @Effect({dispatch: false})
    beforeEdit$: Observable<any> = this.actions$.ofType(NomenclatorTypes.EDIT_COMMAND)
        .withLatestFrom(this.store.select(selected))
        .do(([, selectedNomenclator]) => this.router.navigate(["admin", "nomencladores", "editar", selectedNomenclator.id]));
}
