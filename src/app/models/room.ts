import * as mongoose from "mongoose"

export interface RoomType extends mongoose.Document {
  region: string
  address: string
  house_number: string
  number_of_rooms: string
  area: string
  floor: string
  deadline: string
  price: string
  images: [string]
}

const schema = new mongoose.Schema({
  region: {
    type: String,
  },

  address: {
    type: String,
  },

  house_number: {
    type: String,
  },

  number_of_rooms: {
    type: String,
  },

  area: {
    type: String,
  },

  floor: {
    type: String,
  },

  deadline: {
    type: String,
  },

  price: {
    type: String,
  },

  images: [{
    type: String
  }],

}, {
  timestamps: true
})

export default mongoose.model<RoomType>('Room', schema)
