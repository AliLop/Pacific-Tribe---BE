const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user-model');
const Mood = require('../models/mood-model');



// POST ROUTE TO UPDATE THE DAILY MOOD
router.put('/user/:Id/mood', (req, res) =>{
  let userId = req.params.Id;
  let moodOfTheDay = req.body.moodOfTheDay;
  
  User.findByIdAndUpdate(userId, {$push: {
    history: moodOfTheDay,
    }}, {new: true})
  .then((user)=>{
   console.log(user)
  })
  .catch((err) => {
    res.render('error', {err})
  });
});


// RETRIEVE THE MOOD OF THE DAY TO SET THE STATE OF APP
router.get('/user/:Id/mood', (req, res) =>{
  let userId = req.params.Id;

  User.findById(userId)
  .then((user) => {
    let index = user.history.length;
    let MoodOfTheDay = user.history[index];
    return Mood.find({name: MoodOfTheDay})
  })
  .then ((mood) => {
      res.json(mood)
    })
  .catch((err) => {
    res.render('error', {err})
  });
}); 


// RETRIEVE THE MOOD ATTRIBUTES FOR A SPECIFIC MOOD
router.get('/moods/:mood', (req, res) =>{
  let moodOfTheDay = req.params.mood

  Mood.find({name: {moodOfTheDay}})
  .then ((mood) => {
      res.json(mood)
    })
  .catch((err) => {
    res.render('error', {err})
  });
}); 



module.exports = router;
