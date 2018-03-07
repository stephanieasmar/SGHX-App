import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'team-motivator',
  template: `
  <div class="col-sm-3 start-over" (click)=startOver()>
    <img src="assets/images/RESET.png">
    <h1>Team Motivator</h1>
  </div>
  `,
})
export class TeamMotivatorComponent {
  title = 'Team Motivator';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
