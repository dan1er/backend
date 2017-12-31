import {Injectable} from "@angular/core";
import BaseService from "../../../../../shared/services/base.service";
import {Observable} from "rxjs/Observable";
import Paging from "../../../../../shared/model/paging.model";
import Nomenclator from "../../../../../shared/model/nomenclator";
import {NomenclatorType} from "../../../../../shared/model/nomenclator-type.model";

@Injectable()
export class NomenclatorService extends BaseService {
    public loadNomenclators(pageData: Paging): Observable<Object> {
        return this.httpClient.get(`${this.apiUrl}/nomenclator?page=${pageData.page}&size=${pageData.size}`, {observe: "response"});
    }

    public loadData(name: string): Observable<Object> {
        return this.httpClient.get(`${this.apiUrl}/nomenclator/${name}`, {responseType: "json"});
    }

    public loadAllByType(type: NomenclatorType): Observable<Object> {
        return this.httpClient.get(`${this.apiUrl}/nomenclator/type/${type}`, {responseType: "json"});
    }


    public create(nomenclator: Nomenclator): Observable<Object> {
        return this.httpClient.post(`${this.apiUrl}/nomenclator`, nomenclator, {responseType: "json"});
    }

    public update(nomenclator: Nomenclator): Observable<Object> {
        return this.httpClient.put(`${this.apiUrl}/nomenclator`, nomenclator, {responseType: "json"});
    }

    public remove(nomenclatorname: string): Observable<Object> {
        return this.httpClient.delete(`${this.apiUrl}/nomenclator/${nomenclatorname}`, {responseType: "json"});
    }

    public getAvailability(data: { input?: string }): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/nomenclator/availability`, data, {responseType: "json"});
    }
}
