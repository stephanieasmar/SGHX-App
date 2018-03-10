import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'social-connector',
  templateUrl: './social-connector.component.html',
	styleUrls: ['./social-connector.component.css'],
})
export class SocialConnectorComponent {
  title = 'Social Connector';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
