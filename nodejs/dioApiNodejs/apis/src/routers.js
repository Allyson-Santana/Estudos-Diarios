const express = require('express');
const routers = express.Router();

const controller = require('./controllers/controller');

routers.get('/searchAll', controller.findAll);

module.exports = routers;