import { Component } from '@angular/core';

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  title = 'Quiz Page';

  constructor() {
    var buttonSelection = []
    var buttons;
  }



  setButtonEnabledClass() {
    // on button click, enable button "on" images

  }

  setButtonDisabledClass() {
    // on click of reset button, set buttons as "off/disabled"

  }


  addToButtonArray(buttons) {
    // onClick, add button selection to Array.
    // figure out how to identify the button selected, and push into the array

    // buttons.push()
  }

  checkNumberOfButtonSelected(buttonSelection) {
    // get 'buttons parameter' from addToButtonArray() function,
    // check to make sure that number in buton array is equal to 3 before   
    // enableShowMeButton() function is called. 

    // if (buttons.length) == 3; {
    //   this.enableShowMeButton();
    // }

  }

  enableShowMeButton() {
    // once 3 buttons have been selected, enable this button to be clicked
  }

  enableResetButton(buttonSelection) {
    // once at least one button has been clicked, enable reset button
    // if (buttonSelection.length) >= 1; {

    // }
  }


  resetAllButtons(buttonSelection) {
    //on reset button click, reset buttonSelection array to 0, reset button images to "off" state
    buttonSelection = 0;
    this.setButtonDisabledClass()
  }

  showMeResult() {

  }
}

//  IDEAS: On button select, add button number to an Array;
//         Do not allow more than 3 items in the array at any one time.

//         On 'Show Me' button click, take that array and run an 'Archetype Checker' function;
//         run 'if' statements, or compare to a CSV file on the backend; then, based on results, 
//         route to the appropriate archetype display page.

//         Reset button selection
