import { Component } from '@angular/core';

@Component({
  selector: 'loading-screen',
  template: `
  <div class="container">
    <div class="logo">
      <img src="assets/images/SGlogo.png">
      <h5>Loading...</h5>
    </div>
  </div>
  `,
  styles: ['.container { background-color: white }', '.logo { margin-top: 35%; margin-left: 45% }', '.copy { font-weight: bold; margin-left: 45% }']
})

export class LoadingScreenComponent {


constructor() {}

}
