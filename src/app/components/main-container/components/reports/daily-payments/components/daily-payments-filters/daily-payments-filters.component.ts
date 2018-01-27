import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-daily-payments-filters",
    templateUrl: "./daily-payments-filters.component.html",
    styleUrls: ["./daily-payments-filters.component.scss"]
})
export class DailyPaymentsFiltersComponent implements OnInit {
    public selectedDate: Date;

    constructor() {
        this.selectedDate = new Date();
    }

    public ngOnInit(): void {
    }
}
