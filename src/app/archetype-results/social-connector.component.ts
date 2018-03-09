import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'social-connector',
  template: `
  <div class="container">
  <div class="col-sm-12 start-over">
    <div class="row">
      <div class="col-sm-7 result">
        <div class="youare"><img src="assets/images/YouAre.png"></div>
        <div class="archetype"><img src="assets/images/SocialConnector.png"></div>
      </div>
      <div class="col-sm-5 copy">
        <img src="assets/images/sc_copy.png">
      </div>
    </div>
    <div class="row">
      <div class=" col-sm-2 restart" (click)=startOver()> 
        <img src="assets/images/StartOver.png">
      </div>
    </div>
  </div>
  </div>
  `,
  styles: ['.container { background-image: url(../../assets/images/pattern.png); margin: 0; padding: 0; width: 1024px; height: 768px}', '.result { padding-left: 5%; }', '.archetype { margin-top: 10%; }', '.youare { margin-top: 15%; margin-left: 30% }', '.restart { margin-left: 90% ; margin-top: 2% }', '.copy { margin-top: 27.5% }']
})
export class SocialConnectorComponent {
  title = 'Social Connector';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
