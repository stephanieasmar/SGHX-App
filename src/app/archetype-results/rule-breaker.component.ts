import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rule-breaker',
  template: `
  <div class="col-sm-3 start-over" (click)=startOver()>
    <img src="assets/images/RESET.png">
    <h1>Rule Breaker</h1>
  </div>
  `,
})
export class RuleBreakerComponent {
  title = 'Rule Breaker';
  
  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
