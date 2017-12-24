import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {StoreService} from "./store.service";

@Injectable()
export class AuthService {
    constructor(private storeService: StoreService) {
    }

    public get token(): string {
        return this.storeService.getProperty("auth-token");
    }

    public get isAuthenticated(): boolean {
        return tokenNotExpired(null, this.token);
    }
}
