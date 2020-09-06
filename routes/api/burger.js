const Joi = require('joi');
const { BurgerJoiSchema } = require('../../helper/joi/burger');
const express = require('express');
const router = new express.Router();
const db = require('../../models');
const sch = new BurgerJoiSchema();

router.get('/', (req, res) => {
    db.Burger.findAll({raw: true}).then(burger => {
        res.render('burger', { burger: burger });
    });
});

router.get('/all', (req, res) => {
    db.Burger.findAll({raw: true}).then(ret => {
        res.json(ret);
    });
});

router.get('/waiting', (req, res) => {
    db.Burger.findAll({
        raw: true,
        where: { Eaten: 0 },
        order: [['Create', 'ASC']]
    }).then(ret => {
        res.json(ret);
    });
});

router.get('/eaten', (req, res) => {
    db.Burger.findAll({
        raw: true,
        where: { Eaten: 1 },
        order: [['Update', 'DESC']]
    }).then(ret => {
        res.json(ret);
    });
});

router.get('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.getSingleBurger());
    if(error) {
        res.status(400).send('BurgerID Invalid');
        return;
    } else {
        db.Burger.findOne({
            raw: true,
            where: { ID: req.params.ID }
        }).then(ret => {
            if(!ret) {
                res.status(404).send('Burger Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'ID Found',
                    'Burger': ret
                };
                res.json(msg);
                return;
            }
        });
    }
});

router.post('/', (req, res) => {
    const { error } = Joi.validate(req.body, sch.postBurger());
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        db.Burger.create({
            raw: true,
            BurgerDesc: req.body.BurgerDesc,
            Eaten: req.body.Eaten
        }).then(ret => {
            const msg = {
                'msg': 'Post Successful',
                'ID': ret.dataValues.ID,
                'BurgerDesc': ret.dataValues.BurgerDesc,
                'Eaten': req.body.Eaten
            };
            res.json(msg);
            return;
        });
    }
});

router.put('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.putBurger());
    if(error) {
        res.status(400).send('BurgerID Invalid');
        return;
    } else {
        db.Burger.update(
            req.body, {
                raw: true,
                where: { ID: req.params.ID }
            }).then(ret => {
            if(!Number(ret)) {
                res.status(404).send('Update unsuccessful - No change in updated field or Record Not Found');
                return;
            } else {
                const msg = {
                    'msg': 'Burger Update Successful',
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
    db.Burger.destroy({ truncate : true, cascade: false }).then(ret => {
        res.json(`Cleared All Records ${ret}`);
    });
});

router.delete('/:ID', (req, res) => {
    const { error } = Joi.validate(req.params, sch.deleteBurger());
    if(error) {
        res.status(400).send('BurgerID Invalid');
        return;
    } else {
        db.Burger.destroy({
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