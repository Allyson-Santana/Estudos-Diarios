import { NextFunction, Request, Response } from 'express'
import UserService from '../services/UserService'
import * as yup from 'yup'
import { ApiError } from '../helpers/ApiError'

class UserController {
  public async index (req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.index()
      return res.json(users)
    } catch (error) {
      next(error)
    }
  }

  public async find (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const user = await UserService.findById(id)
        .catch(() => new ApiError(400, 'User not exists'))
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }

  public async store (req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email } = req.body
      const user = { firstName, lastName, email }

      const schemas = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required()
      })

      const isCheckedSchemas = await schemas.isValid(user)
      if (!isCheckedSchemas) throw new ApiError(400, 'Schema to create user is invalideted')

      const isExistUserWithEmail = await UserService.findByEmail(user.email)
      if (isExistUserWithEmail) throw new ApiError(409, 'E-mail already exists')

      const newUser = await UserService.store(user)
      return res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  }

  public async update (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const { firstName, lastName, email } = req.body
      const userUpdate = { firstName, lastName, email }

      await UserService.findById(id).catch(() => new ApiError(400, 'User not exists'))

      const isExistUserWithEmail = await UserService.findByEmail(userUpdate.email)
      if (isExistUserWithEmail) throw new ApiError(409, 'E-mail already exists')

      await UserService.update(id, userUpdate)
      return res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  }

  public async destroy (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      await UserService.findById(id).catch(() => new ApiError(400, 'User not exists'))

      await UserService.destroy(id)
      return res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
