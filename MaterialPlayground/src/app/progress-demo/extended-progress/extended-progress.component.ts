import { Component, OnInit } from '@angular/core';
import { MatProgressBar } from '@angular/material';

@Component({
    selector: 'app-extended-progress',
    templateUrl: './extended-progress.component.html',
    styleUrls: ['./extended-progress.component.scss']
})
export class ExtendedProgressComponent extends MatProgressBar implements OnInit {
    ngOnInit() {}
}
