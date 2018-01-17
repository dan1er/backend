import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import BaseService from "../../../shared/services/base.service";

@Injectable()
export class LoginService extends BaseService {
    public login(username: string, password: string): Observable<Object> {
        return this.httpClient.post(`${this.API_URL}/authenticate`, {username, password}, {responseType: "json"});
    }
}
