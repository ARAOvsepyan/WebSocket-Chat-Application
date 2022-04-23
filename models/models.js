const sequelize = require('../db')
const {DataTypes} = require('sequelize')    

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {Message}