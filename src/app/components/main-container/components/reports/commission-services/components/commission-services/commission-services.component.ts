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
    public columns = [
        {columnDef: "serviceName", header: "Servicio", cell: (row: ICommissionService) => `${row.serviceName}`},
        {columnDef: "quantity", header: "Transacciones", cell: (row: ICommissionService) => `${row.quantity}`},
        {columnDef: "uyCharged", header: "Cobrado UYU", cell: (row: ICommissionService) => `${row.uyCharged}`},
        {columnDef: "uyCommission", header: "Comisión UYU", cell: (row: ICommissionService) => `${row.uyCommission}`},
        {columnDef: "uyIva", header: "IVA UYU", cell: (row: ICommissionService) => `${row.uyIva}`},
        {columnDef: "uyTotal", header: "Total UYU", cell: (row: ICommissionService) => `${row.uyTotal}`},
        {columnDef: "usdCharged", header: "Cobrado USD", cell: (row: ICommissionService) => `${row.usdCharged}`},
        {columnDef: "usdCommission", header: "Comisión USD", cell: (row: ICommissionService) => `${row.usdCommission}`},
        {columnDef: "usdIva", header: "IVA USD", cell: (row: ICommissionService) => `${row.usdIva}`},
        {columnDef: "usdTotal", header: "Total USD", cell: (row: ICommissionService) => `${row.usdTotal}`}
    ];
    public totals: ICommissionService;
    public displayedColumns = this.columns.map(x => x.columnDef);
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>) {
    }

    public ngOnInit(): void {
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
}
