"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = require("./resolvers");
const query = `
  type Query {
    rooms(id: ID): [Room]
    room(id: ID): Room
  }
`;
const mutation = `
  type Mutation {
    createRoom(input: RoomCreateInput!): Room
    updateRoom(input: RoomUpdateInput!): Room
    deleteRoom(input: IdInput!): Room

    createToken(input: TokenCreateInput!): Token

    searchRoom(input: SearchInput!): [Room]
  }
`;
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
`;
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
`;
const typeDefs = query + mutation + models + inputs;
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers: resolvers_1.default });
//# sourceMappingURL=schema.js.map