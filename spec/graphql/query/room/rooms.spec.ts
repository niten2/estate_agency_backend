const query = `
  query {
    rooms {
      ${matchers.room_attr}
    }
  }
`

describe("", () => {

  it('should return users', async () => {
    let room = await factory.create('room')
    const res = await execGraphql({ query })

    expect(res.data.rooms).toContainEqual(matchers.room_json)
  })

})
