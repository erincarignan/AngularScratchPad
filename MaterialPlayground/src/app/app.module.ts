import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { FormsModule } from '@angular/forms';
import { ChipDemoComponent } from './chip-demo/chip-demo.component';
import { RoutingModule } from './routing/routing.module';
import { CustomProgressComponent } from './progress-Demo/custom-progress/custom-progress.component';
import { ExtendedProgressComponent } from './progress-demo/extended-progress/extended-progress.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        ProgressDemoComponent,
        ExtendedProgressComponent,
        ChipDemoComponent,
        CustomProgressComponent,
        HeaderComponent,
        NavigationComponent
    ],
    imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule, RoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
