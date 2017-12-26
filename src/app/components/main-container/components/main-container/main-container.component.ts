import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {StoreService} from "../../../../shared/services/store.service";
import {Store} from "@ngrx/store";
import State from "../../../../shared/redux/state";
import {LayoutCreators, LayoutSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "app-main-container",
    templateUrl: "./main-container.component.html",
    styleUrls: ["./main-container.component.scss"]
})
export class MainContainerComponent implements OnInit {
    public filtersVisible$: Observable<boolean>;
    public filterActionVisible$: Observable<boolean>;
    public title: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private titleService: Title,
                private storeService: StoreService,
                private store: Store<State>) {
    }

    public ngOnInit(): void {
        this.title = this.getPageTitle(this.route.snapshot.root);
        this.titleService.setTitle(this.title);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.title = this.getPageTitle(this.router.routerState.snapshot.root);

                this.titleService.setTitle(this.title);
            }
        });
        /*todo: check if error persists when angular updated*/
        setTimeout(() => {
            this.filtersVisible$ = this.store.select(LayoutSelectors.filtersVisible);
            this.filterActionVisible$ = this.store.select(LayoutSelectors.filterActionVisible);
        });
    }

    public toggleFilters(): void {
        this.store.dispatch(LayoutCreators.toggleFilters());
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data["title"]) ? routeSnapshot.data["title"] : "Urupagos";
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    public logout(): void {
        this.storeService.remove("auth-token");

        this.router.navigate(["login"]);
    }
}
