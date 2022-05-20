const { Sequelize, INTEGER } = require('sequelize');

const sequelize = new Sequelize('users', 'root', '200604jr@senha', {
  host: 'localhost',
  dialect: mysql
});

try {
    await sequelize.authenticate()
    console.log('Banco de dados acessado')
} catch (error) {
    console.log(error)
}



module.exports = sequelize