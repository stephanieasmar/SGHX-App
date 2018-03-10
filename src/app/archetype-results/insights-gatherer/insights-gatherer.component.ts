import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'insights-gatherer',
  templateUrl: './insights-gatherer.component.html',
	styleUrls: ['./insights-gatherer.component.css'],
})
export class InsightsGathererComponent {
  title = 'Insights Gatherer';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
