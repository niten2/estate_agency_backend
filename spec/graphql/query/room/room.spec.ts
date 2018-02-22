import { Room } from "config/initialize/mongoose"

const query = `
  query room($id: ID!) {
    room(id: $id) {
      ${matchers.room_attr}
    }
  }
`

describe("valid params given", () => {
  let room
  let res

  beforeEach(async () => {
    room = await factory.create('room')

    const variableValues = {
      id: room.id
    }

    res = await execGraphql({ query, variableValues })
  })

  it('should have room_json', async () => {
    expect(res.data.room).toEqual(matchers.room_json)
  })
})

describe("wrong params given", () => {

  it('should return error', async () => {
    const variableValues = {
      id: "string"
    }

    const res = await execGraphql({ query, variableValues })

    expect(res.errors).toContainEqual(matchers.errors_json)
  })

})
