import { Component, OnInit } from '@angular/core';
import { User } from "./../user"
import { Question } from "./../question"
import { Games } from "./../games"
import { DbService } from "./../db.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User;
  flag = true;
  games : Array<any>

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.db.getGamesProto()
    //Calculate percentage correct for each game
    .then((games) => {this.games = games;
      for(var i=0; i<this.games.length; i++){
        this.games[i].percentage = Math.trunc((this.games[i].score / 3) *100);
      }
    })
    .catch(err => {this.router.navigate([""])})
  }

  signIn(name){
    this.db.login({name:this.user.name})
    .then(() => {this.flag = false;this.ngOnInit()})
    .catch(err => {console.log('something happened',err)})
  }

  play(){
    this.router.navigate(["/lets_play"])
  }


}
