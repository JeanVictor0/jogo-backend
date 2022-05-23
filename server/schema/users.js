const db = require('../config/sequelize')

const users = database.define('produto', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.STRING,
        allowNull: false
    },
    email: {
        allowNull: false,
        type: db.STRING
    },  
    password: {
        allowNull: false,
        type: db.STRING
    }
})

module.exports = users