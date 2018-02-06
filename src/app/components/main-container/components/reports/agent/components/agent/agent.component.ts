import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import Paging from "../../../../../../../shared/model/paging.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import State from "../../../../../../../shared/redux/state";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Subject} from "rxjs/Subject";
import {LayoutSelectors} from "../../../../../redux";
import {Store} from "@ngrx/store";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {AgentCreators, AgentSelectors} from "../../redux";
import {FormatService} from "../../../../../../../shared/services/format.service";
import {IAgentRecord} from "../../redux/reducer";

@TakeUntilDestroy
@Component({
    selector: "app-agent",
    templateUrl: "./agent.component.html",
    styleUrls: ["./agent.component.scss"]
})
export class AgentComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public columns: any[];
    public displayedColumns: string[];
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>,
                private formatService: FormatService) {
    }

    public ngOnInit(): void {
        this.initColumns();

        this.pageData$ = this.store.select(AgentSelectors.pageData);

        this.store.select(LayoutSelectors.filtersVisible)
            .takeUntil(this.componentDestroyed$)
            .subscribe((value: boolean) => this.navigateToFilters(value));

        this.store.select(AgentSelectors.records)
            .subscribe((services: IAgentRecord[]) => this.dataSource.data = services);
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.store.dispatch(AgentCreators.reset());
    }

    private navigateToFilters(value: boolean) {
        if (value) {
            this.router.navigate(["admin", "reporte-agentes", {outlets: {"right": ["filtros"]}}]);
        }
    }

    private initColumns() {
        this.columns = [
            {columnDef: "agencyName", header: "Agencia", cell: (row: IAgentRecord) => `${row.agencyName}`},
            {columnDef: "serviceName", header: "Servicio", cell: (row: IAgentRecord) => `${row.serviceName}`},
            {columnDef: "quantity", header: "Transacciones", cell: (row: IAgentRecord) => `${row.quantity}`},
            {
                columnDef: "uyCharged",
                header: "Cobrado UYU",
                cell: (row: IAgentRecord) => `${this.formatService.formatNumber(row.uyCharged)}`
            },
            {
                columnDef: "usdCharged",
                header: "Cobrado USD",
                cell: (row: IAgentRecord) => `${this.formatService.formatNumber(row.usdCharged)}`
            },
            {
                columnDef: "uyCommission",
                header: "Comisión UYU",
                cell: (row: IAgentRecord) => `${this.formatService.formatNumber(row.commission)}`
            }
        ];
        this.displayedColumns = this.columns.map(x => x.columnDef);
    }
}
