import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rule-breaker',
  templateUrl: './rule-breaker.component.html',
	styleUrls: ['./rule-breaker.component.css'],
})
export class RuleBreakerComponent {
  title = 'Rule Breaker';
  
  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
