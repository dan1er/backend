import {Component, OnInit} from "@angular/core";
import {CommissionServicesCreators, CommissionServicesSelectors} from "../../redux";
import {ICommissionServiceFilters} from "../../redux/reducer";
import {Store} from "@ngrx/store";
import State from "../../../../../../../shared/redux/state";
import {FormatService} from "../../../../../../../shared/services/format.service";
import * as moment from "moment";

@Component({
    selector: "app-commission-services-filters",
    templateUrl: "./commission-services-filters.component.html",
    styleUrls: ["./commission-services-filters.component.scss"]
})
export class CommissionServicesFiltersComponent implements OnInit {
    public filters: ICommissionServiceFilters;

    constructor(private store: Store<State>, private formatService: FormatService) {
    }

    public ngOnInit(): void {
        this.store.select(CommissionServicesSelectors.filters)
            .subscribe((filters: ICommissionServiceFilters) => this.filters = {...filters});

        this.initFilters();
    }

    private initFilters() {
        this.filters = {
            from: moment().add(-1, "month").toDate(),
            to: moment().toDate()
        };

        this.updateFilters(this.filters);
    }

    private updateFilters(filters: ICommissionServiceFilters) {
        this.store.dispatch(CommissionServicesCreators.updateFilters(filters));
        this.store.dispatch(CommissionServicesCreators.getServices(
            this.formatService.formatDate(filters.from, "y-MM-dd"),
            this.formatService.formatDate(filters.to, "y-MM-dd")
            )
        );
    }
}
