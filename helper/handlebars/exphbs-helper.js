module.exports = {

    'totaleaten': 0,
    'falsyeaten': 0,
    'totalwait': 0,
    'falsywait': 0,

    falsyresetwait: () => {
        this.falsywait = 0;
        return;
    },

    totalresetwait: () => {
        this.totalwait = 0;
        return;
    },

    falsycountwait: () => {
        this.falsywait += 1;
        return;
    },

    totalcountwait: () => {
        this.totalwait += 1;
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
        return;
    },

    totalreseteaten: () => {
        this.totaleaten = 0;
        return;
    },

    falsycounteaten: () => {
        this.falsyeaten += 1;
        return;
    },

    totalcounteaten: () => {
        this.totaleaten += 1;
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
