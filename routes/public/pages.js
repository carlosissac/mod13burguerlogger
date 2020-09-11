const express = require('express');
const app = express();
const { Internal } = require('../../helper/axios/internal');

app.get('/', async function (req, res) {
    const internal = new Internal();
    let array = await internal.mainPageArray(req.protocol,req.get('host'),req.originalUrl);
    res.render('burger', { array });
});

app.get('*', function (req, res) {
    res.render('notfound');
});

module.exports = app;