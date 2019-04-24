import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatNavList,
    MatListModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatSliderModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatSliderModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatNavList,
        MatListModule
    ]
})
export class MaterialModule {}
