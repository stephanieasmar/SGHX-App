import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

const appRoutes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'archetype-seeker', component: QuizPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    QuizPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
