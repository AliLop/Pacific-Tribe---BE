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
 
    router.get('/user/:id/mood', (req, res) => { 
  let userId = req.params.id;
 // getting user from the session - const userId = req.user._id,
  console.log(`PROBLEMMMMMMMMM`, userId)

User.findById(userId)
  .then((user) => {
    
   let index = user.history.length - 1;
   let lastMood = user.history[index];
   res.json(lastMood);
  })
  .catch((err) => {
    res.json({ message:`error occurred ${err}`})
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
