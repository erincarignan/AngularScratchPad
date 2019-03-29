import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../base/base.component";

@Component({
  selector: "my-inherited",
  templateUrl: "../base/base.component.html",
  styleUrls: ["../base/base.component.css"]
})
export class InheritedComponent extends BaseComponent implements OnInit {
  ngOnInit() {}
}
