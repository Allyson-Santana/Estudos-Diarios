import { Router } from "express";
import userControllers from "./controllers/userControllers";

const routers = Router();

routers.get('/', (req, res) => res.status(200).send("OK"));

routers.get('/users', userControllers.index);
routers.post('/users', userControllers.create);


export default routers;