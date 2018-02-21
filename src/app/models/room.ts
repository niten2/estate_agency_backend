import * as mongoose from "mongoose"

export interface LoanType extends mongoose.Document {
  name: string
  // area: '',
  // adress: '',
  // count: '',
  // floor: '',
  // price: '',
  // deadline: '',
  // size: '',
  // city: '',
  // describe: '',
}

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

}, {
  timestamps: true
})

export default mongoose.model<LoanType>('Room', schema)
