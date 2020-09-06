const Joi = require('joi');

const BurgerJoiSchema = function() {
    this.ID = 'BurgerJoiSchema';
};

BurgerJoiSchema.prototype.getID = function() {
    return this.type;
};

BurgerJoiSchema.prototype.getSingleBurger = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

BurgerJoiSchema.prototype.postBurger = function() {
    const schema = {
        BurgerDesc: Joi.string().required(),
        Eaten: Joi.string().required()
    };
    return schema;
};

BurgerJoiSchema.prototype.putBurger = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

BurgerJoiSchema.prototype.deleteBurger = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { BurgerJoiSchema };