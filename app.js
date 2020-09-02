const express = require('express');
//const exphbs = require('express-handlebars');
//const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const logger = require('./middleare/logger');


const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});


general = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

general();

var app = express();

app.use(logger);

app.get('/', (req, res) => res.send('INDEX'));

var PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));