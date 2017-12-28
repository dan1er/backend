import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {UserCreators, UserSelectors} from "../../redux";
import {User} from "../../../../../../shared/model/user.model";
import {MatDialog, MatPaginator, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../../shared/model/paging.model";
import {ConfirmDialogComponent} from "../../../../../../shared/modules/messages/components/confirm-dialog/confirm-dialog.component";
import {LayoutCreators, LayoutSelectors} from "../../../../redux";
import {ILayoutState} from "../../../../redux/reducer";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";

@TakeUntilDestroy
@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public componentDestroyed$: Subject<boolean>;
    public dataSource = new MatTableDataSource();
    public anySelected$: Observable<boolean>;
    public selected: User;
    public columns = [
        {columnDef: "select", selectable: true, cell: (row: User) => `${row.id}`},
        {columnDef: "login", header: "Usuario", cell: (row: User) => `${row.login}`},
        {columnDef: "agency", header: "Agencia", cell: (row: User) => `${row.agency && row.agency.name || ""}`},
        {columnDef: "firstName", header: "Nombre", cell: (row: User) => `${row.firstName}`},
        {columnDef: "lastName", header: "Apellidos", cell: (row: User) => `${row.lastName}`},
        {columnDef: "email", header: "Correo", cell: (row: User) => `${row.email}`},
        {columnDef: "authorities", header: "Rol", cell: (row: User) => `${row.authorities && row.authorities.join(", ")}`},
        {columnDef: "activated", header: "Estado", cell: (row: User) => `${row.activated ? "Activo" : "Inactivo"}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);
    public pageData$: Observable<Paging>;

    constructor(public router: Router,
                private store: Store<State>,
                private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadUsers();

        this.anySelected$ = this.store.select(UserSelectors.anySelected);
        this.pageData$ = this.store.select(UserSelectors.pageData);
        this.store.select(UserSelectors.users)
            .takeUntil(this.componentDestroyed$)
            .subscribe((users: User[]) => this.dataSource.data = users);
        this.store.select(UserSelectors.selected)
            .takeUntil(this.componentDestroyed$)
            .subscribe((user: User) => this.selected = user);

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
        this.paginator.page
            .takeUntil(this.componentDestroyed$)
            .subscribe((data: any) => {
                const pageData = new Paging(data);
                this.store.dispatch(UserCreators.updatePageData(pageData));
                this.loadUsers();
            });
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    public columnSelected(selected: User): void {
        this.store.dispatch(UserCreators.select(selected));
        this.store.dispatch(LayoutCreators.enableListActionsForSelected());
    }

    public onAddClick(): void {
        this.store.dispatch(UserCreators.addCommand());
    }

    public onEditClick(): void {
        this.store.dispatch(UserCreators.editCommand());
    }

    public onDeleteClick(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: "450px",
            data: {
                message: `¿Confirma que desea eliminar el usuario "${this.selected.login}"?`
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.store.dispatch(UserCreators.remove(this.selected.login));
            }
        });
    }

    private loadUsers(): void {
        this.store.dispatch(UserCreators.loadUsersRequest());
        this.store.dispatch(UserCreators.select(null));
    }
}
