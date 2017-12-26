import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {ActivatedRoute} from "@angular/router";
import {NomenclatorCreators, NomenclatorSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";
import {AgencyCreators} from "../../../agency/redux";
import {SharedConstantsService} from "../../../../../../shared/services/shared-constants.service";
import {NomenclatorType} from "../../../../../../shared/model/nomenclator-type.model";
import Nomenclator from "../../../../../../shared/model/nomenclator";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
    public nomenclatorTypes$: Observable<NomenclatorType[]>;
    public nomenclator: Nomenclator = new Nomenclator(NomenclatorType.Bank);

    constructor(public sharedConstants: SharedConstantsService, private store: Store<State>, private route: ActivatedRoute) {
        this.nomenclatorTypes$ = this.store.select(NomenclatorSelectors.nomenclatorTypes);
        this.store.select(NomenclatorSelectors.selected)
            .subscribe(
                (nomenclator: Nomenclator) =>
                    this.nomenclator = nomenclator
                        ? new Nomenclator(nomenclator.type, nomenclator)
                        : new Nomenclator(NomenclatorType.Bank));
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

    public submit(): void {
        if (this.nomenclator.id) {
            this.store.dispatch(NomenclatorCreators.edit(this.nomenclator));
        } else {
            this.store.dispatch(NomenclatorCreators.create(this.nomenclator));
        }
    }

    private loadNomenclatorData(nomenclatorName: string): void {
        this.store.dispatch(
            NomenclatorCreators.loadData(nomenclatorName)
        );
    }

    private loadAgencies() {
        this.store.dispatch(AgencyCreators.loadRecordsRequest());
    }
}
