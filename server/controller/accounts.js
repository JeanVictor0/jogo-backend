const db = require('../schema/users')
const bcrypt = require('bcrypt')
const { literal } = require("sequelize");

const controller = {
    async login(req,res){
        var {email, password} = req.body
        var {dataValues} = await db.findOne({where: {email}})
        bcrypt.compare(password,dataValues.password, (err,resultado) => {
            if (resultado) {
                return res.status(200).send("Senha certa")
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