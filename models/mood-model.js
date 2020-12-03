const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema ({
  name: {
    type: String,
    enum: ["overwhelmed", "anxious", "calm", "positive", "enthusiastic"]
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'user' 
  }},
  {
    timestamps: true
  })

const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;

