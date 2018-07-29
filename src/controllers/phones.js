const express = require('express');
const router = express.Router();
const ERRORS = require('../constants/errors');

const phoneModel = require('../models/phone');

router.all('/', function (req, res) {
    phoneModel.getAll()
        .then(phones => {
            res.status(200).send(phones);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

router.all('/:id', function (req, res) {
    phoneModel.getById(req.params.id)
        .then(phone => {
            res.status(200).send(phone);
        }).catch(err => {
            res.status(400).send({
                service: 'phones',
                errorCode: ERRORS.NOT_FOUND,
            });
        });
})

module.exports = router