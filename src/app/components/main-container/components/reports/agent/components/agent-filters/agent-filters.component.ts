import {Component, OnInit} from "@angular/core";
import {AgentCreators, AgentSelectors} from "../../redux";
import {IAgentFilters} from "../../redux/reducer";
import {Store} from "@ngrx/store";
import State from "../../../../../../../shared/redux/state";
import {FormatService} from "../../../../../../../shared/services/format.service";
import * as moment from "moment";
import {AgentService} from "../../services/agent.service";
import {Subscription} from "rxjs/Subscription";
import * as fileSaver from "file-saver";
import {FileType} from "../../../../../../../shared/model/file-type.model";
import Agency from "../../../../../../../shared/model/agency.model";
import {Observable} from "rxjs/Observable";
import {MatDialog} from "@angular/material";
import {ReportEmailComponent} from "../report-email/report-email.component";

@Component({
    selector: "app-agent-filters",
    templateUrl: "./agent-filters.component.html",
    styleUrls: ["./agent-filters.component.scss"]
})
export class AgentFiltersComponent implements OnInit {
    public filters: IAgentFilters;
    public agencies$: Observable<Agency[]>;
    public hasRecords$: Observable<boolean>;
    public selectedAgency: Agency;
    private reportSaveSubscription$: Subscription;

    constructor(private store: Store<State>,
                private formatService: FormatService,
                private agentService: AgentService,
                public dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.store.select(AgentSelectors.filters)
            .subscribe((filters: IAgentFilters) => this.filters = {...filters});

        this.store.select(AgentSelectors.selectedAgency)
            .subscribe((agency: Agency) => this.selectedAgency = {...agency});

        this.agencies$ = this.store.select(AgentSelectors.agencies);
        this.hasRecords$ = this.store.select(AgentSelectors.hasRecords);

        this.initFilters();
        this.store.dispatch(AgentCreators.getAgencies());
    }

    public savePdf(): void {
        this.save(FileType.PDF, "application/pdf");
    }

    public saveXls(): void {
        this.save(FileType.XLS, "application/octet-stream");
    }

    public emailCurrentReport(): void {
        const dialogRef = this.dialog.open(ReportEmailComponent, {
            width: "550px",
            data: {
                to: this.selectedAgency && this.selectedAgency.contactEmail
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.ok) {
                const from = this.formatService.formatDate(this.filters.from, "y-MM-dd"),
                    to = this.formatService.formatDate(this.filters.to, "y-MM-dd");

                this.store.dispatch(AgentCreators.emailCurrentReport(
                    result.cc,
                    from,
                    to,
                    this.filters.agency
                ));
            }
        });
    }

    public emailLastMonthReport(): void {
        const dialogRef = this.dialog.open(ReportEmailComponent, {
            width: "550px",
            data: {
                to: this.selectedAgency && this.selectedAgency.contactEmail
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.ok) {
                this.store.dispatch(AgentCreators.emailLastMonthReport(
                    result.cc,
                    this.filters.agency
                ));
            }
        });
    }

    private initFilters() {
        this.filters = {
            from: moment().add(-1, "month").toDate(),
            to: moment().toDate()
        };

        this.updateFilters(this.filters);
    }

    private updateFilters(filters: IAgentFilters) {
        this.store.dispatch(AgentCreators.updateFilters(filters));
        this.store.dispatch(AgentCreators.getRecords(
            filters.agency,
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

        this.reportSaveSubscription$ = this.agentService.getReportFile(this.filters.agency, from, to, fileType, acceptHeader)
            .subscribe((response: Blob) => {
                fileSaver.saveAs(response, `reporte-agente.${fileType}`);
            });
    }
}
