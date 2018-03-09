import { Component } from '@angular/core';

@Component({
  selector: 'loading-screen',
  template: `
  <div class="container">
    <div class="logo">
      <div class="logo"><img src="assets/images/SGlogo.png"></div>
    </div>
  </div>
  `,
  styles: ['.container { background-color: white }', '.logo { margin-top: 40%; margin-left: 40% }']
})

export class LoadingScreenComponent {


constructor() {}

}
