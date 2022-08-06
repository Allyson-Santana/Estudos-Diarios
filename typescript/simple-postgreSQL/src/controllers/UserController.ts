import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { IUser } from '../interfaces/user'
import * as yup from 'yup'
import { ApiError } from '../helpers/ApiError'

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
    if (!isValid) throw new ApiError(400, 'Schema to create user is invalidated')

    const isExistUserWithEmail = await UserService.findUserEmail(user.email)
    if (isExistUserWithEmail) throw new ApiError(409, 'E-mail already exists')

    const newUser = await UserService.store(user)
    return res.status(201).json(newUser)
  }

  async update (req: Request, res: Response): Promise<Response<IUser>> {
    const userUpdate = req.body
    const { id } = req.params

    const isExistUserWithEmail = await UserService.findUserEmail(userUpdate.email)
    if (isExistUserWithEmail) throw new ApiError(409, 'E-mail already exists')

    const isExistUserWithId = await UserService.findUserId(id)
    if (!isExistUserWithId) throw new ApiError(404, 'User not exists')

    await UserService.update(id, userUpdate)
    return res.sendStatus(204)
  }

  async destroy (req: Request, res: Response): Promise<Response<IUser>> {
    const { id } = req.params

    const isExistUserWithId = await UserService.findUserId(id)
    if (!isExistUserWithId) throw new ApiError(404, 'User not exists')

    await UserService.destroy(id)
    return res.sendStatus(204)
  }
}

export default new UserController()
