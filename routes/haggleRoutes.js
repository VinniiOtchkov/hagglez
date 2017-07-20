var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.post('/update', function(req, res, next) {
    knex('haggles')
    .update(req.body)
    .where('id', req.body.id)
    .then(function(data) {
        res.send(data);
    });
});

router.post('/', function(req, res, next) {
    knex('haggles')
    .insert(req.body)
    .then(function(data) {
        res.send(data);
    });
});

router.post('/:user_id', function(req, res, next) {
    knex('haggles')
    .count()
    .where('seller_id', req.params.user_id)
    .then(function(data) {
        res.send(data);
    });
});

module.exports = router;