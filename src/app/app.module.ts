import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

//archetype Components
import { RuleBreakerComponent } from './archetype-results/rule-breaker/rule-breaker.component';
import { PerpetualDreamerComponent } from './archetype-results/perpetual-dreamer/perpetual-dreamer.component';
import { TeamMotivatorComponent } from './archetype-results/team-motivator/team-motivator.component';
import { RuleFollowerComponent } from './archetype-results/rule-follower/rule-follower.component';
import { ComfortSeekerComponent } from './archetype-results/comfort-seeker/comfort-seeker.component';
import { InsightsGathererComponent } from './archetype-results/insights-gatherer/insights-gatherer.component';
import { SocialConnectorComponent } from './archetype-results/social-connector/social-connector.component';

//services
import { ArchetypeService } from './archetype.service';

const appRoutes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'archetype-seeker', component: QuizPageComponent },

  { path: 'archetype-seeker/rule-breaker', component: RuleBreakerComponent },
  { path: 'archetype-seeker/perpetual-dreamer', component: PerpetualDreamerComponent  },
  { path: 'archetype-seeker/team-motivator', component: TeamMotivatorComponent },
  { path: 'archetype-seeker/rule-follower', component: RuleFollowerComponent  },
  { path: 'archetype-seeker/comfort-seeker', component: ComfortSeekerComponent },
  { path: 'archetype-seeker/insights-gatherer', component: InsightsGathererComponent },
  { path: 'archetype-seeker/social-connector', component: SocialConnectorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    QuizPageComponent,
    RuleBreakerComponent,
    PerpetualDreamerComponent,
    TeamMotivatorComponent,
    RuleFollowerComponent,
    ComfortSeekerComponent,
    InsightsGathererComponent,
    SocialConnectorComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
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
