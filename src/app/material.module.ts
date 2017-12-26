import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatInputModule, MatListModule, MatMenuModule,
    MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatTableModule,
    MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressBarModule,
        MatSlideToggleModule
    ],
    exports: [
        FormsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatRadioModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressBarModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule {
}
