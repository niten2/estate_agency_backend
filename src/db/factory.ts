import * as faker from "faker"
import { factory } from 'factory-girl'
import { User, Room } from "config/initialize/mongoose"

factory.define('user', User, {
  login: faker.name.findName,
  password: faker.internet.password,
})

factory.define('room', Room, {
  name: faker.name.findName,
})

export default factory
