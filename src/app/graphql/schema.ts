import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const query = `
  type Query {
    rooms(id: ID): [Room]
    room(id: ID): Room
  }
`

const mutation = `
  type Mutation {
    createRoom(input: RoomCreateInput!): Room
    updateRoom(input: RoomUpdateInput!): Room
    deleteRoom(input: IdInput!): Room

    createToken(input: TokenCreateInput!): Token

    searchRoom(input: SearchInput!): [Room]
  }
`

const models = `
  type Room {
    id: ID

    region: String
    address: String
    house_number: String
    number_of_rooms: String
    area: String
    floor: String
    deadline: String
    price: String

    images: [String]

    createdAt: String
    updatedAt: String
  }

  type Token {
    token: String!
    user: User
  }

  type User {
    id: ID

    login: String
    createdAt: String
    updatedAt: String
  }
`

const inputs = `
  input IdInput {
    id: ID!
  }

  input RoomCreateInput {
    region: String
    address: String
    house_number: String
    number_of_rooms: String
    area: String
    floor: String
    deadline: String
    price: String

    images: [String]
  }

  input RoomUpdateInput {
    id: ID!
    name: String
  }

  input TokenCreateInput {
    login: String!
    password: String!
  }

  input SearchInput {
    name: String!
  }
`

const typeDefs = query + mutation + models + inputs

export default makeExecutableSchema({ typeDefs, resolvers })
