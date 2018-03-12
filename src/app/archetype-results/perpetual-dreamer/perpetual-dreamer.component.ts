import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'perpetual-dreamer',
  templateUrl: './perpetual-dreamer.component.html',
	styleUrls: ['./perpetual-dreamer.component.css'],
})
export class PerpetualDreamerComponent {
  title = 'Perpetual Dreamer';

  constructor(private route: ActivatedRoute, private router: Router) {};

  startOver() {
    this.router.navigate(['']); 
  }
}
