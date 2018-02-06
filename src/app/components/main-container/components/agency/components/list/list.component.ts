import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {MatDialog, MatPaginator, MatTableDataSource} from "@angular/material";
import Paging from "../../../../../../shared/model/paging.model";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import Agency from "../../../../../../shared/model/agency.model";
import {AgencyCreators, AgencySelectors} from "../../redux";
import {ConfirmDialogComponent} from "../../../../../../shared/modules/messages/components/confirm-dialog/confirm-dialog.component";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {ILayoutState} from "../../../../redux/reducer";
import {LayoutCreators, LayoutSelectors} from "../../../../redux";

@TakeUntilDestroy
@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public anySelected$: Observable<boolean>;
    public pageData$: Observable<Paging>;
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public selected: Agency;
    public columns = [
        {columnDef: "select", selectable: true, cell: (row: Agency) => `${row.id}`},
        {columnDef: "number", header: "Número", cell: (row: Agency) => `${row.number}`},
        {columnDef: "rut", header: "Rut", cell: (row: Agency) => `${row.rut}`},
        {columnDef: "name", header: "Rut", cell: (row: Agency) => `${row.name}`},
        {columnDef: "businessName", header: "Razón Social", cell: (row: Agency) => `${row.businessName}`},
        {columnDef: "city", header: "Ciudad", cell: (row: Agency) => `${row.city}`},
        {columnDef: "department", header: "Departamento", cell: (row: Agency) => `${row.department && row.department.description}`},
        {columnDef: "activated", header: "Estado", cell: (row: Agency) => `${row.active ? "Activa" : "Inactiva"}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);

    constructor(public router: Router,
                private store: Store<State>,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadAgencies();

        this.anySelected$ = this.store.select(AgencySelectors.anySelected);
        this.pageData$ = this.store.select(AgencySelectors.pageData);

        this.store.select(AgencySelectors.records)
            .takeUntil(this.componentDestroyed$)
            .subscribe((records: Agency[]) => this.dataSource.data = records);
        this.store.select(AgencySelectors.selected)
            .takeUntil(this.componentDestroyed$)
            .subscribe((agency: Agency) => this.selected = agency);

        this.store.select(LayoutSelectors.layoutState)
            .takeUntil(this.componentDestroyed$)
            .subscribe((state: ILayoutState) => {
                if (state.add.active) {
                    this.onAddClick();
                } else if (state.edit.active) {
                    this.onEditClick();
                } else if (state.remove.active) {
                    this.onDeleteClick();
                }
            });
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.store.dispatch(AgencyCreators.reset());
    }

    public columnSelected(selected: Agency): void {
        this.store.dispatch(AgencyCreators.select(selected));
        this.store.dispatch(LayoutCreators.enableListActionsForSelected());
    }

    public onAddClick(): void {
        this.store.dispatch(AgencyCreators.addCommand());
    }

    public onEditClick(): void {
        this.store.dispatch(AgencyCreators.editCommand());
    }

    public onDeleteClick(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: "450px",
            data: {
                message: `¿Confirma que desea eliminar la agencia "${this.selected.name}"?`
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.store.dispatch(AgencyCreators.remove(this.selected.name));
            }
        });
    }

    private loadAgencies(): void {
        this.store.dispatch(AgencyCreators.loadRecordsRequest());
    }
}
