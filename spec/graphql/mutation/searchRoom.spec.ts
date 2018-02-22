import { Room } from "config/initialize/mongoose"

const query = `
  mutation searchRoom($input: SearchInput!) {
    searchRoom(input: $input) {
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
      input: {
        name: room.name,
      }
    }

    res = await execGraphql({ query, variableValues })
  })

  it('should have room_json', async () => {
    expect(res.data.searchRoom).toContainEqual(matchers.room_json)
  })
})

describe("empty params given", () => {
  it('should return empty', async () => {
    const variableValues = {
      input: {
        name: "string"
      }
    }

    const res = await execGraphql({ query, variableValues })

    expect(res.data.searchRoom).toEqual([])
  })
})

describe("unauthorized", () => {
  let res
  let room

  beforeEach(async () => {
    room = await factory.create('room')

    const variableValues = {
      input: {
        name: room.name,
      }
    }

    res = await execGraphql({ query, variableValues, unauth: true })
  })

  it('should return valid response', async () => {
    expect(res.errors).toContainEqual(matchers.errors_unauthorized_json)
  })
})
