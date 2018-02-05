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
import {CommissionServicesSelectors} from "../../redux";
import {ICommissionService} from "../../redux/reducer";
import {FormatService} from "../../../../../../../shared/services/format.service";

@TakeUntilDestroy
@Component({
    selector: "app-commission-services",
    templateUrl: "./commission-services.component.html",
    styleUrls: ["./commission-services.component.scss"]
})
export class CommissionServicesComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public columns: any[];
    public totals: ICommissionService;
    public displayedColumns: string[];
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>,
                private formatService: FormatService) {
    }

    public ngOnInit(): void {
        this.initColumns();

        this.pageData$ = this.store.select(CommissionServicesSelectors.pageData);

        this.store.select(LayoutSelectors.filtersVisible)
            .takeUntil(this.componentDestroyed$)
            .subscribe((value: boolean) => this.navigateToFilters(value));

        this.store.select(CommissionServicesSelectors.services)
            .subscribe((services: ICommissionService[]) => this.dataSource.data = services);

        this.store.select(CommissionServicesSelectors.totals)
            .subscribe((totals: ICommissionService) => this.totals = totals);
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    private navigateToFilters(value: boolean) {
        if (value) {
            this.router.navigate(["admin", "reporte-comision-servicios", {outlets: {"right": ["filtros"]}}]);
        }
    }

    private initColumns() {
        this.columns = [
            {columnDef: "serviceName", header: "Servicio", cell: (row: ICommissionService) => `${row.serviceName}`},
            {columnDef: "quantity", header: "Transacciones", cell: (row: ICommissionService) => `${row.quantity}`},
            {
                columnDef: "uyCharged",
                header: "Cobrado UYU",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.uyCharged)}`
            },
            {
                columnDef: "uyCommission",
                header: "Comisión UYU",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.uyCommission)}`
            },
            {columnDef: "uyIva", header: "IVA UYU", cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.uyIva)}`},
            {
                columnDef: "uyTotal",
                header: "Total UYU",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.uyTotal)}`
            },
            {
                columnDef: "usdCharged",
                header: "Cobrado USD",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.usdCharged)}`
            },
            {
                columnDef: "usdCommission",
                header: "Comisión USD",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.usdCommission)}`
            },
            {columnDef: "usdIva", header: "IVA USD", cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.usdIva)}`},
            {
                columnDef: "usdTotal",
                header: "Total USD",
                cell: (row: ICommissionService) => `${this.formatService.formatNumber(row.usdTotal)}`
            }
        ];
        this.displayedColumns = this.columns.map(x => x.columnDef);
    }
}
