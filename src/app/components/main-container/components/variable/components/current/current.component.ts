import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Variable} from "../../../../../../shared/model/variable.model";

@Component({
    selector: "app-current",
    templateUrl: "./current.component.html"
})
export class CurrentComponent {
    @Input() public variable: Variable;
    @Output() public variableUpdate = new EventEmitter();
    public today: Date = new Date();
}
