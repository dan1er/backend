import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class LoaderService {
    public loader: Observable<boolean>;
    private loaderSubject = new Subject<boolean>();

    constructor() {
        this.loader = this.loaderSubject.asObservable();
    }

    public showLoading(): void {
        this.loaderSubject.next(true);
    }

    public hideLoading(): void {
        this.loaderSubject.next(false);
    }
}
