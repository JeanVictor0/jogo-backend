const { Router } = require('express')
const router = Router()
const controller = require('../controller/accounts')

router.get('/', (req,res,next) => {
    res.render('login')
})

router.post('/',controller.login)

module.exports = router