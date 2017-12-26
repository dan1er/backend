import {Component} from "@angular/core";
import {LoaderService} from "../../services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent {
    public visible: boolean;

    constructor(private loaderService: LoaderService) {
        this.loaderService.loader.subscribe((value: boolean) => this.visible = value);
    }
}
