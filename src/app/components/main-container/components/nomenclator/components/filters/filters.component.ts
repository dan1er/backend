import {Component} from "@angular/core";
import {NomenclatorCreators, NomenclatorSelectors} from "../../redux";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";

@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html",
    styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent {
    public nomenclatorTypes: any[];

    constructor(private store: Store<State>) {
        this.store.select(NomenclatorSelectors.nomenclatorTypes)
            .subscribe((data: any[]) => this.nomenclatorTypes = [...data]);
    }

    public onFilterChange(filter: any): void {
        filter.checked = !filter.checked;
        const selected = this.nomenclatorTypes.filter((item: any) => item.checked)
            .map((item: any) => item.value);
        this.store.dispatch(NomenclatorCreators.updateAppliedFilters(selected));
    }
}
