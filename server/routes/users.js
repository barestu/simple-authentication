const router = require('express').Router()
const { register, login } = require('../controllers/usersController')
const { auth } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)

module.exports = router