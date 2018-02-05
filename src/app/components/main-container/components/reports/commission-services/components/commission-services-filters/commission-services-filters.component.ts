import {Component, OnInit} from "@angular/core";
import {CommissionServicesCreators, CommissionServicesSelectors} from "../../redux";
import {ICommissionServiceFilters} from "../../redux/reducer";
import {Store} from "@ngrx/store";
import State from "../../../../../../../shared/redux/state";
import {FormatService} from "../../../../../../../shared/services/format.service";
import * as moment from "moment";
import {ServiceCommissionService} from "../../services/service-commission.service";
import {Subscription} from "rxjs/Subscription";
import * as fileSaver from "file-saver";
import {FileType} from "../../../../../../../shared/model/file-type.model";

@Component({
    selector: "app-commission-services-filters",
    templateUrl: "./commission-services-filters.component.html",
    styleUrls: ["./commission-services-filters.component.scss"]
})
export class CommissionServicesFiltersComponent implements OnInit {
    public filters: ICommissionServiceFilters;
    private reportSaveSubscription$: Subscription;

    constructor(private store: Store<State>,
                private formatService: FormatService,
                private serviceCommissionService: ServiceCommissionService) {
    }

    public ngOnInit(): void {
        this.store.select(CommissionServicesSelectors.filters)
            .subscribe((filters: ICommissionServiceFilters) => this.filters = {...filters});

        this.initFilters();
    }

    public savePdf(): void {
        this.save(FileType.PDF, "application/pdf");
    }

    public saveXls(): void {
        this.save(FileType.XLS, "application/octet-stream");
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

    private save(fileType: FileType, acceptHeader: string): void {
        const from = this.formatService.formatDate(this.filters.from, "y-MM-dd"),
            to = this.formatService.formatDate(this.filters.to, "y-MM-dd");

        if (this.reportSaveSubscription$) {
            this.reportSaveSubscription$.unsubscribe();
        }

        this.reportSaveSubscription$ = this.serviceCommissionService.getReportFile(from, to, fileType, acceptHeader)
            .subscribe((response: Blob) => {
                fileSaver.saveAs(response, `reporte-agente.${fileType}`);
            });
    }
}
