const Joi = require('joi');
const { BurguerJoiSchema } = require('../../helper/joi/burguer');
const express = require('express');
const router = new express.Router();
const db = require('../../models');
const sch = new BurguerJoiSchema();

router.get('/', (req, res) => {
    db.Burguer.findAll({raw: true}).then(ret => {
        res.json(ret);
    });
});

router.get('/waiting', (req, res) => {
    db.Burguer.findAll({
        raw: true,
        where: { Eaten: 0 },
        order: [['Create', 'ASC']]
    }).then(ret => {
        res.json(ret);
    });
});

router.get('/eaten', (req, res) => {
    db.Burguer.findAll({
        raw: true,
        where: { Eaten: 1 },
        order: [['Update', 'DESC']]
    }).then(ret => {
        res.json(ret);
    });
});

router.get('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.getSingleBurguer());
    if(error) {
        res.status(400).send('BurguerID Invalid');
        return;
    } else {
        db.Burguer.findOne({
            raw: true,
            where: { ID: req.params.ID }
        }).then(ret => {
            if(!ret) {
                res.status(404).send('Burguer Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'ID Found',
                    'Burguer': ret
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postBurguer());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.Burguer.create({
            raw: true,
            BurguerDesc: req.body.BurguerDesc,
            Eaten: req.body.Eaten
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'ID': ret.dataValues.ID,
                'BurguerDesc': ret.dataValues.BurguerDesc,
                'Eaten': req.body.Eaten
            };
            res.json(msg);
            return;
        });
    }
});

router.put('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putBurguer());
    if(error) {
        res.status(400).send('BurguerID Invalid');
        return;
    } else {
        db.Burguer.update(
            req.body, {
                raw: true,
                where: { ID: req.params.ID }
            }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Burguer Update Successful',
                    'ID': req.params.ID,
                    'body': req.body
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.delete('/drop', (req, res) => {
    db.Burguer.destroy({ truncate : true, cascade: false }).then(ret => {
        res.json(`Cleared All Records ${ret}`);
    });
});

router.delete('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.deleteBurguer());
    if(error) {
        res.status(400).send('BurguerID Invalid');
        return;
    } else {
        db.Burguer.destroy({
            where: { ID: req.params.ID }
        }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Delete unsuccessful - Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Delete Successful',
                    'ID': req.params.ID
                };
                res.json(msg);
                return;
            }
        });
    }
});

module.exports = router;