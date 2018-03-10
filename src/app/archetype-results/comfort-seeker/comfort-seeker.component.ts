import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'comfort-seeker',
	templateUrl: './comfort-seeker.component.html',
	styleUrls: ['./comfort-seeker.component.css'],
})


export class ComfortSeekerComponent {
  title = 'Comfort Seeker';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
