const express = require('express');
//const exphbs = require('express-handlebars');
//const path = require('path');
const logger = require('./middleware/logger');
const burguer = require('./routes/api/burguer');

var app = express();

let PORT = process.env.PORT || 3000;

var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use('/api/burguer', burguer);

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