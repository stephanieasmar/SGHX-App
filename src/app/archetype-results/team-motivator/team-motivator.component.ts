import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'team-motivator',
  templateUrl: './team-motivator.component.html',
	styleUrls: ['./team-motivator.component.css'],
})
export class TeamMotivatorComponent {
  title = 'Team Motivator';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
