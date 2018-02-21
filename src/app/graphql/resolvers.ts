import { User, Room } from "app/models"
import { createJwt } from "app/services/jwt_token"
import { authenticated } from "app/services/utils"

const Query = {
  rooms: authenticated(async (root: any, args: any, ctx: any) => {
    const rooms = await Room.find()

    return rooms
  }),

  room: authenticated(async (root: any, args: any, ctx: any) => {
    const room = await Room.findById(args.id)

    return room
  }),
}

const Mutation = {

  createRoom: authenticated(async (root: any, args: any, ctx: any) => {
    const room = await Room.create(args.input)
    return room
  }),

  updateRoom: authenticated(async (root: any, args: any, ctx: any) => {
    const room = await Room.findById(args.input.id)

    await room.set(args.input)
    await room.save()

    return room
  }),

  deleteRoom: authenticated(async (_: any, args: any, ctx: any) => {
    const room = await Room.findByIdAndRemove(args.input.id)
    return room
  }),

  createToken: async (_: any, args: any): Promise<any> => {
    const { login, password } = args.input

    const user = await User.findOne({ login })

    if (!user) {
      throw new Error("user not found")
    }

    if (!await user.comparePassword(password)) {
      throw new Error("wrong password")
    }

    const token = await createJwt(user)

    return {
      user,
      token,
    }
  },

}

export default { Query, Mutation }
