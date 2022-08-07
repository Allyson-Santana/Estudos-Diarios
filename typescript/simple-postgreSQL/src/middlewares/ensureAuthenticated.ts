import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../helpers/ApiError'
import JWT from 'jsonwebtoken'

export const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) throw new ApiError(401, 'Token unauthorized')

  const [, token] = authorization.split(' ')

  try {
    JWT.verify(token, process.env.JWT_SECRET ?? '')

    return next()
  } catch (error) {
    throw new ApiError(401, 'Token invalid')
  }
}
