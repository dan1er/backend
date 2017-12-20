import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
    public get token(): string {
        return localStorage.getItem("auth-token");
    }

    public get isAuthenticated(): boolean {
        return tokenNotExpired(null, this.token);
    }
}
