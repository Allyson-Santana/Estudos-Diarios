require('dotenv').config();
const express = require('express');
const routers = require('./routers');

const server = express();
server.use(express.json());

server.use('/api', routers);
server.listen(process.env.PORT, () => console.log('Runding server...'));