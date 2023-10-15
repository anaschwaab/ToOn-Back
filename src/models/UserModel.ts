import Sequelize from 'sequelize'
import { dbConnection } from '../database/'
import bcrypt from 'bcrypt'
import { IUser } from '../types/user'

const User = dbConnection.define(
  'users',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING,
  },
  {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    hooks: {
      beforeCreate: async (user) => {
        const userInfo = user as unknown as IUser
        const salt = await bcrypt.genSalt(10)
        userInfo.password = await bcrypt.hash(userInfo.password, salt)
      },
    },
  },
)

User.sync().then()

export { User }
