import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {UserCreators, UserSelectors} from "../../redux";
import {User} from "../../../../../../shared/model/user.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public dataSource = new MatTableDataSource();
    public columns = [
        {columnDef: "login", header: "Usuario", cell: (row: User) => `${row.login}`},
        {columnDef: "agency", header: "Agencia", cell: (row: User) => `${row.agency && row.agency.name || ""}`},
        {columnDef: "firstName", header: "Nombre", cell: (row: User) => `${row.firstName}`},
        {columnDef: "lastName", header: "Apellidos", cell: (row: User) => `${row.lastName}`},
        {columnDef: "email", header: "Correo", cell: (row: User) => `${row.email}`},
        {columnDef: "authorities", header: "Rol", cell: (row: User) => `${row.authorities && row.authorities.join(", ")}`},
        {columnDef: "activated", header: "Estado", cell: (row: User) => `${row.activated ? "Activo" : "Inactivo"}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);

    constructor(private store: Store<State>) {
    }

    public ngOnInit(): void {
        this.loadUsers();

        this.store.select(UserSelectors.users).subscribe((users: User[]) => this.dataSource.data = users);
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    private loadUsers() {
        this.store.dispatch(
            UserCreators.loadUsersRequest()
        );
    }
}
