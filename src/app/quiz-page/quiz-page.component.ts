import { Component } from '@angular/core';

@Component({
  selector: 'quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {

  itemSelection = [];
  choices: any;
  isSelected: boolean;
  itemId: any;
  // independence: boolean;
  // contribution: boolean;

  constructor() {
    this.isSelected = false;
    // this.independence = false;
    // this.contribution = false;
  }

  // createItemArray(itemId) {
  //   var itemSelection = [];
  //   itemSelection.push(itemId);
  //   console.log(itemSelection);
  // }


  getItemClickedInfo($event) {
    var itemId = $event.target.id;
    this.itemSelection.push(itemId);
    console.log(this.itemSelection);
    return this.itemSelection;
  }

  disableItem(itemId) {
    this.isSelected = true;
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
    this.itemSelection = [];
    console.log(this.itemSelection);
  }

  showMeResult() {

  }
}
