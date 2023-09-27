const Sequelize = require('sequelize');

const sequelize = new Sequelize("testDb","root","root",{
    host : "localhost",
    dialect : 'mysql',
})

sequelize.authenticate()
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log("err connect DB");
})

sequelize.sync({force : true});

module.exports = sequelize;