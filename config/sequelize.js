const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('multiGames', 'root', '200604jr@senha', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
    sequelize.authenticate()
} catch (error) {
    console.log(error)
}



module.exports = sequelize