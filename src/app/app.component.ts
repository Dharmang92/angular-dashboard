import { Component } from "@angular/core";
import { RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("routeAnimation", [
      transition("* => *", [
        style({
          position: "relative"
        }),
        query(":enter, :leave", [
          style({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "block"
          })
        ], {optional: true}),
        query(":enter", [
          style({
            opacity: 0,
            height: "100%"
          })
        ], {optional: true}),
        group([
          query(":leave", [
            animate(200, style({
              opacity: 0
            }))
          ], {optional: true}),
          query(":enter", [
            animate(200, style({
              opacity: 1
            }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  prepareRouter(outlet: RouterOutlet): any {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url;
    }
  }
}
