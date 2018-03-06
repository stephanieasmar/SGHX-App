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
  archetypeData = [];


  constructor() {
    this.isSelected = false;
    this.checkedNumber = false;

    // this.archetypeData = ["creativity", "connection", "knowledge"];

    this.archetypeData = [

      {
        "First Value": "Creativity",
        "Second Value": "Independence",
        "Third Value": "Contribution",
        "Archetype": "Team Motivator"
      },
      {
        "First Value": "Creativity",
        "Second Value": "Independence",
        "Third Value": "Enjoyment",
        "Archetype": "Rule Breaker"
      }
    ]
  }

  selectItem($event) {
    var itemId = $event.target.id;
    this.itemSelection.push(itemId); //pushes items into
    if (this.itemSelection.length >= 3) {
      this.itemSelection.splice(3, 1); //keeps array at max 3 items
    }

    this.isSelected = true;
  }

  checkNumberOfItemsSelected(itemSelection) {
    if (this.itemSelection.length > 3) {
      alert('Too many values chosen. Please RESET');
    } if (this.itemSelection.length < 3) {
      alert('Please choose THREE values');
    } else this.checkedNumber = true;
  }

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
    var datas = this.archetypeData;
    var archResult;
    for (let data in datas) {
      if(results[0]==datas[data]["First Value"]&&results[1]==datas[data]["Second Value"]&&results[2]==datas[data]["Third Value"]) {
        console.log(datas[data]["Archetype"]);
        return(datas[data]["Archetype"]);
      }
    };
  }
}





// TO DO:

// Import CSV File - 2 hrs
// Write result functions - 2 hrs
// Figure out result navigation - 2hrs
// Figure out b=item disabling - 2 hrs
