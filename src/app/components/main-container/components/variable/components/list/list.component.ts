import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {VariableCreators} from "../../redux";
import {Observable} from "rxjs/Observable";
import {Variable} from "../../../../../../shared/model/variable.model";
import {historicData, selectedVariable, variables} from "../../redux/selectors";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, OnDestroy {
    public variables$: Observable<Variable[]>;
    public historicData$: Observable<Variable[]>;
    public selectedVariable: Variable;
    public selectedVariableId: number;

    constructor(private store: Store<State>) {
        this.variables$ = this.store.select(variables);
        this.historicData$ = this.store.select(historicData);
        this.store.select(selectedVariable).subscribe((variable: Variable) => {
            this.selectedVariable = variable;
            this.selectedVariableId = this.selectedVariable && this.selectedVariable.id;
        });
    }

    public ngOnInit(): void {
        this.store.dispatch(VariableCreators.loadVariablesRequest());
    }

    public onChange(): void {
        this.store.dispatch(VariableCreators.select(this.selectedVariable));
    }

    public ngOnDestroy(): void {
        this.store.dispatch(VariableCreators.reset());
    }

    public compareFn(val1: Variable, val2: Variable): boolean {
        return val1.id === val2.id;
    }

    public variableUpdate(variable: Variable): void {
        this.store.dispatch(VariableCreators.create({...variable, id: undefined}));
    }
}
