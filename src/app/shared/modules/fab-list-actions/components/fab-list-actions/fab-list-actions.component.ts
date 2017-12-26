import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "app-fab-list-actions",
    templateUrl: "./fab-list-actions.component.html",
    styleUrls: ["./fab-list-actions.component.scss"]
})
export class FabListActionsComponent {
    @Input() public canEdit: boolean;
    @Output() public addClick = new EventEmitter();
    @Output() public editClick = new EventEmitter();
    @Output() public deleteClick = new EventEmitter();
}
