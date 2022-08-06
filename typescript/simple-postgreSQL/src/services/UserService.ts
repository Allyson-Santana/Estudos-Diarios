import { IUser } from '../interfaces/user'
import { userRepository } from '../repositiries/userRepository'
import bcrypt from 'bcrypt'
import { ApiError } from '../helpers/ApiError'

class UserService {
  async index () {
    try {
      const users = await userRepository.find()
      return users
    } catch (error) {
      console.error(`Error - find to id user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }

  async findUserEmail (email: string) {
    try {
      const users = await userRepository.findOne({ where: { email } })
      return users
    } catch (error) {
      console.error(`Error - find to e-mail user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }

  async findUserId (id: string): Promise<IUser | null> {
    try {
      const users = await userRepository.findOneBy({ id })
      return users
    } catch (error) {
      console.error(`Error - create user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }

  async store (user: IUser): Promise<IUser > {
    try {
      const hashPassword = await bcrypt.hash(user.password, 8)

      const newUser = userRepository.create({
        ...user,
        password: hashPassword
      })

      await userRepository.save(newUser)

      return newUser
    } catch (error) {
      console.error(`Error - create user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }

  async update (id: string, userUpdate: IUser): Promise<void> {
    try {
      const currentUser = await userRepository.findOneBy({ id })
      await userRepository.update(id, {
        ...currentUser,
        ...userUpdate
      })
    } catch (error) {
      console.error(`Error - update user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }

  async destroy (id: string): Promise<void> {
    try {
      await userRepository.delete(id)
    } catch (error) {
      console.error(`Error - delete user: ${error}`)
      throw new ApiError(500, 'Internal Server Error')
    }
  }
}

export default new UserService()
