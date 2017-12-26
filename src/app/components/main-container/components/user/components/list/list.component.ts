import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {UserCreators, UserSelectors} from "../../redux";
import {User} from "../../../../../../shared/model/user.model";
import {MatDialog, MatPaginator, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../../shared/model/paging.model";
import {ConfirmDialogComponent} from "../../../../../../shared/modules/messages/components/confirm-dialog/confirm-dialog.component";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
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

        this.store.select(UserSelectors.users).subscribe((users: User[]) => this.dataSource.data = users);
        this.store.select(UserSelectors.selected).subscribe((user: User) => this.selected = user);
        this.anySelected$ = this.store.select(UserSelectors.anySelected);
        this.pageData$ = this.store.select(UserSelectors.pageData);
    }

    public ngAfterViewInit(): void {
        this.paginator.page.subscribe((data: any) => {
            const pageData = new Paging(data);
            this.store.dispatch(UserCreators.updatePageData(pageData));
            this.loadUsers();
        });
    }

    public columnSelected(selected: User): void {
        this.store.dispatch(
            UserCreators.select(selected)
        );
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
