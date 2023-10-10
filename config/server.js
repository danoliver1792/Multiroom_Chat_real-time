// arquivo com as configuracoes do nosso servidor

// importando os modulos
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// iniciando o objeto do express
var app = express();

// configurando o EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurando o middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator.body());

// efetua o autoload das rotas, dos models e controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exportando o objeto app
module.exports = app;
