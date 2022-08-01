import { Request, Response } from 'express'
import UserService from '../services/UserService'
import * as yup from 'yup'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await UserService.index()
    return res.json(users)
  }

  public async find (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = await UserService.findById(id)
    return res.json(user)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email } = req.body
    const user = { firstName, lastName, email }

    const schemas = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required()
    })

    const isCheckedSchemas = await schemas.isValid(user)
    if (!isCheckedSchemas) {
      return res.status(400).json({ statusCode: 400, message: 'Schema to create user is invalideted' })
    }

    const isExistUserWithEmail = await UserService.findByEmail(user.email)
    if (isExistUserWithEmail) {
      return res.status(409).json({ statusCode: 409, message: 'E-mail already exists' })
    }

    const newUser = await UserService.store(user)
    return res.status(201).json(newUser)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { firstName, lastName, email } = req.body
    const userUpdate = { firstName, lastName, email }

    const isExistUser = await UserService.findById(id)
    if (!isExistUser) {
      return res.status(400).json({ statusCode: 400, message: 'User not exists' })
    }

    const isExistUserWithEmail = await UserService.findByEmail(userUpdate.email)
    if (isExistUserWithEmail) {
      return res.status(409).json({ statusCode: 409, message: 'E-mail already exists' })
    }

    await UserService.update(id, userUpdate)
    return res.sendStatus(204)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const isExistUser = await UserService.findById(id)
    if (!isExistUser) {
      return res.status(400).json({ statusCode: 400, message: 'User not exists' })
    }

    await UserService.destroy(id)
    return res.sendStatus(204)
  }
}

export default new UserController()
