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
  checkedNumber: boolean = false;


  constructor() {
    this.isSelected = false;
  }

  //DONE
  getItemClickedInfo($event) {
    var itemId = $event.target.id;
    this.itemSelection.push(itemId); //pushes items into

    if (this.itemSelection.length >= 3) {
      this.itemSelection.splice(3, 1); //keeps array at max 3 items
    }

    console.log(this.itemSelection);
    return this.itemSelection;
  }

//NEEDS WORK
  disableItem(itemId) {
    this.isSelected = true;
  }


  //DONE
  checkNumberOfItemsSelected(itemSelection) {
    if (this.itemSelection.length > 3) {
      alert('Too many values chosen. Please RESET');
    } if (this.itemSelection.length < 3) {
      alert('Please choose THREE values');
    } else this.checkedNumber = true;
  }


  //DONE
  resetQuiz() {
    this.isSelected = false;
    this.checkedNumber = false;
    this.itemSelection = [];
    console.log(this.itemSelection);
  }

  navigateToArchetype() {
    
  }

//Just need to add navigation to this
  showMeResult(itemSelection) {
    var results = this.itemSelection;
    this.checkNumberOfItemsSelected(results);
    console.log(results);
    return results;
  }


}
