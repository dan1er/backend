import {Injectable} from "@angular/core";
import BaseService from "../../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";
import {FileType} from "../../../../../../shared/model/file-type.model";

@Injectable()
export class AgentService extends BaseService {
    public loadRecords(agencyId: number, startDate: Date, endDate: Date): Observable<Object> {
        const url = agencyId
            ? `${this.API_URL}/commission/report/agency/${agencyId}/${startDate}/${endDate}`
            : `${this.API_URL}/commission/report/agencies/${startDate}/${endDate}`;
        return this.httpClient.get(url, {responseType: "json"});
    }

    public getReportFile(agencyId: number, from: string, to: string, fileType: FileType, acceptHeader: string): Observable<any> {
        const url = agencyId
            ? `${this.API_URL}/commission/report/agency/${fileType}/${agencyId}/${from}/${to}`
            : `${this.API_URL}/commission/report/agencies/${fileType}/${from}/${to}`;

        return this.httpClient.get(url, {
            responseType: "blob",
            headers: {
                "Accept": acceptHeader
            }
        });
    }

    public emailCurrentReport(cc, agency, startDate, endDate): Observable<Object> {
        const url = cc
            ? `${this.API_URL}/notification/commission/agency/${agency}/${startDate}/${endDate}/${cc}`
            : `${this.API_URL}/notification/commission/agency/${agency}/${startDate}/${endDate}`;
        return this.httpClient.get(url, {responseType: "json"});
    }

    public emailLastMonthReport(cc, agency): Observable<Object> {
        const url = cc
            ? `${this.API_URL}/notification/commission/agency/${agency}/last/${cc}`
            : `${this.API_URL}/notification/commission/agency/${agency}/last`;
        return this.httpClient.get(url, {responseType: "json"});
    }
}
