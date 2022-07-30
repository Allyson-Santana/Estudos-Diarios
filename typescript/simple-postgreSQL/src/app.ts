import express from 'express'
import cors from 'cors'
import { DataSource } from "typeorm"
import { join } from 'path';

import routes from './routes'
import * as dotenv from 'dotenv'

dotenv.config();

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const PostgresDataSource = new DataSource({
      type: 'postgres',
      host: process.env.TYPEORM_DB_HOST,
      port: Number(process.env.TYPEORM_DB_PORT),
      username: process.env.TYPEORM_DB_USERNAME,
      password: process.env.TYPEORM_DB_PASSWORD,
      database: process.env.TYPEORM_DB_DATABASE,
      logging: ["error", "log"],
      entities: [join(__dirname, './entities/*{.ts,.js}')],
      migrations: [join(__dirname, './database/migrations/*{.ts,.js}')]
    })
    PostgresDataSource.initialize()
      .then(() => {
          console.log("Data Source has been initialized!")
        })
      .catch((err) => {
          console.error("Error during Data Source initialization", err)
      })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
