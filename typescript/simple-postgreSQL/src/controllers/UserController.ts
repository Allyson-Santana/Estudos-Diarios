import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { IUser } from '../interfaces/User'

class UserController {
  async store (req: Request, res: Response): Promise<Response<IUser>> {
    const user = req.body

    const newUser = await UserService.store(user)
    return res.json(newUser)
  }
}

export default new UserController()
