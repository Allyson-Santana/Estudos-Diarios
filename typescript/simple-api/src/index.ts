import express, { Request, Response } from 'express';

const app = express();

app.get('/', function(req: Request, res: Response) {
    return res.sendStatus(200).json({
        status: "OK",
        msg: "Router /"
    })
});


app.listen(3333, 'localhost', function() {
    console.log("Server runding in localhost:3333");
})