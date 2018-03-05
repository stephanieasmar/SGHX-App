import { Component } from '@angular/core';

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {

  itemSelection = [];
  items: any;
  isSelected: boolean;
  // independence: boolean;
  // contribution: boolean;

  constructor() {
    this.isSelected = false;
    // this.independence = false;
    // this.contribution = false;
  }

  itemClicked($event) {
    console.log($event); 
    // this.'event payload here' = true;
  }

  // independenceClicked() {
  //   this.independence = true;
  // }

  // contributionClicked() {
  //   this.contribution = true;
  // }


  addItemToArray(items) {

    // onClick, add button selection to Array.
    // figure out how to identify the button selected, and push into the array

    // buttons.push()
  }

  checkNumberOfItemsSelected(itemSelection) {
    // get 'buttons parameter' from addToButtonArray() function,
    // check to make sure that number in buton array is equal to 3 before   
    // enableShowMeButton() function is called. 

    // if (buttons.length) == 3; {
    //   this.enableShowMeButton();
    // }

    // else alert('Please choose 3 options')

  }

  resetQuiz() {
    this.isSelected = false;
    // this.independence = false;
    // this.contribution = false;
    this.itemSelection = [];
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
