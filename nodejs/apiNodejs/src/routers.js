const express = require('express');
const routers = express.Router();

const controller = require('./controllers/controller');

routers.get('/ping', (req, res) => res.send({
    status: 'ok'
}));

routers.get('/notes', controller.findAll);
routers.get('/note/:id', controller.find);
routers.post('/note', controller.create);
routers.put('/note/:id', controller.update);
routers.get('/note/:id', controller.destroy);

module.exports = routers;