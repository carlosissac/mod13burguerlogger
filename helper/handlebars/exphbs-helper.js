module.exports = {

    'totaleaten': 0,
    'falsyeaten': 0,
    'totalwait': 0,
    'falsywait': 0,

    falsyresetwait: () => {
        this.falsywait = 0;
        console.log(`FalsyWait ${this.falsywait}`);
        return;
    },

    totalresetwait: () => {
        this.totalwait = 0;
        console.log(`TotalWait ${this.totalwait}`);
        return;
    },

    falsycountwait: () => {
        this.falsywait += 1;
        console.log(`FalsyWait ${this.falsywait}`);
        return;
    },

    totalcountwait: () => {
        this.totalwait += 1;
        console.log(`TotalWait ${this.totalwait}`);
        return;
    },

    fullfalseywait: options => {
        if(Number(this.falsywait) === Number(this.totalwait)) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    falsyreseteaten: () => {
        this.falsyeaten = 0;
        //console.log(`FalsyEaten ${this.falsyeaten}`);
        return;
    },

    totalreseteaten: () => {
        this.totaleaten = 0;
        //console.log(`TotalEaten ${this.totaleaten}`);
        return;
    },

    falsycounteaten: () => {
        this.falsyeaten += 1;
        //console.log(`FalsyEaten ${this.falsyeaten}`);
        return;
    },

    totalcounteaten: () => {
        this.totaleaten += 1;
        //console.log(`TotalEaten ${this.totaleaten}`);
        return;
    },

    fullfalseyeaten: options => {
        if(Number(this.falsyeaten) === Number(this.totaleaten)) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
};
