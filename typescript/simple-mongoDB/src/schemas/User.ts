import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  email?: string
  firstName?: string
  lastName?: string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

export default model<IUser>('User', UserSchema)
