import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => res.json({ status: 200, msg: 'OK' }))

export default routes
