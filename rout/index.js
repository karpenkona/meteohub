var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var crypto = require('crypto');

router.get('/', function (req, res) {
    res.render('index')
})

module.exports = router;