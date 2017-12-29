import {AfterViewInit, Component, Input, OnChanges, ViewChild} from "@angular/core";
import {Variable} from "../../../../../../shared/model/variable.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import * as moment from "moment";

@Component({
    selector: "app-history",
    templateUrl: "./history.component.html",
    styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements AfterViewInit, OnChanges {
    @Input() public data: Variable[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public dataSource = new MatTableDataSource();
    public columns = [
        {columnDef: "description", header: "Tipo", cell: (row: Variable) => `${row.description}`},
        {columnDef: "date", header: "Fecha", cell: (row: Variable) => `${moment(row.date).format("DD/MM/YYYY")}`},
        {columnDef: "value", header: "Valor", cell: (row: Variable) => `${row.value}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnChanges(): void {
        this.dataSource.data = this.data || [];
    }
}
