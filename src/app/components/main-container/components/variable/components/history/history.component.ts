import {AfterViewInit, Component, Input, OnChanges, ViewChild} from "@angular/core";
import {Variable} from "../../../../../../shared/model/variable.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {FormatService} from "../../../../../../shared/services/format.service";

@Component({
    selector: "app-history",
    templateUrl: "./history.component.html"
})
export class HistoryComponent implements AfterViewInit, OnChanges {
    @Input() public data: Variable[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public dataSource = new MatTableDataSource();
    public columns = [
        {columnDef: "description", header: "Tipo", cell: (row: Variable) => `${row.description}`},
        {columnDef: "date", header: "Fecha", cell: (row: Variable) => `${this.formatService.formatDate(row.date)}`},
        {columnDef: "value", header: "Valor", cell: (row: Variable) => `${row.value}`}
    ];
    public displayedColumns = this.columns.map(x => x.columnDef);

    constructor(private formatService: FormatService) {
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnChanges(): void {
        this.dataSource.data = this.data || [];
    }
}
