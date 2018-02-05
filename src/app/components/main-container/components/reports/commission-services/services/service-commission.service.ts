import {Injectable} from "@angular/core";
import BaseService from "../../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";
import {FileType} from "../../../../../../shared/model/file-type.model";

@Injectable()
export class ServiceCommissionService extends BaseService {
    public loadServices(startDate: Date, endDate: Date): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/commission/report/services/${startDate}/${endDate}`, {responseType: "json"});
    }

    public getReportFile(from: string, to: string, fileType: FileType, acceptHeader: string): Observable<any> {
        return this.httpClient.get(`${this.API_URL}/commission/report/services/${fileType}/${from}/${to}`, {
            responseType: "blob",
            headers: {
                "Accept": acceptHeader
            }
        });
    }
}
