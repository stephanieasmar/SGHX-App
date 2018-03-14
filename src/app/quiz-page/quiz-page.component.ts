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
  checkedNumber: boolean
  isSelected: boolean;
  Independence: boolean = true;
  Contribution: boolean = true;
  Spirituality: boolean = true;
  Enjoyment: boolean = true;
  Education: boolean = true;
  Security: boolean = true;
  Creativity: boolean = true;
  Connection: boolean = true;
  Adventure: boolean = true;
  Knowledge: boolean = true;
  Determination: boolean = true;
  Simplicity: boolean = true;

  constructor(private _archetypeService: ArchetypeService, private route: ActivatedRoute, private router: Router) {

  };

  ngOnInit() {
    this._archetypeService.getJSONDataAsync('../s2/assets/data/archetypes.json').then(data => {
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
    this.itemId = $event.target.id;
    this.disableValueButtons(this.itemId);
    this.createItemArray(this.itemId);
    this.showShowMeButton(this.itemSelection);
  }

  disableValueButtons(itemId) {
    if (this.itemSelection.length < 3) {
      if (this.itemId == "Independence") {
        this.Independence = false;
      } else if(this.itemId == "Contribution") {
        this.Contribution = false;
      } else if(this.itemId == "Spirituality") {
        this.Spirituality = false;
      } else if(this.itemId == "Enjoyment") {
        this.Enjoyment = false;
      } else if(this.itemId == "Education") {
        this.Education = false;
      } else if(this.itemId == "Security") {
        this.Security = false;
      } else if(this.itemId == "Creativity") {
        this.Creativity = false;
      } else if(this.itemId == "Connection") {
        this.Connection = false;
      } else if(this.itemId == "Adventure") {
        this.Adventure = false;
      } else if(this.itemId == "Knowledge") {
        this.Knowledge = false;
      } else if(this.itemId == "Determination") {
        this.Determination = false;
      } else if(this.itemId == "Simplicity") {
        this.Simplicity = false;
      } 
    } else  {
      if (this.itemId == "Independence") {
        this.Independence = true;
      } else if(this.itemId == "Contribution") {
        this.Contribution = true;
      } else if(this.itemId == "Spirituality") {
        this.Spirituality = true;
      } else if(this.itemId == "Enjoyment") {
        this.Enjoyment = true;
      } else if(this.itemId == "Education") {
        this.Education = true;
      } else if(this.itemId == "Security") {
        this.Security = true;
      } else if(this.itemId == "Creativity") {
        this.Creativity = true;
      } else if(this.itemId == "Connection") {
        this.Connection = true;
      } else if(this.itemId == "Adventure") {
        this.Adventure = true;
      } else if(this.itemId == "Knowledge") {
        this.Knowledge = true;
      } else if(this.itemId == "Determination") {
        this.Determination = true;
      } else if(this.itemId == "Simplicity") {
        this.Simplicity = true;
      } 
    }
  }
    
  createItemArray(itemId) {
    this.itemSelection.push(itemId); //pushes items into array
    console.log(this.itemSelection);
    if (this.itemSelection.length >= 3) {
      this.itemSelection.splice(3, 1); //keeps array at max 3 items
    }
  }

  showShowMeButton(itemSelection) {
    if(this.itemSelection.length == 3) {
      this.isSelected = true;
    }
  }

  // checkNumberOfItemsSelected(itemSelection) {
  //   if (this.itemSelection.length > 3) {
  //     alert('Too many values chosen. Please RESET');
  //   } if (this.itemSelection.length < 3) {
  //     alert('Please choose THREE values');
  //   } else this.checkedNumber = true;
  // }

  // checkIfValidOptions(itemSelection) {
  //   if (this.itemSelection[0] == this.itemSelection[1]) {
  //     alert('Please RESET and choose three DIFFERENT values');
  //   } else if (this.itemSelection[0] == this.itemSelection[2]) {
  //     alert('Please RESET and choose three DIFFERENT values');
  //   }else if (this.itemSelection[1] == this.itemSelection[2]) {
  //     alert('Please RESET and choose three DIFFERENT values');
  //   } else if (this.itemSelection[0] == this.itemSelection[1] && (this.itemSelection[0] == this.itemSelection[2]) && (this.itemSelection[1] == this.itemSelection[2])) {
  //     alert('Please RESET and choose three DIFFERENT values');
  //   }
  // }

  resetQuiz() {
    this.isSelected = false;
    this.checkedNumber = false;
    this.itemSelection = [];
    this.Independence = true;
    this.Contribution = true;
    this.Spirituality = true;
    this.Enjoyment = true;
    this.Education = true;
    this.Security = true;
    this.Creativity = true;
    this.Connection  = true;
    this.Adventure = true;
    this.Knowledge = true;
    this.Determination = true;
    this.Simplicity = true;
  }

  navigationDecision(archetypeResult) {

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
    }

  }

  navigateToArchetype(archetypeResult) {
  this.router.navigate(['/archetype-seeker/loading']);
   setTimeout( () => {
    this.navigationDecision(archetypeResult)
   }, 1000);
  }




  showMeResult(itemSelection) {
    var results = this.itemSelection;
    console.log(results);
    // this.checkNumberOfItemsSelected(results);
    // this.checkIfValidOptions(results);    
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
