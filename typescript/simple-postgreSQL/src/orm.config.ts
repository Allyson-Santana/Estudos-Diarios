import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',
  host: process.env.TYPEORM_DB_HOST,
  port: Number(process.env.TYPEORM_DB_PORT),
  username: process.env.TYPEORM_DB_USERNAME,
  password: process.env.TYPEORM_DB_PASSWORD,
  database: process.env.TYPEORM_DB_DATABASE,
  logging: ["error", "log"],
  entities: [join(__dirname, './entities/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './database/migrations/*{.ts,.js}')]
}
