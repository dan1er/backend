import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export default class BaseService {
    protected apiUrl: string = environment.apiUrl;

    constructor(protected httpClient: HttpClient) {
    }
}
