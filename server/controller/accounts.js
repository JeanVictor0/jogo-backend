const db = require('../config/sequelize')
const bcrypt = require('bcrypt')

const controller = {
    login(req,res){
        var {email, password} = req.body
        var hash = db

        bcrypt.compare(password, hash, (err, result) => {
            res.status(200)
        })

    },
    register(req,res){

    },
    delete(req,res){

    },
    update(req,res){

    },
    specificUpdate(req,res){

    }
}

module.exports = controller