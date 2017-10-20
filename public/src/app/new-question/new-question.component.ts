import { Component, OnInit } from '@angular/core';
import { User } from "./../user"
import { Question } from "./../question"
import { Games } from "./../games"
import { DbService } from "./../db.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  question = new Question;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
  }

  //Add question
  addQuestion(){
    this.db.addQuestion(this.question)
    .then( () => {alert("question was made");this.router.navigate([""])} )
    .catch( err => {this.router.navigate([""])})
    this.question = new Question;
  }

  cancel(){
    alert("question was cancelled")
    this.router.navigate([""])
  }
}
