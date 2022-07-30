import { IUser } from '../interfaces/User'

class UserService {
  async store (user: IUser): Promise<IUser> {
    return user
  }
}

export default new UserService()
