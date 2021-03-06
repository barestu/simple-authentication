const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const key = process.env.KEY 

module.exports = {
  register: function(req, res) {
    let newUser = new User ({
      email: req.body.email,
      password: req.body.password
    })

    newUser.save()
    .then(success => {
      res.status(201).send({
        message: 'Register user success',
        data: newUser
      })
    })
    .catch(err => {
      res.status(400).send({
        message: 'Register user failed',
        detail: err.message
      })
    })
  },

  login: function(req, res) {
    User.findOne({
      email: req.body.email
    })
    .then(user => {
      let checkLogin = bcrypt.compareSync(req.body.password, user.password)

      if (checkLogin == true) {
        let token = jwt.sign({
          email: user.email
        }, key)
  
        res.status(200).send({
          message: 'Login success',
          token: token
        })
      } else {
        res.status(400).send({
          message: 'Login failed',
          detail: err.message
        })
      }
    })
    .catch(err => {
      res.status(400).send({
        message: 'Login failed',
        detail: err.message
      })
    })
  }
}



