const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {
    type: String,
    required: true,
  },
  password: String,
  email: String,
  googleId: String,
  photo: {
    type: String,
    default: 'https://res.cloudinary.com/dvrlwaki5/image/upload/v1605784547/user-default-pic_wcwdq6.png'
}
},
{
  timestamps: true
})


const User = mongoose.model('User', userSchema);
module.exports = User;