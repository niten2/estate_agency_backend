import factory from 'db/factory'
import { connectDb, closeDb } from "config/initialize/mongoose"

const create = async (): Promise<void> => {
  try {
    await connectDb()

    await factory.create('user', { login: "admin", password: "12345" })

    // await factory.create("room")
    // await factory.create("room")
    // await factory.create("room")

    await closeDb()

    console.log("models created")
  } catch (err) {
    console.log(err.stack)
  }

  process.exit()
}

create()
