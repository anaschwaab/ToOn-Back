import { Sequelize } from 'sequelize'
import { config } from 'dotenv'

config()

export const dbConnection = new Sequelize({
  dialect: 'postgres',
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
})
