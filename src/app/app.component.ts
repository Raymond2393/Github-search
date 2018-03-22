import { Component } from '@angular/core';
import {Http, Response } from '@agular/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private http:Http){}
  userName="";
  githubData:any="";

  userLookup(){
    this.http.get("https://api.github.com/users/"  + this.userName + "?access_token="+environment.access_token)
    .subscribe(
      (response:Response)=>{
        const userData=response.json();
        this.githubData=userData;


        
      }
    )
  }


  title = 'app';
}
