import express from 'express'
import cors from 'cors'

import routes from './routes'
import { PostgresDataSource } from './database/connection'
import { errorMiddleware } from './middlewares/apiError'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.prepareExpressError()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    PostgresDataSource.initialize().then(() => {
      console.log('Data Source has been initialized!')
    }).catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
  }

  private routes (): void {
    this.express.use(routes)
  }

  private prepareExpressError () {
    this.express.use(errorMiddleware)
  }
}

export default new App().express
