const express = require('express');
const cors = require('cors');
const passport = require('passport';
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('config/index.js')
const chalk = require('chalk')

//may not need with mongo
//set tp pbject below
let user = {};


//passport requires serialize and deserialize
passport.serializeUser( fn: (user, cb) => {m
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
  },
  //define callback function
  function(accessToken, refreshToken, profile, cb) {
      console.log(chalk.blue(JSON.stringify(profile)));
      //copy values into user object
      user = {...profile};
  }));
  //define routes for application 
  //route to login with github
  //click button on front end here
  app.get('/auth//github'), passport.authenticate( strategy:'github'));
  app.get("/auth/github/callback", 
  passport.authenticate(('github'),
  options (req, res) => {
res.redirect('/profile');
  }));

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);
 //   User.findOrCreate({ githubId: profile.id }, function (err, user) {
 ////     return cb(err, user);
 //   });
 // } 
//  ));   