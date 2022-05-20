const {Router} = require('express')
const router = Router()
const controller = require('../controller/accounts')

router.get('/login', controller.login)

router.post('/register', controller.register)

router.delete('/exclude', controller.delete)

router.update('/info-update',controller.update)

router.put('/info-update',controller.specificUpdate)