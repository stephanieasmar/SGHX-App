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
    // once at least one button has been clicked, call resetAllButtons() function
  }

  resetAllButtons(buttonSelection) {
    //reset all selected buttons back to their original state
    // if (buttons.length) >= 1
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
