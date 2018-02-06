import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {ActivatedRoute} from "@angular/router";
import {AgencyCreators, AgencySelectors} from "../../redux";
import {SharedConstantsService} from "../../../../../../shared/services/shared-constants.service";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";
import Agency from "../../../../../../shared/model/agency.model";
import {NomenclatorCreators, NomenclatorSelectors} from "../../../nomenclator/redux";
import {Observable} from "rxjs/Observable";
import Nomenclator from "../../../../../../shared/model/nomenclator";

@TakeUntilDestroy
@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit, OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public banks$: Observable<Nomenclator[]>;
    public policyCompanies$: Observable<Nomenclator[]>;
    public departments$: Observable<Nomenclator[]>;
    public accountTypes$: Observable<Nomenclator[]>;
    public agency: Agency = new Agency();

    constructor(public sharedConstants: SharedConstantsService,
                private store: Store<State>,
                private route: ActivatedRoute) {
        this.subscribeToSelected();
        this.loadNomenclators();
        this.banks$ = this.store.select(NomenclatorSelectors.banks);
        this.policyCompanies$ = this.store.select(NomenclatorSelectors.policyCompanies);
        this.departments$ = this.store.select(NomenclatorSelectors.departments);
        this.accountTypes$ = this.store.select(NomenclatorSelectors.accountTypes);
    }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params["id"];

            if (id) {
                this.loadAgencyData(id);
            }
        });
    }

    public ngOnDestroy(): void {
        this.store.dispatch(AgencyCreators.reset());
    }

    public submit(): void {
        if (this.agency.id) {
            this.store.dispatch(AgencyCreators.edit(this.agency));
        } else {
            this.store.dispatch(AgencyCreators.create(this.agency));
        }
    }

    private loadAgencyData(id: number): void {
        this.store.dispatch(AgencyCreators.loadData(id));
    }

    private subscribeToSelected(): void {
        this.store.select(AgencySelectors.selected)
            .takeUntil(this.componentDestroyed$)
            .subscribe(
                (agency: Agency) =>
                    this.agency = agency
                        ? new Agency(agency)
                        : new Agency());
    }

    private loadNomenclators(): void {
        this.store.dispatch(NomenclatorCreators.loadBanks());
        this.store.dispatch(NomenclatorCreators.loadDepartments());
        this.store.dispatch(NomenclatorCreators.loadAccountTypes());
        this.store.dispatch(NomenclatorCreators.loadPolicyCompanies());
    }
}
