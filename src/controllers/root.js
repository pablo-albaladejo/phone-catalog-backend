
const express = require('express');
const router = express.Router();

const ERRORS = require('../constants/errors');
const pjson = require('../../package.json');

//Default endpoint
router.get('/', function (req, res) {
    res.send({
        'name': pjson.name,
        'version': pjson.version,
        'descripton': pjson.description,
        'author': pjson.author
    });
})

//invalid route
router.use(function (req, res) {
    res.status(400).send({
        service: 'phones',
        errorCode: ERRORS.INVALID_REQUEST,
    });
})

module.exports = router
