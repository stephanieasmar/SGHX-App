import { Component } from '@angular/core';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { navigationCancelingError } from '@angular/router/src/shared';

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
  checkedNumber: boolean;


  constructor() {
    this.isSelected = false;
    this.checkedNumber = false;
  }

  //DONE
  selectItem($event) {
    var itemId = $event.target.id;
    this.itemSelection.push(itemId); //pushes items into

    if (this.itemSelection.length >= 3) {
      this.itemSelection.splice(3, 1); //keeps array at max 3 items
    }

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
  }

  navigateToArchetype() {
    
  }

//Just need to add navigation to this
  showMeResult(itemSelection) {
    var results = this.itemSelection;
    this.checkNumberOfItemsSelected(results);
    alert('This is what you chose:' + results);
    return results;
  }


}



// TO DO:

// Import CSV File - 2 hrs
// Write result functions - 2 hrs
// Figure out result navigation - 2hrs
// Figure out b=item disabling - 2 hrs
