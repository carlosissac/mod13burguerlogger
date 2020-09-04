const Joi = require('joi');

const BurguerJoiSchema = function() {
    this.ID = 'BurguerJoiSchema';
};

BurguerJoiSchema.prototype.getID = function() {
    return this.type;
};

BurguerJoiSchema.prototype.getSingleBurguer = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

BurguerJoiSchema.prototype.postBurguer = function() {
    const schema = {
        BurguerDesc: Joi.string().required(),
        Eaten: Joi.string().required()
    };
    return schema;
};

BurguerJoiSchema.prototype.putBurguer = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

BurguerJoiSchema.prototype.deleteBurguer = function() {
    const schema = {
        ID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { BurguerJoiSchema };