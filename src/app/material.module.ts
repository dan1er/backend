import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatListModule, MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";

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
        MatListModule
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
        MatListModule
    ]
})
export class MaterialModule {
}
