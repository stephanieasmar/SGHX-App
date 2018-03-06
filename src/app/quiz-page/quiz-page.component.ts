import { Component, OnInit } from '@angular/core';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { navigationCancelingError } from '@angular/router/src/shared';
import { ArchetypeService } from '../archetype.service';

@Component({
  selector: 'quiz-page',
  providers: [ ArchetypeService ],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  itemSelection = [];
  isSelected: boolean;
  itemId: any;
  checkedNumber: boolean;
  archetypeData = [];
  archetypes = [];
  error: any;


  constructor(private _archetypeService: ArchetypeService) {
    this.isSelected = false;
    this.checkedNumber = false;
  };

  ngOnInit() {
    this._archetypeService.getJSONDataAsync('../assets/data/archetypes.json').then(data => {
      this.setQueryOptionsData(data);
      console.log(data);
    });
    
  }

      // var archetypes = this._archetypeService.getArchetypeData()
    // console.log(this.archetypes);

    setQueryOptionsData(data) {
      this.archetypes = data.archetypes;
    }


    // this._archetypeService.getArchetypeData()
    //   .subscribe(
    //     archetypeData => this.archetypes = archetypeData, //success paths
    //     error => this.error = error // error path
    //   ); 
    //   console.log(this.archetypeData);
  

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
// Figure out result navigation - 2hrs
// Figure out item disabling - 2 hrs
