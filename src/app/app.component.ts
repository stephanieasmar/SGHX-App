import { Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class ArchetypeService {
  private _url= 'assets/archetypes.json';
  constructor(private _http: Http) {}
  getArchetypes () {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}

export class AppComponent implements OnInit {

  archetypes = [];

  constructor(private _archetypeService: ArchetypeService){}

  ngOnInit() {
    this._archetypeService.getArchetypes()
      .subscribe(resArchetypesData => this.archetypes = resArchetypesData);
  }


  //Sasha example
  // var choices = [8, 7, 4];
	// 	    $.ajax({
	// 	        type: "GET",
	// 	        url: "testdata.csv",
	// 	        dataType: "text",
	// 	        success: function(data) {
	// 		        data = data.split('\n');
	// 				data.forEach(function(line){
	// 					line = line.split(',');
	// 					if(choices[0]==line[0]&&choices[1]==line[1]&&choices[2]==line[2]) {
	// 						alert(line[3]);
	// 					}
	// 				});
	// 	        }
	// 	     });





}

