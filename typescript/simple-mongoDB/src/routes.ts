import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => res.json({ status: 200, msg: 'OK' }))
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.patch('/users', UserController.update)
routes.delete('/users', UserController.destroy)

export default routes
