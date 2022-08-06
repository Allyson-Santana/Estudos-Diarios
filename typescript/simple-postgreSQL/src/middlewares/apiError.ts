import { Request, Response } from 'express'
import { ApiError } from '../helpers/ApiError'

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal Server Error'

  console.error(statusCode, error.message)

  return res.status(statusCode).json({ statusCode, message })
}
