import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService extends BaseService {
    public loadUsers(): Observable<Object> {
        return this.httpClient.get(`${this.apiUrl}/users`, {responseType: "json"});
    }
}
