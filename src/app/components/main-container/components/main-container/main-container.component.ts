import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {StoreService} from "../../../../shared/services/store.service";
import {Store} from "@ngrx/store";
import State from "../../../../shared/redux/state";
import {LayoutCreators, LayoutSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";
import {ILayoutState} from "../../redux/reducer";
import {IRouteData} from "../../../../shared/model/route-data.model";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";

@TakeUntilDestroy
@Component({
    selector: "app-main-container",
    templateUrl: "./main-container.component.html",
    styleUrls: ["./main-container.component.scss"]
})
export class MainContainerComponent implements OnInit, OnDestroy {
    public componentDestroyed$: Subject<boolean>;
    public layoutState$: Observable<ILayoutState>;
    public title: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private titleService: Title,
                private storeService: StoreService,
                private store: Store<State>) {
    }

    public ngOnInit(): void {
        let data: IRouteData = this.getRouteData(this.route.snapshot.root);
        this.title = data.title;
        this.titleService.setTitle(this.title);
        this.activateLayoutFeatures(data);

        this.router.events
            .takeUntil(this.componentDestroyed$)
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    data = this.getRouteData(this.router.routerState.snapshot.root);
                    this.title = data.title;
                    this.titleService.setTitle(this.title);
                    this.activateLayoutFeatures(data);

                }
            });
        this.layoutState$ = this.store.select(LayoutSelectors.layoutState);
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    public toggleFiltersSection(): void {
        this.store.dispatch(LayoutCreators.toggleFiltersSection());
    }

    private getRouteData(routeSnapshot: ActivatedRouteSnapshot): IRouteData {
        let data: IRouteData = <IRouteData>routeSnapshot.data;
        if (routeSnapshot.firstChild) {
            data = this.getRouteData(routeSnapshot.firstChild);
        }
        return data;
    }

    public logout(): void {
        this.storeService.remove("auth-token");

        this.router.navigate(["login"]);
    }

    public onAddClick(): void {
        this.store.dispatch(LayoutCreators.add());
    }

    public onEditClick(): void {
        this.store.dispatch(LayoutCreators.edit());
    }

    public onDeleteClick(): void {
        this.store.dispatch(LayoutCreators.remove());
    }

    private activateLayoutFeatures(data: IRouteData): void {
        if (data && data.isListView) {
            this.store.dispatch(data.isFilteringEnabled
                ? LayoutCreators.initListActions()
                : LayoutCreators.initListActionsWithoutFiltering());
        } else {
            this.store.dispatch(LayoutCreators.disableListActions());
        }
    }
}
