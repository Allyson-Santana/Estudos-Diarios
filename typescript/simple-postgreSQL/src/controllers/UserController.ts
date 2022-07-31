import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { IUser } from '../interfaces/user'
import * as yup from 'yup'

class UserController {
  async index (req: Request, res: Response): Promise<Response<IUser[]>> {
    const newUser = await UserService.index()
    return res.status(200).json(newUser)
  }

  async findUserId (req: Request, res: Response): Promise<Response<IUser[]>> {
    const { id } = req.params
    const newUser = await UserService.findUserId(id)
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

    const isExistUserWithEmail = await UserService.findUserEmail(user.email)
    if (isExistUserWithEmail) {
      return res.status(409).json({ message: 'E-mail already exists' })
    }

    const newUser = await UserService.store(user)
    return res.status(201).json(newUser)
  }

  async update (req: Request, res: Response): Promise<Response<IUser>> {
    const userUpdate = req.body
    const { id } = req.params

    const isExistUserWithId = await UserService.findUserId(id)
    if (!isExistUserWithId) {
      return res.status(404).json({ message: 'User not exists' })
    }

    await UserService.update(id, userUpdate)
    return res.sendStatus(204)
  }

  async destroy (req: Request, res: Response): Promise<Response<IUser>> {
    const { id } = req.params

    const isExistUserWithId = await UserService.findUserId(id)
    if (!isExistUserWithId) {
      return res.status(404).json({ message: 'User not exists' })
    }

    await UserService.destroy(id)
    return res.sendStatus(204)
  }
}

export default new UserController()
