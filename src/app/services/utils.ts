import { User } from "app/models"
import { verifyJwt } from 'app/services/jwt_token'
import settings from 'config/settings'

export const timeout = (ms: number): object => {
  if (settings.isEnvTest) return
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const getTokenFromHeader = (req: any): string | null => {
  if (!req.header('Authorization') || !req.header('authorization')) {
    return null
  }

  const parts = req.header('Authorization').split(' ')
  const token = parts[1]

  return token
}

export const authenticated = (fn: any) => async (parent: any, args: any, ctx: any, info: any) => {
  let { token } = ctx

  if (!token) {
    throw new Error("token not found")
  }

  let payload

  try {
    payload = await verifyJwt(token)
  } catch (err){
    console.log("ERORR verifyJwt", err)
    throw new Error("token not valid")
  }

  const user = await User.findById(payload.user_id)

  if (!user) {
    throw new Error("user not found")
  }

  ctx.user = user

  return fn(parent, args, ctx, info)
}
