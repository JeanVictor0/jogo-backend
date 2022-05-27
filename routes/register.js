const { Router } = require('express')
const router = Router()
const controller = require('../controller/accounts')


router.get('/', (req,res,next) => {
    res.render('register')
})

router.post('/',controller.register)

module.exports = router