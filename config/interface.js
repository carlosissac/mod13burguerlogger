//'use strict';
/*const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV;
const tarenv = require(__dirname + '/direction.json');
const dev = Boolean(tarenv.dev.enabled);
const prod = Boolean(tarenv.prod.enabled);
var db = {};*/



/*let sequelize = '';

const dev = true;
const prod = false;
console.log(`${process.env.DATABASE},${process.env.USERNAME},${process.env.PASSWORD},${process.env.HOST}`);*/

//DEV ENV ENABLED
/*if(dev && !prod) {
    sequelize = new Sequelize(
        process.env.JAWSDB_AQUA_DATABASE,
        process.env.JAWSDB_AQUA_USERNAME,
        process.env.JAWSDB_AQUA_PASSWORD,
        {
            host: process.env.JAWSDB_AQUA_HOST,
            dialect: 'mysql'
        });
//PROD ENV ENABLED
} else if (!dev && prod) {
    sequelize = new Sequelize(
        process.env.JAWSDB_DATABASE,
        process.env.JAWSDB_USERNAME,
        process.env.JAWSDB_PASSWORD,
        {
            host: process.env.JAWSDB_HOST,
            dialect: 'mysql'
        });

} else {
    console.log('Interface.js NA');
}*/

//sequelize.authenticate().then(() => console.log('DB connected')).catch(err => console.log(`error ${err}`));

/*config.host = process.env.HOST;
config.database = process.env.DATABASE;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.SQLPASS, config);

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;*/

//module.exports = db;