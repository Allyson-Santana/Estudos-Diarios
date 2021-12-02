const express = require("express");
const mustache = require("mustache-express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");

const router = require('./routers/index');// routes
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

// middleware
/**
 * Processo de login: 
 *  - usuário faz a requisição 
 *  - validar os campos // middleware
 *  - autorizar o usuário // middleware
 *  - Resposta (controllers)
 *     - Resposta positiva
 *     - Resposta negativa
 */

// configurations
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use(cookieParser(process.env.SECRET_KEY));
app.use(session({
    secret: process.env.SECRET_KEY, // minha chave secreta
    resave: false, // Não deixar que destrua a session/altere
    saveUninitialized: false // sessisons vazias são deletadas
}));
app.use(flash());

app.use( (req, res, next) => {
    res.locals.helpers = helpers; // importa aas variaveis global do arquivo helpers.js
    res.locals.teste = '123' // criar variaveis global diretamente aqui
    res.locals.flashes = req.flash(); // save todas as mensagens globalmente para serem acessadas
    next();
}); 

app.use('/', router);
app.use(errorHandler.notFound);

app.engine('mst', mustache(__dirname + '/views/partials', '.mst')); // mst é a sigla de mustache
app.set('view engine', "mst"); 
app.set('views', __dirname + '/views'); // __dirname aponta para o diretorio raiz


module.exports = app;

