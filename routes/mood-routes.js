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
   console.log("Here is the updated user with one more item in history array:", user)
  })
  .catch((err) => {
    res.render('error', {err})
  });
});


// RETRIEVE THE MOOD OF THE DAY CHOSEN BY ONE USER
router.get('/user/:Id/mood', (req, res) =>{
  let userId = req.params.Id;
  console.log(`PROBLEMMMMMMMMM`, userId)
User.findById(userId)
.then((resultFromId) => {
  console.log(`resultFromId ${resultFromId}`);
})
  //.then((user) => {
  //  console.log("The user for who we want to find the mood", user)
 
   //let index = user.history.length;
   //let LastMood = user.history[index];
 //  return Mood.find({name: firstMood})
 // })
  //.then ((mood) => {
 //  console.log(`HERE IS THE MOOD OF THE DAY`, mood)
 //    res.json(mood)
 //  return
  //  })
  .catch((err) => {
    res.render('error', {err})
  });
}); 


// RETRIEVE THE MOOD ATTRIBUTES FOR A SPECIFIC MOOD
router.get('/moods/:mood', (req, res) =>{
  let moodOfTheDay = req.params.mood
  console.log(`THIS IS THE MOOD OF THE DAY`, moodOfTheDay)
  Mood.find({name: moodOfTheDay})
  .then((mood) => {
      res.json(mood)
    })
  .catch((err) => {
    res.json(err)
  });
}); 



module.exports = router;
