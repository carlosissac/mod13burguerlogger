const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(`${process.env.DATABASE}`, `${process.env.USERNAME}`, `${process.env.PASSWORD}`, {
    host: process.env.HOST,
    dialect: 'mysql'
});


