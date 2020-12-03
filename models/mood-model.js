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
},
  rating: {
    type: Number,
    enum: [2, 4, 6, 8, 10],
    default: 6
},
{
  timestamps: true
})


const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;

