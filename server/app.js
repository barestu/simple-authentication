const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = 3000

const userRoutes = require('./routes/users')

mongoose.connect(`mongodb://localhost/user-auth`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to database...')
})

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

app.use('/user', userRoutes)

app.listen(port, function() {
  console.log('Listening on port', port)
})