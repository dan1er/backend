import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {
    constructor(public httpClient: HttpClient) {
    }

    public login(username: string, password: string): Observable<Object> {
        return this.httpClient.post("login", {username, password}, {responseType: "json"});
    }
}
