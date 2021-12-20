const express = require('express');

const router = require('./routers');

const app = express();
const port = 3000;

app.set('views', './src/templates');
app.set('view engine', 'pug');

app.use('/page', router);
app.listen(port, () => console.log(`App runding in port: ${port}`));
