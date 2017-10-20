import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DbService } from "./db.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeltPipe } from './belt.pipe';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { NewQuestionComponent } from './new-question/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    BeltPipe,
    HomeComponent,
    PlayComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
