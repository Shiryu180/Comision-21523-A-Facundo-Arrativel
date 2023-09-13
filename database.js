const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('forodb', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}