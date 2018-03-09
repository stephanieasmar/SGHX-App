import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

// Sets initial value to true to show loading spinner on first load
loading = true

constructor(private router: Router) {
  router.events.subscribe((event: RouterEvent) => {
    this.navigationInterceptor(event)
  })
}

// Shows and hides the loading spinner during RouterEvent changes
navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.loading = true
  }
  if (event instanceof NavigationEnd) {
    this.loading = false
  }

  // Set loading state to false in both of the below events to hide the spinner in case a request fails
  if (event instanceof NavigationCancel) {
    this.loading = false
  }
  if (event instanceof NavigationError) {
    this.loading = false
  }
}
}

