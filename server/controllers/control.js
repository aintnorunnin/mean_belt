const mongoose = require('mongoose')
const Users = mongoose.model("User")
const Questions = mongoose.model("Question")
const Games = mongoose.model("Game")

const games = [{user:"brandon", score:2, percentange:.07},{user:"vidhi", score:3, percentange:.07}]
module.exports = {
  // Create and login in user
  login : function(req, res){
    let new_user = new Users(req.body)
    req.session.user = new_user
    new_user.save()
        .then(() => res.json(true))
    },

    //Retrieve all games
    getGames: function(req,res){
      Games.find({})
      .then(games => {
        res.json(games)
      })
      .catch( err => console.log("couldnt get games"))
    },

    //Retrieve all gamesProto
    getGamesProto: function(req,res){
      res.json(games)
    },

    //Retrieve all users
    getQuestions: function(req,res){
      Questions.find({})
      .then(questions => {
        res.json(questions)
      })
      .catch( err => console.log("couldnt get questions"))
    },

    //Create a new question
    addQuestion : function(req, res){
      let new_question = new Questions(req.body)
      new_question.save()
          .then(() => res.json(true))
      },

      //Logout
      logout:function(req,res){
        req.session.destroy()
        res.redirect('/')
      },
};
