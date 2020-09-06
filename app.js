const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const logger = require('./middleware/logger');
const burger = require('./routes/api/burger');

var app = express();

let PORT = process.env.PORT || 3000;

var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/burger', burger);
//app.use('/public/pages', pages);

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