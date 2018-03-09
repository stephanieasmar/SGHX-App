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
  styles: ['.container { background-image: url(../../assets/images/pattern.png); padding-top: 30%; margin: 0; width: 1024px; height: 768px}', '.logo {margin-left: 45% }', '.copy { font-weight: bold; margin-left: 45% }']
})

export class LoadingScreenComponent {


constructor() {}

}
