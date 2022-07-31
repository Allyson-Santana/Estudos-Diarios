import { IUser } from '../interfaces/user'
import { userRepository } from '../repositiries/userRepository'

class UserService {
  async index () {
    try {
      const users = await userRepository.find()
      return users
    } catch (error) {
      console.error(`Error - create user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async store (user: IUser) {
    try {
      const newUser = await userRepository.save(user)
      return newUser
    } catch (error) {
      console.error(`Error - create user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }
}

export default new UserService()
