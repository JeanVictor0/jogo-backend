const db = require('../config/sequelize')
const sequelize = require('sequelize')

const users = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        allowNull: false,
        type: sequelize.STRING
    },  
    password: {
        type: sequelize.STRING
    },
    idRank: {
        type: sequelize.INTEGER,
        references: 'ranks',
        referencesKey: 'id'
    },
    useRoom: {
        type: sequelize.INTEGER,
        references: 'rooms',
        referencesKey: 'id'
    },
})

module.exports = users