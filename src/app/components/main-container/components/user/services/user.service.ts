import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";
import {User} from "../../../../../shared/model/user.model";
import Paging from "../../../../../shared/model/paging.model";

@Injectable()
export class UserService extends BaseService {
    public loadUsers(pageData: Paging): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/users?page=${pageData.page}&size=${pageData.size}`, {observe: "response"});
    }

    public loadData(username: string): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/users/${username}`, {responseType: "json"});
    }

    public create(user: User): Observable<Object> {
        return this.httpClient.post(`${this.API_URL}/users`, user, {responseType: "json"});
    }

    public update(user: User): Observable<Object> {
        return this.httpClient.put(`${this.API_URL}/users`, user, {responseType: "json"});
    }

    public remove(username: string): Observable<Object> {
        return this.httpClient.delete(`${this.API_URL}/users/${username}`, {responseType: "json"});
    }

    public getAvailability(data: { input?: string }): Observable<any> {
        return this.httpClient.post(`${this.API_URL}/users/availability`, data, {responseType: "json"});
    }
}
