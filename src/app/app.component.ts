import { Component, AfterViewInit } from '@angular/core';
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

export class AppComponent implements AfterViewInit {

  loading;

  constructor(private router: Router) {
    this.loading = true;
  }
  
  ngAfterViewInit() {
      this.router.events
          .subscribe((event) => {
              if(event instanceof NavigationStart) {
                  this.loading = true;
              }
              else if (
                  event instanceof NavigationEnd || 
                  event instanceof NavigationCancel
                  ) {
                  this.loading = false;
              }
          });
  }
}

