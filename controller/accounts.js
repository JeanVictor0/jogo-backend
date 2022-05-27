const db = require('../schema/users')
const bcrypt = require('bcrypt')
const cache = require('../config/redis')
const { literal } = require("sequelize");
var crypto = require('crypto');

const controller = {
    async login(req,res){
        var {email, password} = req.body
        var {dataValues} = await db.findOne({where: {email}})
        bcrypt.compare(password,dataValues.password, (err,resultado) => {
            if (resultado) {
                var hash = crypto.createHash('md5').update(email+password+Date.now()).digest('hex');
                cache.set(hash,dataValues.id, 360000)
                return res.status(200).cookie('userCookie',hash, {maxAge: 360000}).send("Ok")
            } else {
                return res.status(400).send("Senha errada")
            }
        })


    },
    register(req,res){
        var {email,password,name} = req.body
        bcrypt.hash(password, 8, (err, hash) => {
            db.create({email,password:hash,name})
            .then(() => {return res.status(200).send("Logado com sucesso")})
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