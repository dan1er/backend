import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AgencyService extends BaseService {
    public loadRecords(): Observable<Object> {
        return this.httpClient.get(`${this.apiUrl}/agency`, {responseType: "json"});
    }
}
