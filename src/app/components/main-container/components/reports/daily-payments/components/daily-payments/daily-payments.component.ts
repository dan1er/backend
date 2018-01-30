import {Component, OnDestroy, OnInit} from "@angular/core";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Store} from "@ngrx/store";
import State from "../../../../../../../shared/redux/state";
import {LayoutSelectors} from "../../../../../redux";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import Nomenclator from "../../../../../../../shared/model/nomenclator";
import Paging from "../../../../../../../shared/model/paging.model";
import {Observable} from "rxjs/Observable";
import {MatTableDataSource} from "@angular/material";

@TakeUntilDestroy
@Component({
    selector: "app-daily-payments",
    templateUrl: "./daily-payments.component.html",
    styleUrls: ["./daily-payments.component.scss"]
})
export class DailyPaymentsComponent implements OnInit, OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public columns = [
        {columnDef: "select", selectable: true, cell: (row: Nomenclator) => `${row.id}`},
        {columnDef: "code", header: "Código", cell: (row: Nomenclator) => `${row.code}`},
        {columnDef: "description", header: "Descripción", cell: (row: Nomenclator) => `${row.description}`},
        {columnDef: "type", header: "Tipo", cell: (row: Nomenclator) => `${row.type}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>) {
    }

    public ngOnInit(): void {
        this.store.select(LayoutSelectors.filtersVisible)
            .takeUntil(this.componentDestroyed$)
            .subscribe((value: boolean) => this.navigateToFilters(value));
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    private navigateToFilters(value: boolean) {
        if (value) {
            this.router.navigate(["admin", "reporte-cobranza", {outlets: {"right": ["filtros"]}}]);
        }
    }
}
