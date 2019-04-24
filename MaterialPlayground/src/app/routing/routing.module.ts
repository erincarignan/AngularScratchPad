import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgressDemoComponent } from '../progress-demo/progress-demo.component';
import { ChipDemoComponent } from '../chip-demo/chip-demo.component';

const routes: Routes = [
    { path: 'progress-demo', component: ProgressDemoComponent },
    { path: 'chip-demo', component: ChipDemoComponent },
    { path: '', redirectTo: '/progress-demo', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule {}
