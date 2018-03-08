import { Component, OnInit } from '@angular/core';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { navigationCancelingError } from '@angular/router/src/shared';
import { ArchetypeService } from '../archetype.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-page',
  providers: [ ArchetypeService ],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent implements OnInit {

  itemSelection = [];
  archetypeData = [];
  itemId: any;
  error: any;
  archetypeResult: any;
  resultReturned: boolean;
  checkedNumber: boolean;
  isSelected: boolean;


  constructor(private _archetypeService: ArchetypeService, private route: ActivatedRoute, private router: Router) {
    this.isSelected = false;
    this.checkedNumber = false;
    this.resultReturned = false;
  };

  ngOnInit() {
    this._archetypeService.getJSONDataAsync('../assets/data/archetypes.json').then(data => {
      this.setQueryOptionsData(data);
    });
  }

//reassigns response data to global property; 
//doing this in sepearate function to make sure 
//that data has been loaded before variable is assigned
  setQueryOptionsData(data) {
    this.archetypeData = data;
  }

  //pushed user selection into array property
  selectItem($event) {
    var itemId = $event.target.id;
    console.log(itemId);
    this.disableValueButtons(itemId);
    this.itemSelection.push(itemId); //pushes items into array
    if (this.itemSelection.length >= 3) {
      this.itemSelection.splice(3, 1); //keeps array at max 3 items
    }
  }

  //super hacky :(
  disableValueButtons(itemId) {
    if (this.itemId == "spirituality" ) {
      this.isSelected = true;
    }
  }

  checkNumberOfItemsSelected(itemSelection) {
    if (this.itemSelection.length > 3) {
      alert('Too many values chosen. Please RESET');
    } if (this.itemSelection.length < 3) {
      alert('Please choose THREE values');
    } else this.checkedNumber = true;
  }

  checkIfValidOptions(itemSelection) {
    if (this.itemSelection[0] == this.itemSelection[1]) {
      alert('Please RESET and choose three DIFFERENT values');
    } else if (this.itemSelection[0] == this.itemSelection[2]) {
      alert('Please RESET and choose three DIFFERENT values');
    }else if (this.itemSelection[1] == this.itemSelection[2]) {
      alert('Please RESET and choose three DIFFERENT values');
    } else if (this.itemSelection[0] == this.itemSelection[1] && (this.itemSelection[0] == this.itemSelection[2]) && (this.itemSelection[1] == this.itemSelection[2])) {
      alert('Please RESET and choose three DIFFERENT values');
    }
  }

  resetQuiz() {
    this.isSelected = false;
    this.checkedNumber = false;
    this.itemSelection = [];
  }

  navigateToArchetype(archetypeResult) {
    console.log(archetypeResult);
    if (this.archetypeResult == 'Rule Breaker') {
      this.router.navigate(['archetype-seeker/rule-breaker']);   
    } else if (this.archetypeResult == 'Perpetual Dreamer') {
      this.router.navigate(['archetype-seeker/perpetual-dreamer']);  
    } else if (this.archetypeResult == 'Team Motivator') {
      this.router.navigate(['archetype-seeker/perpetual-dreamer']);  
    } else if (this.archetypeResult == 'Rule Follower') {
      this.router.navigate(['archetype-seeker/rule-follower']);  
    } else if (this.archetypeResult == 'Comfort Seeker') {
      this.router.navigate(['archetype-seeker/comfort-seeker']);  
    } else if (this.archetypeResult == 'Insights Gatherer') {
      this.router.navigate(['archetype-seeker/insights-gatherer']);  
    } else if (this.archetypeResult == 'Social Connector') {
      this.router.navigate(['archetype-seeker/social-connector']);  
    } else {
      alert('Error. Please RESET and begin again');
    }
  }

  showMeResult(itemSelection) {
    var results = this.itemSelection;
    console.log(results);
    this.checkNumberOfItemsSelected(results);
    this.checkIfValidOptions(results);    
    var datas = this.archetypeData;
    for (let data in datas) {
      if(results[0]==datas[data]["First Value"]&&results[1]==datas[data]["Second Value"]&&results[2]==datas[data]["Third Value"]) {
        this.archetypeResult = datas[data]["Archetype"];
        this.resultReturned = true;
        console.log(this.archetypeResult);
      }
    };
    if (this.resultReturned = true) {
      this.navigateToArchetype(this.archetypeResult);
    }
  }

}
