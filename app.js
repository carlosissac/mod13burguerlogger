const express = require('express');
//const exphbs = require('express-handlebars');
//const path = require('path');
const logger = require('./middleware/logger');
var db = require('./models');

var app = express();
let PORT = process.env.PORT || 3000;

app.use(logger);

app.get('/', (req, res) => res.send('INDEX'));

db
    .sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
    .then(() => {
        db
            .sequelize.sync({ force: false })//false
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`App listening on: http://localhost:${PORT}`);
                });
            });
    });