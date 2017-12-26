import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {NomenclatorCreators, NomenclatorSelectors} from "../../redux";
import {MatDialog, MatPaginator, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../../shared/model/paging.model";
import Nomenclator from "../../../../../../shared/model/nomenclator";
import {ConfirmDialogComponent} from "../../../../../../shared/modules/messages/components/confirm-dialog/confirm-dialog.component";
import {LayoutCreators, LayoutSelectors} from "../../../../redux";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public dataSource = new MatTableDataSource();
    public anySelected$: Observable<boolean>;
    public selected: Nomenclator;
    public columns = [
        {columnDef: "select", selectable: true, cell: (row: Nomenclator) => `${row.id}`},
        {columnDef: "code", header: "Código", cell: (row: Nomenclator) => `${row.code}`},
        {columnDef: "description", header: "Descripción", cell: (row: Nomenclator) => `${row.description}`},
        {columnDef: "type", header: "Tipo", cell: (row: Nomenclator) => `${row.type}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadNomenclators();

        this.store.select(NomenclatorSelectors.nomenclators).subscribe(
            (nomenclators: Nomenclator[]) => this.dataSource.data = nomenclators);
        this.store.select(NomenclatorSelectors.selected).subscribe((nomenclator: Nomenclator) => this.selected = nomenclator);
        this.store.select(LayoutSelectors.filtersVisible).subscribe((value: boolean) => this.navigateToFilters(value));
        this.anySelected$ = this.store.select(NomenclatorSelectors.anySelected);
        this.pageData$ = this.store.select(NomenclatorSelectors.pageData);
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.store.dispatch(LayoutCreators.toggleListActions(true));
    }

    public ngOnDestroy(): void {
        this.store.dispatch(LayoutCreators.toggleListActions(false));
    }

    public columnSelected(selected: Nomenclator): void {
        this.store.dispatch(
            NomenclatorCreators.select(selected)
        );
    }

    public onDeleteClick(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: "450px",
            data: {
                message: `¿Confirma que desea eliminar el nomenclador "${this.selected.code}"?`
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.store.dispatch(NomenclatorCreators.remove(this.selected.id));
            }
        });
    }

    private loadNomenclators(): void {
        this.store.dispatch(NomenclatorCreators.loadNomenclatorsRequest());
        this.store.dispatch(NomenclatorCreators.select(null));
    }

    private navigateToFilters(value: boolean) {
        if (value) {
            this.router.navigate(["admin", "nomencladores", {outlets: {"right": ["filtros"]}}]);
        }
    }
}
