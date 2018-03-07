import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'social-connector',
  template: `
  <div class="col-sm-3 start-over" (click)=startOver()>
    <img src="assets/images/RESET.png">
    <h1>Social Connector</h1>
  </div>
  `,
})
export class SocialConnectorComponent {
  title = 'Social Connector';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
