import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {LogCreators, LogSelectors} from "../../redux";
import {MatDialog, MatPaginator, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../../shared/model/paging.model";
import {LayoutSelectors} from "../../../../redux";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";
import {Log} from "../../../../../../shared/model/log.model";

@TakeUntilDestroy
@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public columns = [
        {columnDef: "name", header: "Nombre", cell: (row: Log) => `${row.name}`},
        {columnDef: "level", header: "Nivel", cell: (row: Log) => `${row.level}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadLogs();

        this.pageData$ = this.store.select(LogSelectors.pageData);
        this.store.select(LogSelectors.logs)
            .takeUntil(this.componentDestroyed$)
            .subscribe(
                (logs: Log[]) => this.dataSource.data = logs);
        this.store.select(LayoutSelectors.filtersVisible)
            .takeUntil(this.componentDestroyed$)
            .subscribe((value: boolean) => this.navigateToFilters(value));
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    private loadLogs(): void {
        this.store.dispatch(LogCreators.loadLogsRequest());
    }

    private navigateToFilters(value: boolean) {
        if (value) {
            this.router.navigate(["admin", "logs", {outlets: {"right": ["filtros"]}}]);
        }
    }
}
