import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../shared/model/paging.model";

@Injectable()
export class LogService extends BaseService {
    public loadLogs(pageData: Paging): Observable<Object> {
        return this.httpClient.get(
            `${this.SERVER_ADDRESS}/management/logs?page=${pageData.page}&size=${pageData.size}`, {observe: "response"});
    }
}
