import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import State from "../../../../shared/redux/state";
import {LoginCreators, LoginSelectors} from "../../redux";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    public error$: Observable<boolean>;
    public username: string;
    public password: string;

    constructor(private store: Store<State>) {
        this.error$ = this.store.select(LoginSelectors.error);
    }

    public login(username: string, password: string): void {
        this.store.dispatch(
            LoginCreators.loginRequest(username, password)
        );
    }
}
