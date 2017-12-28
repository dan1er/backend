import {Component} from "@angular/core";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
}
