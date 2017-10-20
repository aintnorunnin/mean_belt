const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create User Schema for
var UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
}, {timestamps: true });
//Store Schema in mongoose.model
const Users = mongoose.model("User", UserSchema)

//Create Schema for questions
var QuestionSchema = new mongoose.Schema({
  text: {type:String, required:true},
  answer: {type:String, required:true},
  fake1: {type:String, required:true},
  fake2: {type:String, required:true},
}, {timestamps: true });
//Store Schema in mongoose.model
const Questions = mongoose.model("Question", QuestionSchema)

//Create Schema for games
var GameSchema = new mongoose.Schema({
  questions:[{type:Schema.Types.ObjectId, ref:"Question"}],
  _player: {type:Schema.Types.ObjectId, ref:"User"},
  score: {type:Number},
  percentage: {type:Number},
}, {timestamps: true })

//Store Schema in mongoose.model
const Games = mongoose.model("Game", GameSchema)
