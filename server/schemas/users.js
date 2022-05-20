const db = require('../config/sequelize')

var users = db.define('users', {
    name: String,
    email: String,
    password: String,
    idRank: Number,
    useRooom: Number
  })
   
db.sync().then(()=> {

})

/*
const Child = sequelize.define('Child', {
    age: Sequelize.STRING,
    fatherId: {
       type: Sequelize.INTEGER,
       references: {
          model: 'fathers', // 'fathers' refers to table name
          key: 'id', // 'id' refers to column name in fathers table
       }
    }
});

*/