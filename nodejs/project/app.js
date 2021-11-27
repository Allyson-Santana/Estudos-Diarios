const express = require("express");

// routes
const router = require('./routers/index');

// configurations
const app = express();
app.use(express.json());

app.use('/', router);

module.exports = app;

