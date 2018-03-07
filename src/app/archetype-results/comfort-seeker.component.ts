import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'comfort-seeker',
  template: `
  <div class="col-sm-3 start-over" (click)=startOver()>
    <img src="assets/images/RESET.png">
    <h1>Comfort Seeker</h1>
  </div>
  `,
})
export class ComfortSeekerComponent {
  title = 'Comfort Seeker';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
