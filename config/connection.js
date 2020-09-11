'use strict';
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(`${process.env.DATABASE}, ${process.env.USERNAME}, ${process.env.PASSWORD}, ${process.env.HOST}`);

module.exports = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});


