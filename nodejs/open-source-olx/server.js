require('dotenv').config();

const { DATABASE, PORT } = process.env;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./src/routers');

/**
 * Connection with mongodb
 */
mongoose.connect(DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => console.log(`Error: ${error}`));

/**
 * Connection with server
 */
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(fileUpload());

server.use(express.static(__dirname + '/public'));

server.use('/olx/api', router);
server.listen(process.env.PORT, () => {
    console.log(`Runding server in http://localhost:${PORT}`);
    console.log('Press CTRL+C to stop it');
});
    