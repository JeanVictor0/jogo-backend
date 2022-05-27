const { Router } = require('express')
const router = Router()
const login = require('./login')
const register = require('./register')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

router.use(cookieParser())
router.use(bodyParser.urlencoded({ extended: false }));           
router.use(bodyParser.json())

router.use('/login',login)
router.use('/register',register)

module.exports = router