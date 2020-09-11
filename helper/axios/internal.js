const axios = require('axios');

const Internal = function() {
    this.ID = 'Internal';
};

Internal.prototype.mainPageArray = async function(protocol, host, originalurl) {
    let array = [];
    let arraylen = 0;
    let i = 0;
    const addr = `${protocol}://${host}${originalurl}`;
    console.log(addr);
    const wait = await axios.get(`${addr}api/burger/waiting`);
    const eaten = await axios.get(`${addr}api/burger/eaten`);

    const waitlen = Number(wait.data.length);
    const eatenlen = Number(eaten.data.length);

    if (waitlen > eatenlen) {
        arraylen = waitlen;
    } else if (waitlen < eatenlen) {
        arraylen = eatenlen;
    } else if (waitlen === eatenlen) {
        arraylen = waitlen;
    } else {
        console.log('Internal mainPageArra NA');
    }

    while(i<arraylen) {
        let newEntry = {
            'ID1': '',
            'BurgerDesc1': '',
            'Eaten1': '',
            'ID2': '',
            'BurgerDesc2': '',
            'Eaten2': ''
        };
        if (i < waitlen) {
            newEntry.ID1 = wait.data[i].ID;
            newEntry.BurgerDesc1 = wait.data[i].BurgerDesc;
            newEntry.Eaten1 = wait.data[i].Eaten;
        }
        if (i < eatenlen) {
            newEntry.ID2 = eaten.data[i].ID;
            newEntry.BurgerDesc2 = eaten.data[i].BurgerDesc;
            newEntry.Eaten2 = eaten.data[i].Eaten;
        }
        array.push(newEntry);
        i++;
    }

    return array;
};

module.exports = { Internal };