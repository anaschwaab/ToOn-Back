import { User } from '../models/UserModel'
import { IUser } from '../types/user'

class UserService {
  async create(user: IUser) {
    const userInfo = user as Omit<IUser, string>
    return await User.create(userInfo)
  }

  async findByPk(userId: string) {
    return await User.findByPk(userId)
  }
}

export { UserService }
