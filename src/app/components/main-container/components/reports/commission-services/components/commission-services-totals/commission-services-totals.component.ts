import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ICommissionService} from "../../redux/reducer";
import {MatTableDataSource} from "@angular/material";

@Component({
    selector: "app-commission-services-totals",
    templateUrl: "./commission-services-totals.component.html"
})
export class CommissionServicesTotalsComponent implements OnChanges {
    @Input() public totals: ICommissionService;
    @Input() public columns: any[];
    @Input() public displayedColumns: string[];
    public dataSource = new MatTableDataSource();

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes["totals"]) {
            const record = changes["totals"].currentValue;
            this.dataSource.data = record && record["serviceName"] ? [record] : [];
        }
    }
}
