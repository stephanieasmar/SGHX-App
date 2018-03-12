import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rule-follower',
  templateUrl: './rule-follower.component.html',
	styleUrls: ['./rule-follower.component.css'],
})
export class RuleFollowerComponent {
  title = 'Rule Follower';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
