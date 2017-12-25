import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {StoreService} from "../../../../shared/services/store.service";

@Component({
    selector: "app-main-container",
    templateUrl: "./main-container.component.html",
    styleUrls: ["./main-container.component.scss"]
})
export class MainContainerComponent implements OnInit {
    public title: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private titleService: Title,
                private storeService: StoreService) {
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
