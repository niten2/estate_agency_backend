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

describe("unauthorized", () => {
  let res

  beforeEach(async () => {
    res = await execGraphql({ query, unauth: true })
  })

  it('should return valid response', async () => {
    expect(res.errors).toContainEqual(matchers.errors_unauthorized_json)
  })
})
