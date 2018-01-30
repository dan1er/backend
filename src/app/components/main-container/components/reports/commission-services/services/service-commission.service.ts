import {Injectable} from "@angular/core";
import BaseService from "../../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServiceCommissionService extends BaseService {
    public loadServices(startDate: Date, endDate: Date): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/commission/report/services/${startDate}/${endDate}`, {responseType: "json"});
    }
}
