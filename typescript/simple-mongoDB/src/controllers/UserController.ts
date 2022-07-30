import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    await User.updateOne({
      _id: req.body._id
    }, {
      $set: {
        ...req.body.update
      }
    })

    return res.sendStatus(200)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await User.deleteOne({
      _id: req.body._id
    })

    return res.sendStatus(200)
  }
}

export default new UserController()
