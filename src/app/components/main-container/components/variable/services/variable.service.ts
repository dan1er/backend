import BaseService from "../../../../../shared/services/base.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Variable} from "../../../../../shared/model/variable.model";
import {VariableType} from "../../../../../shared/model/variable-type.model";

@Injectable()
export class VariableService extends BaseService {
    public create(variable: Variable): Observable<Object> {
        return this.httpClient.post(`${this.API_URL}/variable`, variable);
    }
    public find(id: string): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/variable/${id}`);
    }

    public loadHistoricData(type: VariableType): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/variable/${type}`);
    }

    public remove(login: string): Observable<Object> {
        return this.httpClient.delete(`${this.API_URL}/variable/${login}`);
    }

    public current(): Observable<Object> {
        return this.httpClient.get(`${this.API_URL}/variable/current`);
    }
}
