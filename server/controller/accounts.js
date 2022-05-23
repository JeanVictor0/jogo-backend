const db = require('../schema/users')
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
        var {email,password,name} = req.body
        bcrypt.hash(password, 8, (err, hash) => {
            db.create({email,password:hash,name})
            .then((result) => {res.status(200); console.log(result)})
        })
        

    },
    delete(req,res){

    },
    update(req,res){

    },
    specificUpdate(req,res){

    }
}

module.exports = controller