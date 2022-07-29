import express, { Request, Response } from 'express';
import cors from 'cors';

import routers from './routers';
const app = express();

app.use(cors());
app.use(routers);

app.listen(3333, 'localhost', function() {
    console.log("Server runding in localhost:3333");
})
