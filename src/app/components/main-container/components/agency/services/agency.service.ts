import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AgencyService extends BaseService {
    public loadRecords(): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/agency?page=0&size=10000`, {responseType: "json"});
    }

    public find(id: string): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/agency/${id}`, {responseType: "json"});
    }
}
