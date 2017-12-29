import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    MAT_DATE_LOCALE, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule,
    MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatToolbarModule, MatTooltipModule
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
        MatSlideToggleModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
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
        MatSlideToggleModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: "es-UY"}
    ]
})
export class MaterialModule {
}
