const sequelize = require('../connectDB')
const {DataTypes} = require('sequelize');

const User = sequelize.define('User',{
    name : {
        type : DataTypes.STRING
    },
    location : {
        type : DataTypes.STRING
    },
    followers : {
        type : DataTypes.STRING
    },
    url : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
    },
    connection :{
        type : DataTypes.STRING
    },
    bioLine :{
        type : DataTypes.STRING
    },
    about : {
        type : DataTypes.STRING(5000)
    }
});

module.exports = User;