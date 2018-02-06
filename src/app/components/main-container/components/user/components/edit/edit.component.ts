import {Component, OnDestroy, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../../../shared/redux/state";
import {User} from "../../../../../../shared/model/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserCreators, UserSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";
import Role from "../../../../../../shared/model/role.model";
import Agency from "../../../../../../shared/model/agency.model";
import {AgencyCreators, AgencySelectors} from "../../../agency/redux";
import {SharedConstantsService} from "../../../../../../shared/services/shared-constants.service";
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
    public roles$: Observable<Role[]>;
    public agencies$: Observable<Agency[]>;
    public user: User = new User();
    public originalEmail: string;
    public originalUsername: string;

    constructor(public sharedConstants: SharedConstantsService, private store: Store<State>, private route: ActivatedRoute) {
        this.roles$ = this.store.select(UserSelectors.roles);
        this.agencies$ = this.store.select(AgencySelectors.records);
        this.subscribeToSelected();
    }

    public ngOnInit(): void {
        this.loadAgencies();

        this.route.params
            .takeUntil(this.componentDestroyed$)
            .subscribe(params => {
                const userName = params["username"];

                if (userName) {
                    this.loadUserData(userName);
                }
            });
    }

    public ngOnDestroy(): void {
        this.store.dispatch(UserCreators.reset());
    }

    public submit(): void {
        if (this.user.id) {
            this.store.dispatch(UserCreators.edit(this.user));
        } else {
            this.store.dispatch(UserCreators.create(this.user));
        }
    }

    private loadUserData(userName: string): void {
        this.store.dispatch(
            UserCreators.loadData(userName)
        );
    }

    private loadAgencies() {
        this.store.dispatch(AgencyCreators.loadRecordsRequest());
    }

    private subscribeToSelected(): void {
        this.store.select(UserSelectors.selected)
            .takeUntil(this.componentDestroyed$)
            .subscribe((user: User) => {
                this.user = user ? new User(user) : new User();
                if (user) {
                    this.originalEmail = user.email;
                    this.originalUsername = this.user.login;
                    this.user = new User(user);
                } else {
                    this.user = new User();
                }
            });
    }
}
