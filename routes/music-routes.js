const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_SPOTIFY_ID,
  clientSecret: process.env.CLIENT_SPOTIFY_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));


  // Access the OVERWHELMED playlist from S account.
  router.get('/music', (req, res) => {
    //let playlist-uri = req.param.URI 
     spotifyApi.getPlaylist(playlist-uri, { limit : 3})
      .then(function(data) {
        console.log('Some information about this overwhelmed-music playlist', data.body);
        let overwhelmedResults = data.body;
        res.json(overwhelmedResults);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
}) 

  // Access the ANXIOUS playlist from S account.
router.get('/anxious-music', (req, res) => {
  spotifyApi.getPlaylist('0NspLxJgEk9Uop7K4uURjd', { limit : 3})
   .then(function(data) {
     console.log('Some information about this anxious-music playlist', data.body);
     let anxiousResults = data.body;
     res.json(anxiousResults);
   }, function(err) {
     console.log('Something went wrong!', err);
   });
}) 

// Access the CALM playlist from S account.
router.get('/calm-music', (req, res) => {
  spotifyApi.getPlaylist('4SlG7b0D95WD4DHqF672fx', { limit : 3})
   .then(function(data) {
     console.log('Some information about this calm-music playlist', data.body);
     let calmResults = data.body;
     res.json(calmResults);
   }, function(err) {
     console.log('Something went wrong!', err);
   });
}) 


// Access the POSITIVE playlist from S account.
router.get('/positive-music', (req, res) => {
  spotifyApi.getPlaylist('449ZiG4lot1KDWuBcxnm4Y', { limit : 3})
   .then(function(data) {
     console.log('Some information about this positive-music playlist', data.body);
     let positiveResults = data.body;
     res.json(positiveResults);
   }, function(err) {
     console.log('Something went wrong!', err);
   });
}) 

// Access the ENTHUSIASTIC playlist from S account.
router.get('/enthusiastic-music', (req, res) => {
  spotifyApi.getPlaylist('79b4c6BHGyHRrZhbqFYw4p', { limit : 3})
   .then(function(data) {
     console.log('Some information about this enthusiastic-music playlist', data.body);
     let enthusiasticResults = data.body;
     res.json(enthusiasticResults);
   }, function(err) {
     console.log('Something went wrong!', err);
   });
}) 

module.exports = router;
