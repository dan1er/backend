import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export default class BaseService {
    protected readonly SERVER_ADDRESS: string = environment.serverAddress;
    protected readonly API_URL: string = `${environment.serverAddress}/api`;

    constructor(protected httpClient: HttpClient) {
    }
}
