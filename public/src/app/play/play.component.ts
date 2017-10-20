import { Component, OnInit } from '@angular/core';
import { User } from "./../user"
import { Question } from "./../question"
import { Games } from "./../games"
import { DbService } from "./../db.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  questions : Array<any>;
  randomArr : Array<any>;
  question = new Question;
  game = new Games;
  result1 : string;
  result2 : string;
  result3 : string;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.game.questions=[]
    this.db.getQuestions()
    .then((questions) => {this.questions = questions;
      for(var i=0; i<3; i++){
        var random = Math.floor(Math.random()*this.questions.length)
        this.game.questions.push(this.questions[random])
      }

    })
    .catch(err => {console.log('something happened',err)})
  }

  games(question){
    console.log(this.result1)
    console.log(this.result2)
    console.log(this.result3)
    console.log(this.question)
  }
}
