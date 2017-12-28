import {Component, OnDestroy} from "@angular/core";
import {NomenclatorCreators, NomenclatorSelectors} from "../../redux";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {Subject} from "rxjs/Subject";
import {TakeUntilDestroy} from "ngx-take-until-destroy";

@TakeUntilDestroy
@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html",
    styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public nomenclatorTypes: any[];

    constructor(private store: Store<State>) {
        this.store.select(NomenclatorSelectors.nomenclatorTypes)
            .takeUntil(this.componentDestroyed$)
            .subscribe((data: any[]) => this.nomenclatorTypes = [...data]);
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    public onFilterChange(filter: any): void {
        filter.checked = !filter.checked;
        const selected = this.nomenclatorTypes.filter((item: any) => item.checked)
            .map((item: any) => item.value);
        this.store.dispatch(NomenclatorCreators.updateAppliedFilters(selected));
    }
}
