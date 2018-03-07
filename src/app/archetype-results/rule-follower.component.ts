import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rule-follower',
  template: `
  <div class="col-sm-3 start-over" (click)=startOver()>
    <img src="assets/images/RESET.png">
    <h1>Rule Follower</h1>
  </div>
  `,
})
export class RuleFollowerComponent {
  title = 'Rule Follower';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
