import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatListModule, MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
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
