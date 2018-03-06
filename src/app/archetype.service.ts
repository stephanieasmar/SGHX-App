import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { resolve } from 'url';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ArchetypeService {
  // private _url= 'assets/data/archetypes.json'; //might be wrong filepath
  constructor(private _http: Http) {}

  //gets data with a promise, which willr eturn with the data once the task is complete.
  public getJSONDataAsync(filePath: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get(filePath)
      .subscribe(
        res => {
          if(!res.ok) {
            return("Failed with the status:" + res.status + "\nTrying to find file at:" + filePath);
          }

          var jsonRes = res.json();

          resolve(jsonRes);

        }
      
      );

    }).catch(reason => this.handleError(reason));
  }

  //Takes an error, logs it to the console, and throws it
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);

  }








  // getArchetypeData() {
  //   return this._http.get(this._url)
  //     .map((response: Response) => response.json());
  // }
}

