import User from '../schemas/User'
import { IUser } from '../interfaces/user'

class UserService {
  async index () {
    try {
      const users = await User.find()
      return users
    } catch (error) {
      console.error(`Error - find users: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async findById (id: string) {
    try {
      const user = await User.findById(id)
      return user
    } catch (error) {
      console.error(`Error - find to Id user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async findByEmail (email: string) {
    try {
      const user = await User.findOne({ email })
      return user
    } catch (error) {
      console.error(`Error - find to e-mail user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async store (user: IUser) {
    try {
      const newUser = await User.create(user)
      return newUser
    } catch (error) {
      console.error(`Error - create user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async update (id: string, userUpdate: IUser) {
    try {
      return await User.updateOne({
        _id: id
      }, {
        $set: {
          ...userUpdate
        }
      })
    } catch (error) {
      console.error(`Error - update user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }

  async destroy (id: string) {
    try {
      return await User.deleteOne({
        _id: id
      })
    } catch (error) {
      console.error(`Error - delete user: ${error}`)
      return { status: 500, message: 'Internal Server Error' }
    }
  }
}

export default new UserService()
