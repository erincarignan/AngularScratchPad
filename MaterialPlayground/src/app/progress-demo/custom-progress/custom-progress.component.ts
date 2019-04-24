import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-progress',
    templateUrl: './custom-progress.component.html',
    styleUrls: ['./custom-progress.component.scss']
})
export class CustomProgressComponent implements OnInit {
    barType = 'ok';
    mode = 'determinate';
    value = 50;
    dir = 'ltr';

    constructor() {}

    ngOnInit() {}
}
