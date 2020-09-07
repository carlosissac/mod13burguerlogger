const express = require('express');
//const path = require('path');
const app = express();
//const db = require('../../models');


app.get('/', (req, res) => {

    const array = [
        {'ID1': null, 'ID2': 777 },
        {'ID1': 999, 'ID2': null },
        {'ID1': null, 'ID2': 333 },
        {'ID1': 222, 'ID2': null },
        {'ID1': null, 'ID2': 555 }
    ];

    /*const array = [
        {'ID1': 777, 'ID2': null },
        {'ID1': 999, 'ID2': null },
        {'ID1': 333, 'ID2': null },
        {'ID1': 222, 'ID2': null },
        {'ID1': 555, 'ID2': null }
    ];*/

    /*const array = [
        {'ID1': null, 'ID2': 777 },
        {'ID1': null, 'ID2': 999 },
        {'ID1': null, 'ID2': 333 },
        {'ID1': null, 'ID2': 222 },
        {'ID1': null, 'ID2': 555 }
    ];*/

    res.render('burger', { array });
});

app.get('*', (req, res) => {
    res.render('notfound');
});

module.exports = app;