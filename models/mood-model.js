const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema ({
  name: {
    type: String,
    enum: ["overwhelmed", "anxious", "calm", "positive", "enthusiastic"]
  },
  spotifyURI: {
    type: String,
  },
  sentences: [],
  meditationURL: [],
  yogaURL: [],
  inspirationURL: [],
  coachingURL: [],
},
{
  timestamps: true
})


const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;

