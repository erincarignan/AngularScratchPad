import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "my-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.css"]
})
export class BaseComponent implements OnInit {
  @Input() isBase: boolean = true;
  constructor() {}

  ngOnInit() {}
}
