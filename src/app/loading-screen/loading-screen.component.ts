import { Component } from '@angular/core';

@Component({
  selector: 'loading-screen',
  template: `
  <div class="container">
    <div class="logo">
      <img src="assets/images/SGlogo.png">
    </div>
    <div class="loading">
      <img src="assets/images/loading.png">
    </div>
  </div>
  `,
  styles: ['.container { background-color: lightgrey; padding-top: 30%; margin: 0; width: 1024px; height: 768px}', '.logo {margin-left: 45%; margin-bottom: 2%}', '.loading { margin-left: 45% }']
})

export class LoadingScreenComponent {


constructor() {}

}
