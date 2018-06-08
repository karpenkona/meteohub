//var https = require('http');
//var https = require('http-https');
var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload/img/')
    },
    filename: function(req, file, callback) {
        var a = file.originalname.split('.')[0];
        callback(null, a + '-' + Date.now() + path.extname(file.originalname))
    },
    limits: {
        fieldNameSize: 100,
        files: 4,
        fields: 10}
});
var app = express();
var config = require('./config/config');
var index=require('./rout/index');
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('./upload'));
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false, uploadDir: './upload' }));
app.use(cookieParser());

app.use('/', index);

app.listen(config.port);