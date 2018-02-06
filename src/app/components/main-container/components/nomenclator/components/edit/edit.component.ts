import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {ActivatedRoute} from "@angular/router";
import {NomenclatorCreators, NomenclatorSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";
import {AgencyCreators} from "../../../agency/redux";
import {SharedConstantsService} from "../../../../../../shared/services/shared-constants.service";
import {NomenclatorType} from "../../../../../../shared/model/nomenclator-type.model";
import Nomenclator from "../../../../../../shared/model/nomenclator";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";

@TakeUntilDestroy
@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit, OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public nomenclatorTypes$: Observable<any[]>;
    public nomenclator: Nomenclator = new Nomenclator(NomenclatorType.Bank);

    constructor(public sharedConstants: SharedConstantsService, private store: Store<State>, private route: ActivatedRoute) {
        this.nomenclatorTypes$ = this.store.select(NomenclatorSelectors.nomenclatorTypes);
        this.subscribeToSelected();
    }

    public ngOnInit(): void {
        this.loadAgencies();

        this.route.params.subscribe(params => {
            const id = params["id"];

            if (id) {
                this.loadNomenclatorData(id);
            }
        });
    }

    public ngOnDestroy(): void {
        this.store.dispatch(NomenclatorCreators.reset());
    }

    public submit(): void {
        if (this.nomenclator.id) {
            this.store.dispatch(NomenclatorCreators.edit(this.nomenclator));
        } else {
            this.store.dispatch(NomenclatorCreators.create(this.nomenclator));
        }
    }

    private loadNomenclatorData(nomenclatorName: string): void {
        this.store.dispatch(NomenclatorCreators.loadData(nomenclatorName));
    }

    private loadAgencies() {
        this.store.dispatch(AgencyCreators.loadRecordsRequest());
    }

    private subscribeToSelected(): void {
        this.store.select(NomenclatorSelectors.selected)
            .takeUntil(this.componentDestroyed$)
            .subscribe(
                (nomenclator: Nomenclator) =>
                    this.nomenclator = nomenclator
                        ? new Nomenclator(nomenclator.type, nomenclator)
                        : new Nomenclator(NomenclatorType.Bank));
    }
}
