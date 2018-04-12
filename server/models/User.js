const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const Schema = mongoose.Schema

let userSchema = new Schema ({
  email: String,
  password: String
},{
  timestamps: true
})

let User = mongoose.model('User', userSchema)

userSchema.pre('save', function(next) {
  let hash = bcrypt.hashSync(this.password, saltRounds)
  this.password = hash
  next()
})

module.exports = User
