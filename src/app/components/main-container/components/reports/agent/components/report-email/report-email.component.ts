import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: "app-report-email",
    templateUrl: "./report-email.component.html"
})
export class ReportEmailComponent {
    public to: string;
    public cc: string;

    constructor(public dialogRef: MatDialogRef<ReportEmailComponent>,
                @Inject(MAT_DIALOG_DATA) public data: { to: string }) {
        this.to = data.to;
    }

    public closeDialog() {
        this.dialogRef.close({
            ok: true,
            cc: this.cc
        });
    }
}
