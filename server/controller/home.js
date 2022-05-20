const { post } = require("../routes/home")

const controller = {
    get(req,res){
        res.send('Ola')
    }
}

module.exports = controller