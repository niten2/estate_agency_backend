import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const query = `
  type Query {
    rooms(id: ID): [Room]
    room(id: ID): Room

    searchRoom(input: SearchInput!): [Room]
  }
`

const mutation = `
  type Mutation {
    createRoom(input: RoomCreateInput!): Room
    updateRoom(input: RoomUpdateInput!): Room
    deleteRoom(input: IdInput!): Room

    createToken(input: TokenCreateInput!): Token
  }
`

const models = `
  type Room {
    id: ID
    name: String
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
    name: String!
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
