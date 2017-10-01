var express = require('express');
var consign = requires('consign');
var body_parser = require('body-parser');
var express_validator = require('express-validator');
var express_session = require('express-session');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(body_parser.urlencoded({extended: true}));
app.use(express_validator());
app.use(express_validator({
    secret: 'Eeda848kdj633',
    resave: false,
    saveUnitialized: false
}));

consign()
    .include('app/router')
    .then('app/models')
    .app('app/controllers')
    .app('config/dbConnections.js')
    .into(app);

module.exports = app;