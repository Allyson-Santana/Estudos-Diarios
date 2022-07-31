import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { IUser } from '../interfaces/user'
import * as yup from 'yup'

class UserController {
  async index (req: Request, res: Response): Promise<Response<IUser[]>> {
    const newUser = await UserService.index()
    return res.status(200).json(newUser)
  }

  async store (req: Request, res: Response): Promise<Response<IUser>> {
    const { name, email, password } = req.body
    const user = { name, email, password }

    const schema = yup.object().required().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required()
    })

    const isValid = await schema.isValid(user)

    if (!isValid) {
      return res.status(400).json({ message: 'Schema to create user is invalidated' })
    }

    const newUser = await UserService.store(user)
    return res.status(201).json(newUser)
  }
}

export default new UserController()
