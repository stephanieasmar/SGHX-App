import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'insights-gatherer',
  template: `
  <div class="col-sm-12 start-over">
    <div class="row">
      <div class="col-sm-7 result">
        <div class="youare"><img src="assets/images/YouAre.png"></div>
        <div class="archetype"><img src="assets/images/InsightsGatherer.png"></div>
      </div>
      <div class="col-sm-5 paragraph"></div>
    </div>
    <div class="row">
      <div class="col-sm-2 restart" (click)=startOver()> 
        <img src="assets/images/StartOver.png">
      </div>
    </div>
  </div>
  `,
  styles: ['.result { padding-left: 10%; }', '.archetype { margin-top: 10%; }', '.youare { margin-top: 10%; margin-left: 27.5% }', '.restart { margin-left: 90% ; margin-top: 2% }']
})
export class InsightsGathererComponent {
  title = 'Insights Gatherer';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
