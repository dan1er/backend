import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {StoreService} from "../../../../shared/services/store.service";
import {Store} from "@ngrx/store";
import State from "../../../../shared/redux/state";
import {LayoutCreators, LayoutSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";
import {ILayoutState, INotification} from "../../redux/reducer";
import {IRouteData} from "../../../../shared/model/route-data.model";
import {TakeUntilDestroy} from "ngx-take-until-destroy";
import {Subject} from "rxjs/Subject";
import {MatSnackBar} from "@angular/material";
import {notification} from "../../redux/selectors";

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
    public menuVisible: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private titleService: Title,
                private storeService: StoreService,
                private store: Store<State>,
                private snackBar: MatSnackBar) {
    }

    public ngOnInit(): void {
        let data: IRouteData = this.getRouteData(this.route.snapshot.root);
        this.title = data.title;
        this.titleService.setTitle(this.title);
        this.menuVisible = true;
        this.activateLayoutFeatures(data);

        this.layoutState$ = this.store.select(LayoutSelectors.layoutState);
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
        setTimeout(() => {
            this.store
                .select(notification)
                .takeUntil(this.componentDestroyed$)
                .subscribe((value: INotification) => {
                    if (value && value.message) {
                        this.notify(value.message);
                    }
                });
        });
    }

    public ngOnDestroy(): void {
        // empty for autounsubscribe on aot
    }

    public toggleFiltersSection(): void {
        this.store.dispatch(LayoutCreators.toggleFiltersSection());
    }

    public toggleMenuSection(): void {
        this.menuVisible = !this.menuVisible;
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
        const isListView = data && data.isListView,
            filters = data && data.filters,
            isEditingEnabled = data && data.isEditingEnabled;

        this.store.dispatch(LayoutCreators.initListActions(isListView, filters, isEditingEnabled));
    }

    private notify(value: string): void {
        this.snackBar.open(value, null, {duration: 4000});
    }
}
