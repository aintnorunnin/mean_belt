import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { User } from "./user";
import { Question } from "./question";
import { Games } from "./games";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';


@Injectable()
export class DbService {
  constructor(private http: Http) { }

  //Retrieve all games
  getGames(){
    return this.http.get('/getGames').map( data => data.json()).toPromise();
  }

  //Retrieve all games
  getGamesProto(){
    return this.http.get('/getGamesProto').map( data => data.json()).toPromise();
  }

  //Retrieve all questions
  getQuestions(){
    return this.http.get('/getQuestions').map( data => data.json()).toPromise();
  }

  //Create and Login in one user
  login(user){
    return this.http.post('/login', user).map( data => data.json()).toPromise();
  }

  addQuestion(question){
    return this.http.post('/addQuestion',question).map( data => data.json()).toPromise();
  }

}
