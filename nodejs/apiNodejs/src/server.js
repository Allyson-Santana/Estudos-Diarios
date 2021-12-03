require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routers = require('./routers');

const server = express();
//server.use(express.json());
server.use(cors());
server.use(bodyParser.urlencoded({extends: false}));

server.use('/api', routers);
server.listen(process.env.PORT, () => console.log("Runding server..."));


