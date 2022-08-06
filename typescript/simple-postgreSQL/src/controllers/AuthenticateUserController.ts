import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import * as yup from 'yup'
import { ApiError } from '../helpers/ApiError'
import UserService from '../services/UserService'

class AuthenticateUserController {
  async login (req: Request, res: Response) {
    const { email, password } = req.body

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    })

    const isValid = await schema.isValid({ email, password })
    if (!isValid) throw new ApiError(400, 'E-mail and password is required')

    const userAlready = await UserService.findUserEmail(email)
    if (!userAlready) throw new ApiError(400, 'E-mail or password incorrect')

    const verifyPassword = bcrypt.compare(password, userAlready.password)
    if (!verifyPassword) throw new ApiError(400, 'E-mail or password incorrect')

    // generate token User
  }
}

export default new AuthenticateUserController()
