const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user-model');


// POST ROUTE TO UPDATE THE DAILY MOOD
// TO BE CHECKED: ARE WE SURE WE DON T WANT TO HAVE THE MOOD OF THE DAY ON THE USER MODEL
// Check if we nned to keep new: true.
// If I push a new mood in the "history" array of mood linked to the user, I'm pushing a mood with no date (just a string not an object)
// In this case, I will have to take the 7 last items of the array, to design the graph, right?

// History is an array of object: so how to push the mood in it? 
router.put('/user/:Id/mood', (req, res) =>{
  let userId = req.params.Id;
  let {moodOfTheDay} = req.body.value;
  let date = new Date();
  // This {mood: moodOfTheDay} cna't work. I want to push the mood of the day to an array of object (the mood and the date).
  
  // CHECK THIS TOO:
  User.findByIdAndUpdate(userId, {$push: {
    mood: {date: date, mood: moodOfTheDay},
    }})

  .then((user)=>{
    res.redirect(`/moodboard/${user._id}`)
  })
  .catch((err) => {
    res.render('error', {err})
  });
}); 

// NB: as we don't render anything in the daily mood window, we don't need a get route in BE, right?

// GET ROUTE TO GET THE MOODBOARD

// First, check if we need to check the status of the user (logged in or not).
function requireLogin(req, res, next) {  // we create a middleware function, to pass it in the route.
  if (req.session.currentUser) {   // If this exists, means we are authenticated.
    next();
  } else {
    res.redirect('/login')
  }
}


// What do we need to send to this moodboard page?









module.exports = router;
