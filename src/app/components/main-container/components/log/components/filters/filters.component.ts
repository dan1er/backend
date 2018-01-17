import {Component, OnDestroy} from "@angular/core";
import State from "../../../../../../shared/redux/state";
import {Subject} from "rxjs/Subject";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Store} from "@ngrx/store";

@TakeUntilDestroy
@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html"
})
export class FiltersComponent implements OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public levels: any[];

    constructor(private store: Store<State>) {
        this.levels = [{label: "Trace"}, {label: "Debug"}, {label: "Info"}, {label: "Warn"}, {label: "Error"}];
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }
}
