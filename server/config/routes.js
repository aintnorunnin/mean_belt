const mongoose = require('mongoose')
const user = require("../controllers/control.js")
const path = require('path')

module.exports = function(app){
  // //Register new user
  // app.post('/register', user.register);

  //Login user
  app.post('/login', user.login);

  //Get all gamesProto
  app.get('/getGames', user.getGames);

  //Get all users
  app.get('/getGamesProto', user.getGamesProto);

  //Get all questions
  app.get('/getQuestions', user.getQuestions);

  //create a new question
  app.post('/addQuestion', user.addQuestion);

  //Logout
  app.get('/logout', user.logout);

  // //Get bikes from user
  // app.get('/getbikes', user.get);
  //
  // //Check to see if user is logged in
  // app.get('/logged', user.logged);
  //


  // //Update bike
  // app.put('/update', user.update);
  //
  // //Delete bike
  // app.delete('/delete/:id', user.delete);
  //
  // //Logout
  // app.get('/logout', user.logout);
  //
  // //get all bikes
  // app.get('/get_all', user.get_all);
  //
  // //display user
  // app.get('/display/:id', user.display);

  app.all("*", (request,response,next) => {
    response.sendFile(path.resolve("./public/dist/index.html"))
  });
};
