import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ArchetypeService } from './archetype.service';

const appRoutes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'archetype-seeker', component: QuizPageComponent },

  // { path: 'archetype-seeker/rule-breaker', component: },
  // { path: 'archetype-seeker/perpetual-dreamer', component:   },
  // { path: 'archetype-seeker/team-motivator', component:   },
  // { path: 'archetype-seeker/rule-follower', component:   },
  // { path: 'archetype-seeker/comfort-seeker', component: },
  // { path: 'archetype-seeker/insights-gatherer', component:   },
  // { path: 'archetype-seeker/social-connector', component:   }
];


@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    QuizPageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // archetypeRoutes
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [ArchetypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
