import * as mongoose from "mongoose"
import * as bcrypt from "bcrypt"
import * as crypto from "crypto"

export interface UserType extends mongoose.Document {
  login: string
  password: string

  comparePassword: (candidatePassword: string) => Promise<boolean>
}

const schema = new mongoose.Schema({
  login: {
    unique: true,
    required: true,
    type: String,
  },

  password: {
    unique: true,
    required: true,
    type: String,
  },

}, {
  timestamps: true
})

schema.pre('save', async function(next: any): Promise<any> {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  return next()
})

schema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model<UserType>('User', schema)
