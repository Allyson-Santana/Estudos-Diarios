import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ status: 200, msg: 'OK' })
})

routes.post('/users', UserController.store)

export default routes
